 var global = 12;
 var i = 10;

 function test () {
 	global++;
 	var i = 5;
 	console.log(i);
 }

 test();
 document.write("Global - " + global + ", variable i -" + i);