let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

//  a) How many function calls are there in this file? Write down all the lines where a function call is made.
//      There are 5 function calls in this file:
//          1. `carPrice.replaceAll(",", "")` on line 4.
//          2. `Number(carPrice.replaceAll(",", ""))` on line 4.
//          3. `priceAfterOneYear.replaceAll(",", "")` on line 5.
//          4. `Number(priceAfterOneYear.replaceAll(",", ""))` on line 5.
//          5. `console.log(...)` on line 10.

//  b) Run the code and identify the line where the error is coming from – why is this error occurring? How can you fix this problem?
//      The error is coming from the line: `priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));`
//      The error occurs because there is a missing comma between the two arguments in the `replaceAll()` method: `(",", "")`. It should be `replaceAll(",", "")`.
//      To fix this, add a comma between the empty string and the comma character within the `replaceAll` function call, e.g. `priceAfterOneYear.replaceAll(",", "")`.

//  c) Identify all the lines that are variable reassignment statements.
//      - carPrice = Number(carPrice.replaceAll(",", ""));
//      - priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

//  d) Identify all the lines that are variable declarations.
//      - let carPrice = "10,000";
//      - let priceAfterOneYear = "8,543";
//      - const priceDifference = carPrice - priceAfterOneYear;
//      - const percentageChange = (priceDifference / carPrice) * 100;

//  e) Describe what the expression Number(carPrice.replaceAll(",", "")) is doing – what is the purpose of this expression?
//      This expression is performing two main operations:
//          1. `carPrice.replaceAll(",", "")`: This part of the expression is called on the `carPrice` string ("10,000"). The `replaceAll()` method is used to remove all occurrences of the comma (",") character from the string. After this operation, "10,000" becomes "10000".
//          2. `Number(...)`: This part then takes the resulting string ("10000") and converts it into a numerical data type.
//      The purpose of this entire expression is to convert the string representation of a price, which includes a comma for readability, into a pure numerical value that can be used for mathematical calculations (such as subtraction and division to find the difference and percentage change).