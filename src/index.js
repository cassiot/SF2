import { Ken } from "./entities/fighters/Ken.js";
import { Ryu } from "./entities/fighters/Ryu.js";
import { Stage } from "./entities/Stage.js";
import { FpsCounter } from "./FpsCounter.js";
import { STAGE_FLOOR } from "./constants/stage.js";
import { FighterDirection, FighterState } from "./constants/fighters.js";

function populateMoveDropdown() {
    const dropdown = document.getElementById('state-dropdown');

    Object.entries(FighterState).forEach(([, value]) => {
        const option = document.createElement('option');
        option.setAttribute('value', value);
        option.innerText = value;
        dropdown.appendChild(option);
    });
}

function handleFormSubmit(event, fighters) {
    event.preventDefault();

    const selectedCheckboxes = Array.from(event.target.querySelectorAll('input:checked')).map(checkbox => checkbox.value);
    const options = event.target.querySelector('select');

    fighters.forEach(fighter => {
        if (selectedCheckboxes.includes(fighter.name)) {
            fighter.changeState(options.value);
        }
    });
}

window.addEventListener('load', function () {
    populateMoveDropdown();

    var canvasAll = document.querySelectorAll('canvas'); 
    const canvasEl = canvasAll[0];
    const canvasTest = canvasAll[1];

    const context = canvasEl.getContext('2d');
    const contextTest = canvasTest.getContext('2d');

    const fighters = [
        new Ken(280, STAGE_FLOOR, FighterDirection.LEFT),
        new Ryu(104, STAGE_FLOOR, FighterDirection.RIGHT),
    ]

    context.imageSmoothingEnabled = false;

    const entities = [
        new Stage(),
        ...fighters,
        new FpsCounter()
    ];

    let frameTime = {
        previous: 0,
        secondsPassed: 0
    }

    function frame(time) {
        window.requestAnimationFrame(frame);

        frameTime = {
            secondsPassed: (time - frameTime.previous) / 1000,
            previous: time
        }

        for (const entity of entities) {
            entity.update(frameTime, context);
        }

        for (const entity of entities) {
            entity.draw(context);
        }
    }

    var imgIndex = 1;
    this.document.addEventListener('submit', (event) => handleFormSubmit(event, fighters));
    onkeypress = (event) => {
        if(event.code == 'Space'){
            console.log('test');
            var ken = fighters[1];
            
            const [frameKey] = ken.animations[ken.currentState][ken.animationFrame];
        
            const [[x, y, width, height],
                [originX, originY]] = ken.frames.get(`jumpUp-${imgIndex}`);
    
                contextTest.reset();
            contextTest.drawImage(ken.image, x, y, width, height, 5, 5, width, height);
            imgIndex++;
            if(imgIndex > 7)
            imgIndex = 1;
        }
    };

    window.requestAnimationFrame(frame);
});