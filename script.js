// Function to display the current date and time
function displayTime() {
    const now = new Date();
    const dateString = now.toLocaleDateString(); // Gets the current date
    const timeString = now.toLocaleTimeString(); // Gets the current time

    // Displaying the current date and time on the webpage
    document.getElementById("time-display").textContent = `${dateString} ${timeString}`;
}

// Set an interval to refresh the time every second
setInterval(displayTime, 1000);

// Button functionality to manually refresh the time
document.getElementById("refresh-button").addEventListener("click", displayTime);

// Initial display of time when the page loads
displayTime();
