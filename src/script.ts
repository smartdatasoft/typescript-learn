//ENUMS

enum RType {
    SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN
}
interface APIResponse<T> {

    status: number;
    type: RType,
    data: T
}

const response1: APIResponse<object> = {
    status: 200,
    type: RType.FORBIDDEN,
    data: {
        name: 'Test',
        something: 300
    }
}


console.log(response1);
