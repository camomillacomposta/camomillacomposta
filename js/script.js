function handle(email) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "action.php", true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send("email=" + email);
  document.getElementById("msg").innerText = "Grazie per averci fornito la tua email, verrai contattato al più presto.";
  document.getElementById("form").reset();
}

(function () {
  const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24;
  let birthday = "Sep 30, 2021 00:00:00",
  countDown = new Date(birthday).getTime(),
  x = setInterval(function() {
    let now = new Date().getTime(),
    distance = countDown - now;
    
	let progressCircleDays = document.getElementById("circle-days");
	let progressCircleHours = document.getElementById("circle-hours");
	let progressCircleMinutes = document.getElementById("circle-minutes");
	let progressCircleSeconds = document.getElementById("circle-seconds");
	
    let radius = progressCircleDays.r.baseVal.value;
    
	let circumference = radius * 2 * Math.PI;
    
	progressCircleDays.style.strokeDasharray = circumference;
	progressCircleHours.style.strokeDasharray = circumference;
	progressCircleMinutes.style.strokeDasharray = circumference;
	progressCircleSeconds.style.strokeDasharray = circumference;
	
	percentDays = Math.floor(distance / (day)) * 3.333333333333333;
	percentHours = Math.floor((distance % (day)) / (hour)) * 4.166666666666667;
	percentMinutes = Math.floor((distance % (hour)) / (minute)) * 1.666666666666667;
	percentSeconds = Math.floor((distance % (minute)) / second) * 1.666666666666667;
	
	progressCircleDays.style.strokeDashoffset = circumference - (percentDays / 100) * circumference;
	progressCircleHours.style.strokeDashoffset = circumference - (percentHours / 100) * circumference;
	progressCircleMinutes.style.strokeDashoffset = circumference - (percentMinutes / 100) * circumference;
	progressCircleSeconds.style.strokeDashoffset = circumference - (percentSeconds / 100) * circumference;
	
    document.getElementById("days").innerText = Math.floor(distance / (day)),
    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  }, 0)
}());