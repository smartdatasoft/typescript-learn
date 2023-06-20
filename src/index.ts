import User from "./interfaces/User.js";
import validateUser from "./utils/validateUser.js";

const newUser: User = {
    username: "john_doe",
    password: "password123",
    email: "johnexample.com",
};

const isValidUser: boolean = validateUser(newUser);
