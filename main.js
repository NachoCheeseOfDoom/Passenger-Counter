//document.getElementById("count-el").innerText = 4;

//Welcome 
let welcomeEl = document.getElementById("welcome-el");
let name = 'Nacho';
let greeting = 'Welcome back';
welcomeEl.innerText = `${greeting} ${name}!`

welcomeEl.innerHTML += "nacho"
//------------------------------------------------------------


let countEL = document.getElementById("count-el");
let entries = document.getElementById("lbeEnties");

//number = 0
  let count =  0;


  //Adds a number
function btnIncrement(){
  count += 1;
  countEL.innerHTML = count;
}

//Takes number away
function btnDecrease(){
  count += - 1;
  countEL.innerHTML = count;
}

//Saves number in console.
function save(){
  let privEntries = `${count} - `
  entries.innerHTML += `${privEntries}`
  count = 0;
  countEL.innerHTML = count;
}

function newPage(){
  href = "newPage.html"
}

