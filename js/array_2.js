var arr_1 = new Array();
var arr_2 = new Array();
var arr_3 = new Array();

for (var i = 0; i < 5; i++) arr_1[i] = i;
for (var i = 0; i < 10; i++) arr_2[i] = i;
for (var i = 0; i < 15; i++) arr_3[i] = i;

var arr = new Array(arr_1, arr_2, arr_3);

document.write(arr[0][1]);

for (var x = 0; x < arr.length; x++) {
	for (var j = 0; j < arr[x].length; j++) {
		document.write(arr[x][j] + " ");
	}
	document.write("<br>");
}