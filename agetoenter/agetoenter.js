document.getElementById("submit").onclick = function() {
    // Get the user input
    let userage = document.getElementById("userage").value;

    // Check if the input is empty or not a valid number
    if (userage === "" || isNaN(userage)) {
        console.log("Invalid input");
        alert("Please enter a valid age.");
        return; // Exit the function if the input is invalid
    }

    // Convert input to a number
    userage = Number(userage);

    if (userage >= 18) {
        console.log("above");
        // Set the background image and style it using a relative path
        document.body.style.backgroundImage = "url('f/37027.gif')"; // Use forward slashes
        document.body.style.backgroundSize = "300px 300px"; // Make the background cover the entire screen
        document.body.style.backgroundPosition = "center"; // Center the background image
        document.body.style.backgroundRepeat = "no-repeat"; // Prevent the background from repeating
        document.body.style.backgroundAttachment = "fixed"; // Fix the background when scrolling
        document.body.style.backgroundColor = "black";
        document.getElementById("inputlabel").textContent=""
        document.getElementById("submit").style.visibility = "hidden"
    } else {
        console.log("below");
        document.body.style.backgroundImage = ""; // Remove the background if age is below 18
        document.body.style.backgroundColor = ""; // Reset background color
    }
};
document.getElementById("userage").addEventListener("input", function(event) {
    // Replace any non-numeric character with an empty string
    this.value = this.value.replace(/[^0-9]/g, '');

    let value = parseInt(this.value); // Parse the value as an integer
        
    // If the value is greater than 100, set it to 100
    if (value > 100) {
        this.value = 100;
    }
});
