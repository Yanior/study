

var date = new Date();

//alert(date.getDate());

//var days = ['Воскресенье','Понедельник','Вторник'];
//alert(days[date.getDay()]);
//alert(date.getFullYear());
//alert(date.getHours());
//alert(date.getMilliseconds());
//alert(date.getMinutes());


//var month = ['Январь','Февраль','Март','Апрель'];
//alert(month[date.getMonth()]);
//alert(date.getSeconds());
//alert(date.getTime());
///alert(date.getTimezoneOffset());

/*

date.setDate(10);
date.setFullYear(2014,7,21);
date.setHours(22,43,10,50);
date.setMinutes(56,34,10);
date.setMonth(11,3);
date.setTime(347534856348);*/

//setMilliseconds()
//setSeconds()

function displayTime() {
	var now = new Date();
	
	var div = document.getElementById("clock");
	
	div.innerHTML = now.toLocaleTimeString();
	
	setTimeout(displayTime,1000);	
}

function displayTime2() {
	var now = new Date();
	
	var div = document.getElementById("clock");
	
	var sDate  = new Date(2016,11,31);
	
	var timer = sDate.getTime() - now.getTime();
	
	// 270 34 45 53
	
	
	var days = parseInt(timer/(24*60*60*1000));
	
	var hours = parseInt(timer/(60*60*1000))%24;
	
	var min = parseInt(timer/(60*1000))%60;
	
	var sec = parseInt(timer/(1000))%60;
	
	
	
	div.innerHTML = days + ' : ' + hours + ' : ' + min + ' : ' + sec;
	
	setTimeout(displayTime2,1000);	
}


window.onload = displayTime2;



//console.log(Date.parse(date.toString()));