// The following code will throw an error when run
// since the variable cardNumber is an integer.
// The slice method is not available on integers.
// const cardNumber = 4533787178994213;
// const last4Digits = cardNumber.slice(-4);

// Converting the integer to a string first will fix the issue.
const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);
console.log(last4Digits);
