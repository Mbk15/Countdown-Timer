const  days = document.querySelector("#days")
const  hours = document.querySelector("#hours")
const  mins = document.querySelector("#mins")
const  seconds = document.querySelector("#seconds")

const AdhaDate = "20 Jun 2021";

countdown= () =>{
    const EidDate =new Date(AdhaDate);
    const currentDate = new Date();
    const totalSec = (EidDate - currentDate)/1000;
    const minutes = Math.floor(totalSec/60)%60;
    const hour = Math.floor(totalSec/3600) % 24;
    const day = Math.floor((totalSec/3600/24));
    const secs = totalSec %60
    days.innerHTML = day;
    hours.innerHTML = hour;
    mins.innerHTML = minutes
    seconds.innerHTML = Math.floor(secs);
}
countdown();
setInterval(countdown, 1000)