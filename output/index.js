import validateUser from "./utils/validateUser.js";
const newUser = {
    username: "john_doe",
    password: "password123",
    email: "johnexample.com",
};
const isValidUser = validateUser(newUser);
