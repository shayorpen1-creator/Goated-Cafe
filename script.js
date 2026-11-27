function loadDarkMode() { //Checks the saved dark mode preference and applies it when a page loads
    if (localStorage.getItem("darkMode") === "true") { //check if saved setting is true (stored as text).
        document.body.classList.add("dark-mode"); //add dark-mode class to body.
    } else { //if dark mode was not saved as true.
        document.body.classList.remove("dark-mode"); //remove dark-mode class from body.
    }
}

function toggleDarkMode() { //Turn dark mode on or off and save the setting
    document.body.classList.toggle("dark-mode"); //add or remove dark-mode class when button clicked.

    localStorage.setItem( //Save the current dark mode preference
        "darkMode", //name of saved setting in localStorage.
        document.body.classList.contains("dark-mode") //checks if dark mode is on or off (true or false).
    );
}

loadDarkMode(); //Load the saved setting whenever a page opens

function submitFeedback(event) { //function called when feedback form is submitted.
    event.preventDefault(); //stop default form submission (no data sent).
    alert("Thank you for your feedback!"); //display confirmation message to user.
    event.target.reset(); //clear inputs in feedback form.
}
