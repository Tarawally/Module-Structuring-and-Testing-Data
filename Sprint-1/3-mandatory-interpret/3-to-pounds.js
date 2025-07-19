const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This programme takes a string representing a price in pence
// It then constructs a string representing the price in pounds

// You need to provide a step-by-step breakdown of each line in this programme
// Describe the purpose and reasoning behind each step

// To begin, we start with:
// 1. const penceString = "399p": Initialises a string variable with the value "399p".
// This represents the initial price in pence that the programme will process.

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
// This line removes the trailing 'p' from `penceString` by:
//    - `penceString.length`: Obtains the total length of `penceString`, which is 4.
//    - `penceString.length - 1`: Calculates the index of the last character, which is 'p'.
//    - `penceString.substring(0, penceString.length - 1)`: Extracts the substring from the start of `penceString` up to, but not including, the last character.
//    - The result is the removal of the 'p' character, leaving "399".

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// This line declares a constant variable named `paddedPenceNumberString`.
//    - It applies the `padStart()` method to `penceStringWithoutTrailingP` ("399").
//    - `padStart(3, "0")` checks if the string's length is less than 3. 
//    - If so, it adds "0" to the beginning of the string until its length reaches 3.
//    - In this case, "399" already has a length of 3, so it remains unchanged.
//    - The purpose of this step is to ensure the pence value always has at least three digits (e.g., "5p" becomes "005", "99p" becomes "099").
//    - This is important for consistently extracting the pounds and pence parts later, especially for values less than 100p.

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
// This line extracts the pounds part of the price.
//    - It declares a constant variable named `pounds`.
//    - It uses `substring(0, paddedPenceNumberString.length - 2)` on `paddedPenceNumberString` ("399").
//    - This extracts the substring from the start of the string up to, but not including, the last two characters.
//    - In this example, it extracts "3" from "399".

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// This line extracts and formats the pence part of the price.
//    - It declares a constant variable named `pence`.
//    - It uses `substring(paddedPenceNumberString.length - 2)` on `paddedPenceNumberString` ("399").
//    - This extracts the last two characters of the string, which are "99".
//    - The `padEnd(2, "0")` method ensures the extracted pence value has at least two digits.

// 6. console.log(`£${pounds}.${pence}`);
// This final line constructs and prints the formatted price string to the console.
//    - It uses a template literal to format the output as "£{pounds}.{pence}".
//    - In this case, it outputs "£3.99", which is the price in pounds and pence format.
//    - The `console.log` function displays the final result in the console.
