import { FighterState, FrameDelay } from "../../constants/fighters.js";
import { Fighter } from "./Fighter.js";

export class Ken extends Fighter {
    constructor(x, y, direction, playerId) {
        super('Ken', x, y, direction, playerId);

        this.image = document.querySelector('img[alt="ken"]');

        this.frames = new Map([

            ['idle-1', [[83, 25, 60, 89], [34, 86]]],
            ['idle-2', [[16, 24, 59, 89], [33, 87]]],
            ['idle-3', [[218, 22, 58, 92], [32, 89]]],
            ['idle-4', [[284, 21, 55, 93], [31, 90]]],

            ['jump-up-1', [[79, 1586, 56, 104], [32, 107]]],
            ['jump-up-2', [[143, 1549, 50, 89], [25, 103]]],
            ['jump-up-3', [[201, 1527, 54, 77], [25, 103]]],
            ['jump-up-4', [[263, 1524, 48, 70], [28, 101]]],
            ['jump-up-5', [[319, 1534, 48, 86], [25, 103]]],
            ['jump-up-6', [[375, 1560, 55, 103], [32, 107]]],

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

            ['jump-start-land', [[16, 1610, 55, 85], [29, 85]]],

            ['crouch-1', [[16, 1131, 53, 83], [27, 81]]],
            ['crouch-2', [[77, 1145, 57, 69], [25, 66]]],
            ['crouch-3', [[142, 1153, 61, 61], [25, 58]]],

            ['idle-turn-1', [[453, 19, 54, 95], [29, 92]]],
            ['idle-turn-2', [[515, 16, 58, 98], [30, 94]]],
            ['idle-turn-3', [[581, 20, 54, 94], [27, 90]]],

            ['crouch-turn-1', [[251, 1153, 53, 61], [26, 58]]],
            ['crouch-turn-2', [[312, 1153, 52, 61], [27, 58]]],
            ['crouch-turn-3', [[372, 1153, 53, 61], [29, 58]]],
        ]);

        this.animations = {
            [FighterState.IDLE]: [
                ['idle-1', 68], ['idle-2', 68], ['idle-3', 68], ['idle-4', 68], ['idle-3', 68], ['idle-2', 68]
            ],
            [FighterState.WALK_FORWARD]: [
                ['forwards-1', 65], ['forwards-2', 65], ['forwards-3', 65], ['forwards-4', 65], ['forwards-5', 65], ['forwards-6', 65]
            ],
            [FighterState.WALK_BACKWARD]: [
                ['backwards-1', 65], ['backwards-2', 65], ['backwards-3', 65], ['backwards-4', 65], ['backwards-5', 65], ['backwards-6', 65]
            ],
            [FighterState.JUMP_START]: [
                ['jump-start-land', 50], ['jump-start-land', -2]
            ],
            [FighterState.JUMP_UP]: [
                ['jump-up-1', 180], ['jump-up-2', 100], ['jump-up-3', 100], ['jump-up-4', 100], ['jump-up-5', 100], ['jump-up-6', -1],
            ],
            [FighterState.JUMP_FORWARD]: [
                ['jump-roll-1', 200], ['jump-roll-2', 50], ['jump-roll-3', 50], ['jump-roll-4', 50], ['jump-roll-5', 50], ['jump-roll-6', 50], ['jump-roll-7', 0]
            ],
            [FighterState.JUMP_BACKWARD]: [
                ['jump-roll-7', 200], ['jump-roll-6', 50], ['jump-roll-5', 50], ['jump-roll-4', 50], ['jump-roll-3', 50], ['jump-roll-2', 50], ['jump-roll-1', 0]
            ],
            [FighterState.JUMP_LAND]: [
                ['jump-start-land', 33], ['jump-start-land', 117], ['jump-start-land', -2]
            ],
            [FighterState.CROUCH]: [
                ['crouch-3', 0]
            ],
            [FighterState.CROUCH_DOWN]: [
                ['crouch-1', 30], ['crouch-2', 30], ['crouch-3', 30], ['crouch-3', -2], 
            ],
            [FighterState.CROUCH_UP]: [
                ['crouch-3', 30], ['crouch-2', 30], ['crouch-1', 30], ['crouch-1', -2], 
            ],
            [FighterState.IDLE_TURN]: [
                ['idle-turn-3', 33], ['idle-turn-2', 33], ['idle-turn-1', 33], ['idle-turn-1', FrameDelay.TRANSITION], 
            ],
            [FighterState.CROUCH_TURN]: [
                ['crouch-turn-3', 33], ['crouch-turn-2', 33], ['crouch-turn-1', 33], ['crouch-turn-1', FrameDelay.TRANSITION], 
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