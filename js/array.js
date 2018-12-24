var arr = new Array("you","number",1,true);
for (var i = 0; i < arr.length; i++) {
	document.write(arr[i] + "<br>");
};

arr = new Array();
for (i = 0; i < 10; i++) {
	arr[i] = i * 3;
	document.write(arr[i] + "<br>");
}

var summ = 0;
for (i = 0; i < arr.length; i++) {
 	summ += arr[i];
 	
}
document.write("Сумма равна - " + summ);
document.write("<br>")
document.write("Среднее арифметическое значение - " + (summ / arr.length));