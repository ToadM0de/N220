// created 2 referance varibles for the inputs
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

//create a reference varible for the output
const output = document.getElementById("output");

// function for adding the 2 numbers
function addNums() {
  const sum = parseFloat(num1.value) + parseFloat(num2.value);
  output.innerHTML = sum;
}

// function for multiplying the 2 numbers
function timesNums() {
  const product = parseFloat(num1.value) * parseFloat(num2.value);
  output.innerHTML = product;
}
