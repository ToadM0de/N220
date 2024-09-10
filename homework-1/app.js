document.getElementById("ticketNum").innerHTML += "3";
document.getElementById("ticketCost").innerHTML += "14";
document.getElementById("ttCost").innerHTML += 14 * 3;

let banks = 235.87;
banks -= 35;
banks -= 75;
banks -= 60;
document.getElementById("bank").innerHTML +=
  " After purchasing the outfit, my bank account balance is $" + banks;
document.getElementById("addJacket").innerHTML += " Add jacket: " + !70;

const totalPizzas = 4;
const slicesPerPizza = 8;
const slicesThatStudentCanEat = 2.5;
const totalSlices = totalPizzas * slicesPerPizza;
// 1 pizza; feed 3 students with .5 left for Rector
const pizzaLeftOver = (totalPizzas * slicesPerPizza) % slicesThatStudentCanEat;
console.log("Teacher Left With", pizzaLeftOver);
const studentsFedWithPizza =
  (totalSlices - pizzaLeftOver) / slicesThatStudentCanEat;
console.log("Students Fed", studentsFedWithPizza);

let receipt = 12;
receipt *= 2;
receipt += 6;
receipt += 1.5;
receipt += 1.5;
receipt += 1.5;
document.getElementById("Monty").innerHTML += "$ " + receipt;

let tip = 202.45;
tip += 134.97;
tip += 256.63;
tip += 178.22;
tip /= 4;
document.getElementById("tips").innerHTML += "Weekly Tip Average: $ " + tip;
