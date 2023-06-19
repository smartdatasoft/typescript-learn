class Player {
    /*  private name: string;
     public age: number;
     readonly country: string;
  */
    /*     constructor(n: string, a: number, c: string) {
    
            this.name = n;
            this.age = a;
            this.country = c;
        } */

    constructor(
        private name: string,
        public age: number,
        readonly country: string

    ) { }

    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}


const musfiq = new Player('Musfiq', 40, 'Bangladesh');
const sakib = new Player('Sakib', 38, 'Bangladesh');

sakib.name = "Musfiq";
sakib.age = 40;
sakib.country = 'England';

console.log(sakib.name);
console.log(sakib.age);
console.log(sakib.country);

const players: Player[] = [];

players.push(musfiq);
players.push(sakib);
