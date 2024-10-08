let currentCount = 0;

function showCurrentCount() {
  document.querySelector("#counter").innerHTML = currentCount;
}

showCurrentCount();

function addCount() {
  currentCount++;
  showCurrentCount();
}
