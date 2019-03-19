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
	},
	five : undefined
}; 

var obj2 = Object.create(obj1);//var obj2 = new Object();// var obj2 = {};
  



/*function iteration(o) {
	for ( v in o) {
		if(typeof o[v] == 'object') {
			iteration(o[v]);
		}
		else {
			console.log( v + ' - ' + o[v]);
		}
		
	}
}

iteration(obj1);*/

// one = undefined
/*if(obj1.five) {
	alert(obj1.one);
}*/
/*
if('five' in obj1)   {
	alert(obj1.one);
}*/

/*if(obj2.hasOwnProperty('one'))   {
	alert(obj1.one);
}*/

/*if(obj2.propertyIsEnumerable('one'))   {
	alert(obj1.one);
}*/


/*if(obj1.one !== undefined) {
	alert(obj1.one);
}*/


function iteration(o) {
	for ( v in o) {
		
		if(!o.hasOwnProperty(v)) continue;
		
		if(typeof o[v] === 'function')  continue;
		
		if(typeof o[v] == 'object') {
			iteration(o[v]);
		}
		else {
			console.log( v + ' - ' + o[v]);
		}
	}
}

//iteration(obj2);
/*
var obj3 = {
	
	
	prop1 : 30,
	prop2 : 50,
	func : function() {
		console.log(this.prop1 + this.prop2);
	}
}

obj3.func2 = function() {
	alert('func2');
}


function foo() {
	console.log('foo');
}

obj3.func3 = foo;

obj3.func();*/

var o = {
	prop1 : 10,
	prop2 : 50,
	
	func : function() {
		console.log(this.prop1 + this.prop2);
	},
	
	get summ() {
		return this.prop1 + this.prop2;
	}, 
	
	set summ(value) {
		
		this.prop1 += value;
	}
}

/*o.summ = 5; 
console.log(o.summ);

o.summ = 5; 
console.log(o.summ);

o.summ = 5; 
console.log(o.summ);*/

Object.defineProperty(o, 'prop3', {
						
						value: 100,
						writable: true,
						enumerable : false,
						configurable : true,
});

//o.prop3 = 50;


Object.defineProperty(o, 'prop3', {
						
						enumerable : true,
});


//iteration(o);


//var o2  = new fuu(a,b,c);



function People(name, age) {
	
	this.name  = name;
	this.age  = age;
	
	/*this.summ = function() {
		return this.name + ' - ' + this.age;
	}*/
	
}

People.prototype = obj1;

People.prototype.summ = function() {
		return this.name + ' - ' + this.age;
}


var Ben = new People('Ben',18);

console.log(obj1.summ());








