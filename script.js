var name 
 name = prompt("Enter your name here");
 alert(` Welcome ${name}`);


const  days = document.querySelector("#days")
const  hours = document.querySelector("#hours")
const  mins = document.querySelector("#mins")
const  seconds = document.querySelector("#seconds")

const RmdDate = "12 Apr 2021";

countdown= () =>{
    const Hilal =new Date(RmdDate);
    const currentDate = new Date();
    const totalSec = (Hilal - currentDate)/1000;
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
 message= () =>{
    alert("Allahuma Baligna Ramadan, Dont forget to complete your missed fast")
    alert(`Check below to see the number of days left, Ramadan Kareem in advance ${name} `)
 }
 message();
// get the video
 var video =document.getElementById("myVideo");

 //get the button
 var btn = document.getElementById("myBtn");
 //pause and play video, and change next button

 function myFunction(){
     if(video.paused){
         video.play();

         btn.innerHTML ="Pause"
     }else{
         video.pause();
         btn.innerHTML = "Play"
     }
 }
