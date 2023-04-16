// Set the date of the event (YYYY-MM-DD format)
var eventDate = "2023-12-31";

// Set the time of the event (24-hour format)
var eventTime = "23:59:59";

// Concatenate the date and time
var eventDateTime = eventDate + "T" + eventTime;

// Get the countdown element
var countdown = document.getElementById("countdown");

// Update the countdown every second
var countdownInterval = setInterval(function() {
	// Get the current date and time
	var now = new Date().getTime();

	// Get the distance between now and the event date/time
	var distance = new Date(eventDateTime) - now;

	// Calculate the remaining time in days, hours, minutes, and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Update the countdown element with the remaining time
	countdown.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

	// If the countdown is finished, clear the interval and display a message
	if (distance < 0) {
		clearInterval(countdownInterval);
		countdown.innerHTML = "The event has already happened!";
	}
}, 1000);
