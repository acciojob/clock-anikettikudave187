//your JS code here. If required.
function updateTimer(){
	const timerElement=document.getElementById("timer");
	const now=new Date();

	const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  };

	timerElement.textContent=now.toLocaleString("en-US",options);
}

updateTimer();
setInterval(updateTimer,1000);


