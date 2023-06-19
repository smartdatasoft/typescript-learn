import { Player } from "./classes/Player.js";

const musfiq = new Player('Musfiq', 40, 'Bangladesh');
const sakib = new Player('Sakib', 38, 'Bangladesh');

console.log(sakib.age);
console.log(sakib.country);

const players: Player[] = [];

players.push(musfiq);
players.push(sakib);
