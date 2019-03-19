
function stringWork() {
	var str = document.getElementById('head').innerHTML;
	/////////////////////////////////////////////////////
	
	///new String();
	///String();
	
	//var result = typeof String(str);
	//var result = str.charAt(10);
	//var result = str[10];
	//var result = str. charCodeAt(15);
	//var result = str. concat('hello ',' World ', '!!!');
	//var result = str + ' hello ' + ' World ' + '!!!';
	
	//var result = String.fromCharCode(str.charCodeAt(15),str.charCodeAt(25));
	
	//var result = str.indexOf('с');
	//var result = str.lastIndexOf('с');
	var result = str.length;
	
	var strings = ['Привет','Мир','Что то изучаем','Сравнение'];
	
	
	//var result = str.localeCompare('A');
	//var result = strings.sort(function(a,b) {return a.localeCompare(b)});
	
	//var result = str.match(/\d+/);
	//var result = str.replace(/\d+/g,'Hello');
	
	
	//var result = str.search(/\d+/);//RegExp
	
	//var result = str.slice(1);//RegExp
	//var result = str.split(' ',3);//RegExp
	//var result = str.substr(1);//RegExp
	
	//var result = str.substring(3,1);//RegExp
	//var result = str.toLocaleLowerCase();//RegExp
	//var result = str.toLowerCase();//RegExp
	//var result = str.toUpperCase();//RegExp
	
	
	/////////////////////////////////////////////////////
	document.getElementById('result').innerHTML = result;
}

window.onload = function () {
	stringWork();
}

