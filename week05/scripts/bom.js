// Select elements for DOM output
const input = document.querySelector("#myFavBOMList");
const addChapterButton = document.querySelector("button");
const list = document.querySelector("#list");

//Local Storage Example

// Declare an array and assign it to the results of a defined function named getChapterList
let chaptersArray = getChapterList() || [];

// use a forEach method to loop through the chaptersArray to call a new function named displayList and pass it the argument of chapter
chaptersArray.forEach(chapter => {
    displayList(chapter);
    
});


// Create a click event listener for the addChapterButton using an addEventListener
addChapterButton.addEventListener("click", () => {
    if(input.value !== '') {// Make sure the input is not empty 
        displayList(input.value); // Call the function that outputs the submitted chapter
        chaptersArray.push(input.value); // Add the chapter to the array
        setChapterList(); // Update the local storage with the new array
        input.value = ''; // Clear the output
        input.focus(); // Set the focus back to the input
    }
});

// Create the displayList function that receives one parameter named item
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
    //console.log('I like to code.') 
}

// Create the setChapterList function to set the localStorage item
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray)); 
}

// Create the getChapterList function to get the localStorage item
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Create the deleteChapter function with parameter named chapter
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
