import { Player } from "./classes/Player.js";
import { IsPlayer } from "./interfaces/IsPlayer.js";

const musfiq = new Player('Musfiq', 40, 'Bangladesh');
let sakib: IsPlayer;

sakib = new Player('Sakib', 40, 'Bangladesh');


const players: IsPlayer[] = [];

players.push(musfiq);
players.push(sakib);


/* interface RectangleOptions {
    width: number;
    length: number;
}
function drawRectangle(options: RectangleOptions) {
    let width = options.width;
    let length = options.length;
}

let threeDoptions = {
    width: 30,
    length: 20,
    height: 10,
};
drawRectangle(threeDoptions); */