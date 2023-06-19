/* let myFunc: (x: string, y: string) => void;

let add: (x: number, y: number) => number;

add = (a: number, b: number) => {

    console.log(a + b);
    return a + b;
} */


let userDetails: (id: number | string, userInfo: {

    name: string,
    age: number,
}) => void;

userDetails = (
    id: number | string, userInfo: {
        name: string,
        age: number
    }) => {


}

