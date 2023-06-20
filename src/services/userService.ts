import User from "../interfaces/User";

async function fetchUserData(userId: number): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
        throw new Error("Failed to fetch user data");
    }
    const userData: User = await response.json();
    return userData;
}

export default fetchUserData;
