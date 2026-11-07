// variable declaration
const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");   

//create an li element that hold each entry chapter
const li = document.createElement("li");
//create a delete button for each entry
const deleteButton = document.createElement("button");

//populate the li variable's textcontent with the input value with the input value
li.textContent = input.value;
// set the delete button's to the li element to ❌.
deleteButton.textContent = "❌";
//append the delete button to the li element
li.appendChild(deleteButton);
//append the li element variable to the umordered list in your HTML
list.appendChild(li);
