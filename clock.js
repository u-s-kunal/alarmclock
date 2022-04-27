let alarmTone = new Audio('Alarm.mp3');
//******************* main clock**************
function updateClock() {


    //get current time first

    let currentTime = new Date();

    //extract hour , minutes and seconds from the date

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();


    //Check if time of the day in  AM/PM
    let dayTime = (hours < 12) ? "AM" : "PM";


    //add 0 if minuts and second degits are less than 10;

    minutes = (minutes < 10 ? '0' : "") + minutes;
    seconds = (seconds < 10 ? '0' : "") + seconds;

    //converts 24 hours clock to 12 hours clock;
    hours = (hours > 12) ? hours - 12 : hours;
    hours = (hours == 0) ? 12 : hours;


    //now creating a final time string here

    let timeStr = hours + ':' + minutes + ':' + seconds + "  " + dayTime;

    // here Inserting THE TIME  STRING INTO THE DOM
    document.getElementById('clock').innerHTML = timeStr;


    //*******Code for alarm clock starts here*******/

    document.getElementById("alarmSET").addEventListener("click", alarmSET)
    setInterval(() => {

        function alarmSET() {
            let alarmHours = document.getElementById('alarmHours').value;
            let alarmMinutes = document.getElementById('alarmMinutes').value;
            let alarmInput;
            let AM = document.getElementById("am");
            let PM = document.getElementById("pm");
            alarmInput = (AM.checked ? AM.value : PM.value);


            if (alarmHours == hours && alarmMinutes == minutes && alarmInput == dayTime) {
                alarmTone.play();

            };
            


        };
        alarmSET();
    }, 1000);
    

    // function to stop the alarm clock ******


    document.getElementById('alarmSTOP').addEventListener('click', alarmStop)

    function alarmStop() {
        alarmTone.pause();
        location.reload();

    }


};
//function for description

function descriptionVal() {
     AM = document.getElementById("am");
     PM = document.getElementById("pm");
     alarmInput = (AM.checked ? AM.value : PM.value);
    alarmInput = (AM.checked ? AM.value : PM.value);
    document.getElementById('description').innerHTML = `Alarm is set for  ${alarmHours.value} : ${alarmMinutes.value} ${alarmInput} `;
}



