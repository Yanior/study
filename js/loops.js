var i;

for (i = 0; i < 10; i++) {
	if(i %3 == 0 && i != 0) continue;
	if(i == 8) break;
	document.write(i + "<br>");
}

document.write("<br>");

var x = 0;

while (x < 10) {
	document.write(x + "<br>");
	x += 2;
}

document.write("<br>");

var y = 1000;
do {
	document.write("Цикл сработал");
} while(y < 10);