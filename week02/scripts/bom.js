// Select elements for DOM output
const input = document.querySelector("#favchap");
const addChapterButton = document.querySelector("button");
const list = document.querySelector("#list");

// Create an li element that holds each chapter entry's title and an associated delete button
//const li = document.createElement("li");

// Create a delete button
//const deleteButton = document.createElement("button");

// Populate the button textContent with a ❌
//deleteButton.textContent = "❌";

// Create an aria-label attribute on the button element 
//deleteButton.setAttribute("aria-label", "Remove a chapter");
//console.log(deleteButton.ariaLabel);

// Populate the li element variable's textContent or innerHTML with the input value
//li.textContent = input.value;

// Append the li element variable with the delete button
//li.append(deleteButton);

// Append the li element variable to the unordered list in your HTML
//list.append(li);


// Create a click event listener for the addChapterButton using an addEventListener
addChapterButton.addEventListener("click", function() {
    // Check to make sure the input is not blank before completing the remaining tasks in this list by using an if block that provides a message or does nothing and returns the .focus() to the input field.
    if(input.value.trim() !== " ") {
        // Move the code that you wrote in the last activity into this if block in order to support the correct flow of the program.

        // Create an li element that holds each chapter entry's title and an associated delete button
        const li = document.createElement("li");

        // Create a delete button
        const deleteButton = document.createElement("button");

        // Populate the button textContent with a ❌
        deleteButton.textContent = "❌";

        // Create an aria-label attribute on the button element 
        deleteButton.setAttribute("aria-label", "Remove a chapter");
        console.log(deleteButton.ariaLabel);

        // Populate the li element variable's textContent or innerHTML with the input value
        li.textContent = input.value;

        // Append the li element variable with the delete button
        li.append(deleteButton);

        // Append the li element variable to the unordered list in your HTML
        list.append(li);

        // Add an event listener to the delete button that removes the li element when clicked.
        deleteButton.addEventListener("click", function() {
            list.removeChild(li);
            input.focus();
        });

        // Change the input value to nothing or the empty string to clean up the interface for the user.
        input.value = " ";

        // Whether or not a list item was created, the focus (active cursor) should be sent to the input element
        input.focus();
    }
});