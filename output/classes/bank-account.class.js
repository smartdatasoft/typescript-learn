class BankAccount {
    constructor(accountNumber, balance, ownerName) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.ownerName = ownerName;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}`);
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}`);
        }
        else {
            console.log(`Insufficient funds in account ${this.accountNumber}`);
        }
    }
}
export default BankAccount;
