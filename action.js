window.onload = function () {
  document.getElementById("preloader").style.display = "none";
};

setInterval(() => {
  var d = new Date();
  var hour = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();

  var h = hour * 30 + min / 2;
  var m = 6 * min;
  var s = 6 * sec;

  var date = d.getDate();
  var month = d.getMonth();
  var year = d.getFullYear();
  var day = d.getDay();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var dayname = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  document.getElementById("hour").style.transform = `rotate(${h}deg)`;
  document.getElementById("minute").style.transform = `rotate(${m}deg)`;
  document.getElementById("seconds").style.transform = `rotate(${s}deg)`;
  document.getElementById("date").textContent = date;
  document.getElementById("month").textContent = monthNames[month];
  document.getElementById("year").textContent = year;
  document.getElementById("day").textContent = dayname[day];

  if(date%10 == 1)
  {
    document.getElementById("suffix").textContent = "st";
  }
  else if(date%10 == 2)
  {
    document.getElementById("suffix").textContent = "nd";
  }
  else if(date%10 == 3)
  {
    document.getElementById("suffix").textContent = "rd";
  }
  else
  {
    document.getElementById("suffix").textContent = "th";
  }
}, 1000);

var item;

var check = false;

function timer() {

  if (!check) {
    let date = document.getElementsByTagName("select")[0];
    let month = document.getElementsByTagName("select")[1];
    let year = document.getElementsByTagName("select")[2];
    let hour = document.getElementsByTagName("select")[3];
    let min = document.getElementsByTagName("select")[4];
    let timerdate = new Date(
      year.value,
      month.value - 1,
      date.value,
      hour.value,
      min.value
    );

    check = true;

    item = setInterval(() => {
      let currdate = new Date();

      let os = Math.floor(((timerdate - currdate) / 1000) % 60);
      let om = Math.floor(((timerdate - currdate) / (1000 * 60)) % 60);
      let oh = Math.floor(((timerdate - currdate) / (1000 * 60 * 60)) % 24);
      let od = Math.floor((timerdate - currdate) / (1000 * 60 * 60 * 24));

      if (os < 0 || om < 0 || oh < 0 || od < 0) {
        alert("Enter valid time");
        clearInterval(item);
        return;
      }

      document.querySelectorAll(".time p")[0].innerHTML = numeric(od);
      document.querySelectorAll(".time p")[1].innerHTML = numeric(oh);
      document.querySelectorAll(".time p")[2].innerHTML = numeric(om);
      document.querySelectorAll(".time p")[3].innerHTML = numeric(os);
    }, 1000);
  } 

  else {
    clearInterval(item);
    let date = document.getElementsByTagName("select")[0];
    let month = document.getElementsByTagName("select")[1];
    let year = document.getElementsByTagName("select")[2];
    let hour = document.getElementsByTagName("select")[3];
    let min = document.getElementsByTagName("select")[4];
    let timerdate = new Date(
      year.value,
      month.value - 1,
      date.value,
      hour.value,
      min.value
    );

    check = true;

    item = setInterval(() => {
      let currdate = new Date();

      let os = Math.floor(((timerdate - currdate) / 1000) % 60);
      let om = Math.floor(((timerdate - currdate) / (1000 * 60)) % 60);
      let oh = Math.floor(((timerdate - currdate) / (1000 * 60 * 60)) % 24);
      let od = Math.floor((timerdate - currdate) / (1000 * 60 * 60 * 24));

      if (os == 0 && om == 0 && oh == 0 && od == 0) {
        alert("Yeah!!, This is your event time");
        document.querySelectorAll(".time p")[3].innerHTML = 00;
        clearInterval(item);
        return;
      }

      if (os < 0 || om < 0 || oh < 0 || od < 0) {
        alert("Enter valid time");
        clearInterval(item);
        return;
      }
      

      document.querySelectorAll(".time p")[0].innerHTML = numeric(od);
      document.querySelectorAll(".time p")[1].innerHTML = numeric(oh);
      document.querySelectorAll(".time p")[2].innerHTML = numeric(om);
      document.querySelectorAll(".time p")[3].innerHTML = numeric(os);
    }, 1000);
  }
}

function numeric(key) {
  return key < 10 ? `0${key}` : key;
}


document.getElementById("first-button").addEventListener("click", movetotimer);
document.getElementById("second-button").addEventListener("click", movetoclock);
document.getElementById("third-button").addEventListener("click", movetostpw);
document.querySelectorAll('#nav-bar ul li button')[0].addEventListener("click", movetoclock);
document.querySelectorAll('#nav-bar ul li button')[1].addEventListener("click", movetotimer);

function movetotimer()
{
  document.getElementById('timer').scrollIntoView({
    behavior: 'smooth'
  });
}

function movetoclock()
{
  document.getElementById('clock').scrollIntoView({
    behavior: 'smooth'
  });
}

function movetostpw()
{
  
}