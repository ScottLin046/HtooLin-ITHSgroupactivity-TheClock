setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
var button = document.getElementById('button');
var check = 0;
function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
} 
function select(){
	if(check == 0){
		selectionLoop1();
		check++;
	} else if (check == 1){
		selectionLoop2();
		check--;
	}
}
function selectionLoop1(){
	var button = document.getElementById("button");
		for(var i = 0; i < 12; i++){
			var parameter1 = "number" + (i+1) ;
			var parameter2 = i;
			console.log(parameter1);
			console.log(parameter2);
			selectNumbers(parameter1, parameter2);
			button.innerHTML = "Numerize";
			
		}
}
function selectionLoop2(){
	var button = document.getElementById("button");

		for(var i = 0; i < 12; i++){
			var parameter1 = "number" + (i+1) ;
			var parameter2 = i;
			console.log(parameter1);
			console.log(parameter2);
			selectRomans(parameter1, parameter2);
			button.innerHTML = "Romanize";
			
		}

}
function showTime(){
	let time = new Date();
	let hours = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	//let millisec = time.getMilliseconds();
	am_pm = " AM";
	if(hours > 12){
	  hours -=12;
	  am_pm = " PM"
	} else if(hours == 0){
	  hours = 12
	  am_pm = " AM";
	}
	hours = hours < 10? "0" + hours : hours;
	min = min < 10? "0" + min : min;
	sec = sec<10? "0" + sec:sec;
	//millisec = millisec<10? "0" + millisec:millisec;
	let currentTime = hours + ":" + min + ":" + sec +am_pm;
	document.getElementById("digital-clock").innerHTML = currentTime;
	setInterval(showTime,1000)
  }

function selectNumbers(value1, value2){
	var numList = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
	var num = document.getElementById(value1);
	num.innerHTML = numList[value2];
}
function selectRomans(value1, value2){
	var numList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
	var num = document.getElementById(value1);
	num.innerHTML = numList[value2];
}

showTime()
setClock();