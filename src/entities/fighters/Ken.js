import { FighterState } from "../../constants/fighters.js";
import { Fighter } from "./Fighter.js";

export class Ken extends Fighter {
    constructor(x, y, direction) {
        super('Ken', x, y, direction);

        this.image = document.querySelector('img[alt="ken"]');

        this.frames = new Map([

            ['idle-1', [[83, 25, 60, 89], [34, 86]]],
            ['idle-2', [[16, 24, 59, 89], [33, 87]]],
            ['idle-3', [[218, 22, 58, 92], [32, 89]]],
            ['idle-4', [[284, 21, 55, 93], [31, 90]]],

            ['jumpUp-1', [[16, 1610, 55, 85], [29, 85]]],
            ['jumpUp-2', [[79, 1586, 56, 104], [32, 107]]],
            ['jumpUp-3', [[143, 1549, 50, 89], [25, 103]]],
            ['jumpUp-4', [[201, 1527, 54, 77], [25, 103]]],
            ['jumpUp-5', [[263, 1524, 48, 70], [28, 101]]],
            ['jumpUp-6', [[319, 1534, 48, 86], [25, 103]]],
            ['jumpUp-7', [[375, 1560, 55, 103], [32, 107]]],

            // ['jump-roll-1', [[16, 2261, 55, 85], ]],
            ['jump-roll-1', [[79, 2238, 55, 103], [25, 106]]],
            ['jump-roll-2', [[142, 2198, 61, 78], [22, 90]]],
            ['jump-roll-3', [[211, 2204, 104, 42], [61, 76]]],
            ['jump-roll-4', [[323, 2167, 53, 82], [42, 111]]],
            ['jump-roll-5', [[384, 2198, 122, 44], [71, 81]]],
            ['jump-roll-6', [[514, 2183, 71, 87], [53, 98]]],
            ['jump-roll-7', [[593, 2188, 55, 103], [32, 107]]],


            ['forwards-1', [[16, 162, 53, 83], [27, 81]]],
            ['forwards-2', [[77, 157, 60, 88], [35, 86]]],
            ['forwards-3', [[145, 155, 64, 90], [35, 87]]],
            ['forwards-4', [[217, 156, 63, 89], [29, 88]]],
            ['forwards-5', [[288, 156, 54, 89], [25, 89]]],
            ['forwards-6', [[350, 156, 50, 89], [25, 86]]],

            ['backwards-1', [[448, 158, 61, 87], [35, 85]]],
            ['backwards-2', [[517, 155, 59, 90], [36, 87]]],
            ['backwards-3', [[584, 155, 57, 90], [36, 88]]],
            ['backwards-4', [[649, 155, 58, 90], [38, 89]]],
            ['backwards-5', [[715, 154, 58, 91], [36, 88]]],
            ['backwards-6', [[781, 156, 57, 89], [36, 87]]],
        ]);

        this.animations = {
            [FighterState.IDLE]: [
                ['idle-1', 68], ['idle-2', 68], ['idle-3', 68], ['idle-4', 68], ['idle-3', 68], ['idle-2', 68]
            ],
            [FighterState.JUMP_UP]: [
                ['jumpUp-1', 100], ['jumpUp-2', 100], ['jumpUp-3', 100], ['jumpUp-4', 100], ['jumpUp-5', 100], ['jumpUp-6', 100], ['jumpUp-7', -1]
            ],
            [FighterState.WALK_FORWARD]: [
                ['forwards-1', 65], ['forwards-2', 65], ['forwards-3', 65], ['forwards-4', 65], ['forwards-5', 65], ['forwards-6', 65]
            ],
            [FighterState.WALK_BACKWARD]: [
                ['backwards-1', 65], ['backwards-2', 65], ['backwards-3', 65], ['backwards-4', 65], ['backwards-5', 65], ['backwards-6', 65]
            ],
            [FighterState.JUMP_FORWARD]: [
                ['jump-roll-1', 200], ['jump-roll-2', 50], ['jump-roll-3', 50], ['jump-roll-4', 50], ['jump-roll-5', 50], ['jump-roll-6', 50], ['jump-roll-7', 0]
            ],
            [FighterState.JUMP_BACKWARD]: [
                ['jump-roll-7', 200], ['jump-roll-6', 50], ['jump-roll-5', 50], ['jump-roll-4', 50], ['jump-roll-3', 50], ['jump-roll-2', 50], ['jump-roll-1', 0]
            ],
        };

        this.initialVelocity = {
            x: {
                [FighterState.WALK_FORWARD]: 200,
                [FighterState.WALK_BACKWARD]: -150,
                [FighterState.JUMP_FORWARD]: 170,
                [FighterState.JUMP_BACKWARD]: -200,
            },

            jump: -420,
        };

        this.gravity = 1000;
    }
}