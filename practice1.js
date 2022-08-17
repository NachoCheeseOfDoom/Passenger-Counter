// 2. Two Strings with a function
// let name = "Linda"
// let greeting = "Hi there"

// function greet(){
// console.log(`${greeting}, ${name}!`);
// }

// greet();

//-------------------------------------------------------------------

// 3. Incrementing and decrementing

//let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable

// function add3Points(){
//   myPoints += 3;
// }

// function remove1Point(){
//   myPoints -= 1;
// }

// add3Points();
// add3Points();
// add3Points();
// remove1Point();
// remove1Point();
// Call the functions to that the line below logs out 10
// console.log(myPoints)
//-------------------------------------------------------------------

// 4. Strings & numbers 

// Try to predict what each of the lines will log out
// console.log("2" + 2) // 22
// console.log(11 + 7) // 18
// console.log(6 + "5") // 65
// console.log("My points: " + 5 + 9) // My points: 59
// console.log(2 + 2) // 4
// console.log("11" + "14") // 1114

//-------------------------------------------------------------------

// 5. Rendering an error message
// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

// let errorMessage = document.getElementById("error");

// function errorText(){
//   errorMessage.innerHTML = 'Something went wrong, please try again';
// }

//---------------------------------------------------------
//HTML
// <img width="100px" src="dumbbell.png" alt="Dumbbell">
// <p>Dumbbell</p>
// <button onclick="errorText()">Purchase - $149</button>
// <p id="error"></p>
//---------------------------------------------------------


//-------------------------------------------------------------------

// 6. Calculator Challenge

let num1 = 8
let num2 = 2

let result = document.getElementById("sum-el");
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()

function add() {
  sum = num1 + num2;
  result.innerHTML = `Sum: ${sum}`;
}
function subtract() {
  sub = num1 - num2;
  result.innerHTML = `Sum: ${sub}`;
}
function divide() {
  div = num1 / num2;
  result.innerHTML = `Sum: ${div}`;
}
function multiply() {
  mul = num1 * num2;
  result.innerHTML = `Sum: ${mul}`;
}


// Call the correct function when the user clicks on one of the buttons

// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
