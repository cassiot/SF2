import { Ken } from "./entities/fighters/Ken.js";
import { Ryu } from "./entities/fighters/Ryu.js";
import { Stage } from "./entities/Stage.js";
import { FpsCounter } from "./FpsCounter.js";
import { STAGE_FLOOR } from "./constants/stage.js";
import { FighterDirection, FighterState } from "./constants/fighters.js";
import { registerKeyboardEvents } from "./inputHandler.js";
import { Shadow } from "./entities/fighters/Shadow.js";

export class StreetFighterGame {

    constructor() {
        this.debugImageIndex = 1;
        this.allCanvas = document.querySelectorAll('canvas');

        this.context = this.getContext();
        this.debugContext = this.getDebugContext();

        this.fighters = [
            new Ryu(104, STAGE_FLOOR, FighterDirection.RIGHT, 0),
            new Ken(280, STAGE_FLOOR, FighterDirection.LEFT, 1),
        ]

        this.entities = [
            new Stage(),
            ...this.fighters.map(fighter => new Shadow(fighter)),
            ...this.fighters,
            new FpsCounter()
        ];

        this.frameTime = {
            previous: 0,
            secondsPassed: 0
        }
    }

    getContext() {
        const canvasEl = this.allCanvas[0];
        const context = canvasEl.getContext('2d');
        context.imageSmoothingEnabled = false;
        return context;
    }

    getDebugContext() {
        const debugCanvas = this.allCanvas[1];
        const debugContext = debugCanvas.getContext('2d');
        return debugContext;
    }

    update() {
        for (const entity of this.entities) {
            entity.update(this.frameTime, this.context);
        }
    }

    draw() {
        for (const entity of this.entities) {
            entity.draw(this.context);
        }
    }

    frame(time) {
        window.requestAnimationFrame(this.frame.bind(this));

        this.frameTime = {
            secondsPassed: (time - this.frameTime.previous) / 1000,
            previous: time
        }

        this.update();
        this.draw();
    }

    handleDebugCanvas(event) {
        onkeypress = (event) => {
            if (event.code == 'Space') {
                const fighter0 = this.fighters[0];
                const fighter1 = this.fighters[1];

                var len = fighter1.animations[fighter1.currentState].length;

                const [frameKey] = fighter1.animations[fighter1.currentState][fighter1.animationFrame];

                const [[x, y, width, height],
                    [originX, originY]] = fighter1.frames.get(`jumpUp-${this.debugImageIndex}`);

                this.debugContext.reset();
                this.debugContext.drawImage(fighter1.image, x, y, width, height, 5, 5, width, height);
                this.debugImageIndex++;
                if (this.debugImageIndex > len)
                    this.debugImageIndex = 1;
            }
        };
    }

    start() {
        registerKeyboardEvents();

        document.addEventListener('keypress', this.handleDebugCanvas.bind(this));

        window.requestAnimationFrame(this.frame.bind(this));
    }
}