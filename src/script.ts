/* const addId = <T extends {
    name: string;
    age: number;
}
>(obj: T) => {

    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
};

let user = addId({
    name: "Musfiq",
    age: 30,
    country: "Bangladehs"
});

ß
//let user = 'Sakib';

addId(user); */


interface APIResponse<T> {

    status: number;
    type: string,
    data: T
}

const response1: APIResponse<object> = {
    status: 200,
    type: 'good',
    data: {
        name: 'Test',
        something: 300
    }
}

