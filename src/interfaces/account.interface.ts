interface Account {
    accountNumber: string;
    balance: number;
    ownerName: string;
    deposit(amount: number): void;
    withdraw(amount: number): void;
}

export default Account;