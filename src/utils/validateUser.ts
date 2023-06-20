import User from "../interfaces/User";

function validateUser(user: User): boolean {
    // Validate username, password, and email
    // Return true if the user is valid, false otherwise
    // ...
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (user.email.match(validRegex)) {
        alert("Valid email address!");
        return true;
    } else {
        alert("Invalid email address!");
        return false;
    }
}
export default validateUser;
