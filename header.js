const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function addLeadingSpace(number) {
  return (number < 10 ? " " : "") + number; 
}

function addLeadingZero(number) {
  return (number < 10 ? "0" : "") + number; 
}

function updateClock() {
  var d = new Date();
  document.getElementById("date").innerHTML = dayOfWeek[d.getDay()] + " " + addLeadingSpace(d.getDate()) + " " + monthName[d.getMonth()];
  document.getElementById("time").innerHTML = addLeadingZero(d.getHours()) + ":" + addLeadingZero(d.getMinutes()) + "/" + addLeadingZero(d.getSeconds());
}

window.onload = () => {
  updateClock();
  window.setInterval(updateClock, 1000);
};