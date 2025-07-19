const movieLength = -8784.847389543985709847385
const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

//  a) How many variable declarations are there in this program?
//      There are 6 variable declarations in this program, these are: 
//          1. `movieLength`
//          2. `remainingSeconds`
//          3. `totalMinutes`
//          4. `remainingMinutes`
//          5. `totalHours`
//          6. `result`.

//  b) How many function calls are there?
//      There is 1 function call in this program: `console.log(result)`.

//  c) Using documentation, explain what the expression movieLength % 60 represents
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//      The expression `movieLength % 60` uses the remainder operator (`%`). 
//      Per Mozilla Developer documentation, the remainder (%) operator returns the division remainder, with its sign matching the dividend's.
//      `movieLength % 60` determines the seconds remaining after converting movieLength to full minutes.

//  d) Interpret line 4. What does the expression assigned to totalMinutes mean?
//      Line 4: `const totalMinutes = (movieLength - remainingSeconds) / 60;`
//      This expression calculates the total number of whole minutes within `movieLength`. 
//      It first subtracts `remainingSeconds` (which are the seconds that do not make up a full minute) from the `movieLength`. 
//      This leaves only the seconds that form complete minutes.
//      This value is then divided by 60 to convert these seconds into a total count of minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//    The variable `result` represents the `movieLength` converted and formatted into a string showing hours, minutes, and seconds, in the format `HH:MM:SS`.
//    A better name for this variable could be `movieDuration`, as it more clearly indicates its purpose and possible data type.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer.
//    This code will work for positive integer values of `movieLength`.
//    If `movieLength` is 0, the result will be "0:0:0", which is correct.
//    If `movieLength` is a negative number, the remainder operator will return a negative remainder (e.g., -8784 % 60 would be "-2:-26:-24").
//    If `movieLength` is a floating-point number, the calculations involving the remainder operator and division lead to floating-point values for `remainingSeconds`.
//    Therefore, while it handles positive integers and non-integers well, it will not produce meaningful results for negative `movieLength` values and may therefore be
