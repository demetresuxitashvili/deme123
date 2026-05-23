class BankAccount {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this.balance = 0;

        const savedBalance = localStorage.getItem('balance');
        if (savedBalance) {
            this.balance = Number(savedBalance)
        } else {
            this.balance = 0;
        }
    };
    // ამატებს თანხას ბალანსზე
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.saveBalance();
        };
    }
    // აკლებს ფულს ბალანსიდან
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.saveBalance();
        };
    };

    saveBalance() {
        localStorage.setItem('balance', this.balance)
    }

    get checkBalance() {
        return this.balance;
    };
}

const user = new BankAccount('demetre', 'sukhitashvili');


const transaction = () => {
    const depositInput = document.getElementById('deposit');
    const withdrawInput = document.getElementById('withdraw');
    const balanceText = document.getElementById('balanceText');

    const depositAmount = Number(depositInput.value);
    const withdrawAmount = Number(withdrawInput.value);

    if (depositAmount) {
        user.deposit(depositAmount);

    };

    if (withdrawAmount) {
        user.withdraw(withdrawAmount)
    };


    balanceText.textContent = `Your balance is ${user.checkBalance}`;

    depositInput.value = '';
    withdrawInput.value = '';
}