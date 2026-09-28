const billAmount = 80;
const tipPercentage = 0.15;

// Calculate amounts
const tipAmount = billAmount * tipPercentage;
const totalBill = billAmount + tipAmount;

// Print the message
console.log(`Your bill is $${billAmount}. The tip is $${tipAmount}, making the total $${totalBill}.`);
