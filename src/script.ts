class Player {
    name: string;
    age: number;
    country: string;

    constructor(n: string, a: number, c: string) {

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

console.log(musfiq.age);

const players: Player[] = [];

players.push(musfiq);
players.push(sakib);
