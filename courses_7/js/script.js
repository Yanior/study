

//var a = 1;
//var b = 1;

//x
//var y = x;


var obj = {
	
};

var a = 10;
var b = 20;

var obj1 = {
	one : 'Hello',
	two : 'World',
	'some string' : a + b,
	three : {
		a:1,
		b:2,
		c: {
			'str1' : 10,
			'str2' : 30,
		}
	}
}; 



 var date = new Date(); // Date.prototype
 var arr = new Array(); // [] Array.prototype
 
 var obj2 = new Object();// var obj2 = {};

 var str = 'some string';
 
 ///console.log(obj1.two);
 
 //obj1.two = 'New string';
 
 /*function addObj(o, i, v) {
 	return o[i] = v;
 }
 

 
 
 addObj(obj, 'one', 'Hello');
 addObj(obj, 'two', 'World');*/
 
 //console.log(obj.one);
 //console.log(Object.prototype);
 
 
  var obj3 = Object.create(obj1);//var obj2 = new Object();// var obj2 = {};
  
 //obj3.one = 1;
//console.log(obj3.one);
//console.log(obj1.one);


//delete obj3.one;
//console.log(obj1.one);


function iteration(o) {
	for ( v in o) {
		if(typeof o[v] == 'object') {
			iteration(o[v]);
		}
		else {
			console.log( v + ' - ' + o[v]);
		}
		
	}
}

iteration(obj1);




