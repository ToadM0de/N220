const todoItems = [];

function updateList() {
  document.getElementById("list").innerHTML = "";
  for (let i = 0; i < todoItems.length; i++) {
    document.getElementById("list").innerHTML += `<li>${todoItems[i]}</li>`;
  }
}

function summarizeList() {
  const summaryElement = document.getElementById("summary");
  const totalItems = todoItems.length;
  const firstItem = totalItems > 0 ? todoItems[0] : "None";
  const lastItem = totalItems > 0 ? todoItems[totalItems - 1] : "None";

  summaryElement.innerHTML = `
        Total Items: ${totalItems}
        <br />
        First Item: ${firstItem}
        <br />
        Last Item: ${lastItem}
    `;
}
