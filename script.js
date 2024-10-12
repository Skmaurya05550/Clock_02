

window.onload=()=>{
    alert("Please upvote⤴️");

    let hourHand = document.querySelector('#hourHand'),

    minuteHand = document.querySelector('#minuteHand'),

    secondHand = document.querySelector('#secondHand'),

    digitalTime = document.querySelector('.digital'),

    curTime,

    Hour,

    digitTime;



    //Setting the time function

    function setTime() {

        curTime = new Date();



        //set a new date and assign the degree to the hour hand

        hourHand.style.transform = `rotate(${(curTime.getHours() * 30) + (curTime.getMinutes() / 2)}deg)`;



        //set a new date and assign the degree to the minute hand

        minuteHand.style.transform = `rotate(${curTime.getMinutes() * 6}deg)`;



        //set a new date and assign the degree to the second hand

        secondHand.style.transform = `rotate(${curTime.getSeconds() * 6}deg)`;



        //Digital clock display

        let timeHour = curTime.getHours(),

        timeMin = curTime.getMinutes();



        //Check for time digit switching

        (timeHour >= 12) ? Hour = timeHour - 12 :

        Hour = timeHour;

        if (Hour < 10) Hour = `0${Hour}`;

        if (timeMin < 10) timeMin = `0${timeMin}`;

        

        //Check for AM and PM switching

        (timeHour < 12) ? digitTime = `${Hour}:${timeMin} AM` : digitTime = `${Hour}:${timeMin} PM`;



        //Appending the clock to the HTML

        digitalTime.innerHTML = digitTime;

    }
    //Calling the time function

    setInterval(setTime, 1000);

}






