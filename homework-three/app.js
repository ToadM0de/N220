function calcIntrest() {
  // 1. get principile value
  const principle = document.getElementById("principle").value;
  //    2. get intrest rate
  const intrest = document.getElementById("intrest").value;
  // 3. get time
  const time = document.getElementById("time").value;
  // 4. calc intrest
  // principle * (1 + rate * time)
  const answer = principle * (1 + intrest * time);
  // 5. show answer
  document.querySelector("#answer").innerHTML +=
    "With a beginning principal of $ " +
    principle +
    " and with a growth rate of " +
    intrest +
    "% for " +
    time +
    " years, your total intrest will be $" +
    (answer - principle) +
    " with a grand total of $" +
    answer;
  ("<br/>");
}
