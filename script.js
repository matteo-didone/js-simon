//Let's utilize timing functions to create a countdown for tomorrow morning at 09:30 AM

// I choose the date of the class and the time at which it starts
const countDownDate = new Date("May 29, 2023 09:30:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() 
    {
        // I store the current date and time in a variable called now
        const now = new Date().getTime();

        // Find out how much time there is between now and the class date
        const gapTime = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        // I use the Math.floor() method to round the number down to the nearest whole number

        //The days constant calculates the number of days remaining by dividing the gapTime by the number of milliseconds in a day (1000 * 60 * 60 * 24)
        const days = Math.floor(gapTime / (1000 * 60 * 60 * 24)); //1000 milliseconds = 1 second * 60 seconds = 1 minute * 60 minutes = 1 hour * 24 hours = 1 day

        //The hours constant calculates the number of hours remaining by first finding the remaining milliseconds after subtracting the days (gapTime % (1000 * 60 * 60 * 24)). It then divides this remaining time by the number of milliseconds in an hour (1000 * 60 * 60)
        const hours = Math.floor((gapTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //1000 milliseconds = 1 second * 60 seconds = 1 minute * 60 minutes = 1 hour

        //The minutes constant calculates the number of minutes remaining using a similar approach. It finds the remaining milliseconds after subtracting the hours (gapTime % (1000 * 60 * 60)) and divides it by the number of milliseconds in a minute (1000 * 60).
        const minutes = Math.floor((gapTime % (1000 * 60 * 60)) / (1000 * 60)); //1000 milliseconds = 1 second * 60 seconds = 1 minute

        //The seconds constant calculates the number of seconds remaining in a similar manner. It finds the remaining milliseconds after subtracting the minutes (gapTime % (1000 * 60)) and divides it by 1000 to convert it to seconds.
        const seconds = Math.floor((gapTime % (1000 * 60)) / 1000); //1000 milliseconds = 1 second

        // Display the result in the element with the classes "days", "hours", "minutes" and "seconds"
        document.getElementById("days").innerHTML = days; 
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;;
        document.getElementById("seconds").innerHTML = seconds;

        // If the count down is finished, write some text 
        if (gapTime < 0) 
        {
            // I stop the timer with the clearInterval() method
            clearInterval(x);
            // I stop displaying the timer
            const timerElement = document.getElementsByClassName("timer")[0];
            // I add the class "hidden" to the element so that it won't stop taking up space on the page
            timerElement.classList.add("hidden");

            // I display the message "The class is over"
            const timerOverElement = document.getElementsByClassName("timerOver")[0];
            // I remove the class "hidden" to the element so that it will start displaying on the page
            timerOverElement.classList.remove("hidden");
        }
    }
, 1000); //1000 milliseconds = 1 second
