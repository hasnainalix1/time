function greetUserBasedOnTimeAndGender() {
    // Get the user's name
    const name = prompt("Enter your name:");

    // Ensure a valid name is entered
    if (!name) {
        alert("Please enter a valid name.");
        return;
    }

    // Collect gender information and ensure a valid input
    let gender = prompt("Enter your gender (male/female):").toLowerCase();
    if (gender !== "male" && gender !== "female") {
        alert("Please enter a valid gender (male or female).");
        return;
    }

    // Ask the user to input the time (in 24-hour format)
    const userTime = parseInt(prompt("Enter the time (in 24-hour format, e.g., 9 for 9 AM or 17 for 5 PM):"));

    // Validate the time input
    if (isNaN(userTime) || userTime < 0 || userTime >= 24) {
        alert("Please enter a valid time between 0 and 23.");
        return;
    }

    // Determine the time-based greeting
    let timeGreeting = "";
    if (userTime >= 0 && userTime < 12) {
        timeGreeting = "Good Morning";
    } else if (userTime >= 12 && userTime < 18) {
        timeGreeting = "Good Afternoon";
    } else {
        timeGreeting = "Good Evening";
    }

    // Determine the gender-specific greeting
    let genderGreeting = gender === "male" ? "Hello Sir" : "Hello Ma'am";

    // Display the greeting message
    alert(`${timeGreeting}, ${genderGreeting} ${name}!`);
}
