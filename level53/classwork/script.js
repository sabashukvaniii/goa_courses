// Retrieve the paragraph and button elements by their IDs
const paragraph = document.getElementById("myParagraph");
const button = document.getElementById("myButton");

// Add an event listener to the button
button.addEventListener("click", function() {
    // Change the paragraph color to red when the button is clicked
    paragraph.style.color = "red";
});
