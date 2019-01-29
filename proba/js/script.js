// function func(param1,param2) {
    
//     if (param1 == 40) {
//         var addResult = param1 * 5;
//         alert(addResult);
//         return;
//     }
//     var result = param1 * param2;
//     alert(result);
// }

// var a = 40;
// var b = 10;

// func(a,a+b);

// function func(x) {

//     if (x <= 1) {
//         return 1;
//     }
//     return x * func(x-1);
// }

// console.log(func(3));

// var date = new Date();

// var days = ['Воскресенье', 'Понедельник', 'Вторник']

// console.log(days[date.getDay()]);

function lol() {
    var time = new Date();
    var div = document.getElementById("clock");
    div.innerHTML = time.toLocaleTimeString();
    setTimeout(lol, 1000);
}

window.onload = lol;