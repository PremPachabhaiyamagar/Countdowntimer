const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const dd = document.getElementById('dd');
const hh = document.getElementById('hh');
const mm = document.getElementById('mm');
const ss = document.getElementById('ss');

const day_dot = document.querySelector('.day_dot');
const hr_dot = document.querySelector('.hr_dot');
const min_dot = document.querySelector('.min_dot');
const sec_dot = document.querySelector('.sec_dot');

// dateformate mm/dd/yyyy
let endDate = '01/01/2023 00:00:00';

let x = setInterval(function(){
  let now = new Date(endDate).getTime();
  let countDown = new Date().getTime();
  let length = now - countDown;

  // time calculation for days,hours,minutes,seconds
  let d = Math.floor(length / (1000 * 60 * 60*24 ));
  let h = Math.floor((length % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  let m = Math.floor(((length)%(1000 * 60 * 60))/(1000 * 60));
  let s = Math.floor(((length)%(1000 * 60))/(1000));


  //  result in the element
  days.innerHTML = d + "<br><span>Days</span>";
  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  seconds.innerHTML = s + "<br><span>Seconds</span>";


  // animate stroke
  //365 days in a year
  dd.style.strokeDashoffset = 440 - (440 * d) / 365;
  // 24 hours in a day
  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  // 60 minutes in an hour
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  //  60 seconds in a minute
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;
  
  //   animate circle dots 

  // 360 deg / 365 days = 0.986
   day_dot.style.transform = `rotateZ(${d * (360/365)}deg)`;
  //360 deg / 24 hrs = 15  
   hr_dot.style.transform = `rotateZ(${h * (360/24)}deg)`;
  //  360 deg / 60 minutes = 
   min_dot.style.transform = `rotateZ(${m * (360/60)}deg)`;
  // 360 deg / 60 seconds =
   sec_dot.style.transform = `rotateZ(${s * (360/60)}deg)`;

  //  if the countdown is over display the text "Happy New Year"
   if(length < 0){
    clearInterval(x);
    document.getElementById("timer").style.display ='none';
    document.querySelector(".newYear").style.display ='block';
   }
})