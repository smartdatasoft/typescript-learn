import BankAccount from "./classes/bank-account.class";
// Creating an instance of BankAccount
const myAccount = new BankAccount("1234567890", 1000, "John Doe");
// Using the account
console.log(`Account owner: ${myAccount.ownerName}`);
console.log(`Account balance: ${myAccount.balance}`);
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.withdraw(2000);
