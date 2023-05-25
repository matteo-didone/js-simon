//Let's utilize timing functions to create a countdown for tomorrow morning at 09:30 AM

// I choose the date of the class and the time at which it starts
const countDownDate = new Date("May 26, 2023 09:30:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() 
    {
        // I store the current date and time in a variable called now
        const now = new Date().getTime();

        // Find out how much time there is between now and the class date
        const gapTime = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        // I use the Math.floor() method to round the number down to the nearest whole number
        const days = Math.floor(gapTime / (1000 * 60 * 60 * 24)); //1000 milliseconds = 1 second * 60 seconds = 1 minute * 60 minutes = 1 hour * 24 hours = 1 day
        const hours = Math.floor((gapTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //1000 milliseconds = 1 second * 60 seconds = 1 minute * 60 minutes = 1 hour
        const minutes = Math.floor((gapTime % (1000 * 60 * 60)) / (1000 * 60)); //1000 milliseconds = 1 second * 60 seconds = 1 minute
        const seconds = Math.floor((gapTime % (1000 * 60)) / 1000); //1000 milliseconds = 1 second

        // Display the result in the element with the classes "days", "hours", "minutes" and "seconds"
        document.getElementsByClassName("days").innerHTML = days; 
        document.getElementsByClassName("hours").innerHTML = hours;
        document.getElementsByClassName("minutes").innerHTML = minutes;
        document.getElementsByClassName("seconds").innerHTML = seconds;

        // If the count down is finished, write some text 
        if (gapTime < 0) 
        {
            // I stop the timer with the clearInterval() method
            clearInterval(x);
            // I stop displaying the timer
            const timerElement = document.getElementsByClassName("timer");
            timerElement.classList.add("hidden");

            // I display the message "The class is over"
            const timerOverElement = document.getElementsByClassName("timerOver");
            timerOverElement.classList.remove("hidden");
        }
    }
, 1000); //1000 milliseconds = 1 second
