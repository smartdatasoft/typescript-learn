"use strict";
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
const musfiq = new Player('Musfiq', 40, 'Bangladesh');
const sakib = new Player('Sakib', 38, 'Bangladesh');
sakib.name = "Musfiq";
console.log(sakib.name);
const players = [];
players.push(musfiq);
players.push(sakib);
