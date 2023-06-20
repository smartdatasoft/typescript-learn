import Account from "../interfaces/account.interface";

class BankAccount implements Account {
    accountNumber: string;
    balance: number;
    ownerName: string;

    constructor(accountNumber: string, balance: number, ownerName: string) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.ownerName = ownerName;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}`);
    }

    withdraw(amount: number): void {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${this.accountNumber}`);
        } else {
            console.log(`Insufficient funds in account ${this.accountNumber}`);
        }
    }
}


export default BankAccount;