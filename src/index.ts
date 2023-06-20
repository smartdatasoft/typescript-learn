import fetchUserData from "./services/userService.js";
import User from "./interfaces/User.js";

async function displayUser(userId: number): Promise<void> {
    try {
        const user: User = await fetchUserData(userId);
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}

displayUser(1);
