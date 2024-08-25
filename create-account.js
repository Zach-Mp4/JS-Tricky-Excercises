function createAccount(pin, initialDeposit = 0) {
    let balance = initialDeposit;
    let currentPin = pin;
  
    return {
      checkBalance: function(inputPin) {
        if (inputPin === currentPin) {
          return `$${balance}`;
        } else {
          return "Invalid PIN.";
        }
      },
  
      deposit: function(inputPin, amount) {
        if (inputPin === currentPin) {
          if (amount > 0) {
            balance += amount;
            return `Successfully deposited $${amount}. Current balance: $${balance}.`;
          } else {
            return "Deposit amount must be positive.";
          }
        } else {
          return "Invalid PIN.";
        }
      },
  
      withdraw: function(inputPin, amount) {
        if (inputPin === currentPin) {
          if (amount > 0) {
            if (amount <= balance) {
              balance -= amount;
              return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
            } else {
              return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            }
          } else {
            return "Withdrawal amount must be positive.";
          }
        } else {
          return "Invalid PIN.";
        }
      },
  
      changePin: function(oldPin, newPin) {
        if (oldPin === currentPin) {
          if (newPin.length === 4) {  // Assuming PIN must be a 4-digit string
            currentPin = newPin;
            return "PIN successfully changed!";
          } else {
            return "New PIN must be 4 digits.";
          }
        } else {
          return "Invalid PIN.";
        }
      }
    };
  }
module.exports = { createAccount };
