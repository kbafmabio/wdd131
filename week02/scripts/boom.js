// variable declaration
const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

//create an li element that hold each entry chapter

//create a click event listener for the add chapter button with addeventlistener method
button.addEventListener("click", function () {
    //keep event function block between the opening and closing braces of the callback function
    if (input.value.trim !== "") {
        const li = document.createElement("li");
        //create a delete button for each entry
        const deleteButton = document.createElement("button");

        //populate the li variable's textcontent with the input value with the input value
        li.textContent = input.value;
        // set the delete button's to the li element to ❌.
        deleteButton.textContent = "❌";
        // add an even listener to the delete button that removes the li element from the list when clicked
        deleteButton.addEventListener("click", function () {
            list.removeChild(li)
            input.focus();
        });

        //append the delete button to the li element
        li.appendChild(deleteButton);
        //append the li element variable to the umordered list in your HTML
        list.appendChild(li);
        // change the input value to an empty string after the chapter is added to the list
        input.value = "";

    }
    //send the focus back to the input field after the chapter is added to the list
    input.focus();
});



