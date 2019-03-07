window.onload = function () {
    var wrap = document.getElementById('popup_overlay');
    var closeB = document.getElementById('popup_close');
    var btn = document.getElementById('popupIn');

    function popupOpen() {
        wrap.style.display = 'block';
        popupBtn(1);
    }
    btn.onclick = popupOpen;

    function popupBtn(x) {
        var op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0;

        if (op < x) {
            op += 0.05;
            wrap.style.opacity = op;


            setTimeout(function () {
                popupBtn(x);
            }, 50)
        }
    }

    function popup() {
        wrap.style.display = 'block';
        popupIn(1);
    }

    function popupClose() {
        popupOut(0);
    }
    closeB.onclick = popupClose;


    var tIn, tOut;
    function popupIn(x) {
        var op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0;

        if (op < x) {

            clearInterval(tOut);
            op += 0.05;
            wrap.style.opacity = op;

            // setTimeout(popupIn, 50, x);
            tIn = setTimeout(function () {
                popupIn(x);
            }, 50); 
        }
    }

    function popupOut(x) {
        var op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0;

        if (op > x) {

            clearInterval(tIn);
            op -= 0.05;
            wrap.style.opacity = op;

            // setTimeout(popupIn, 50, x);
            tOut = setTimeout(function () {
                popupOut(x);
            }, 50);
        }
        if (wrap.style.opacity == x) {
            wrap.style.display = 'none';
        }
    }

    setTimeout(popup, 3000);

    var h1 = document.getElementById('header');
    h1.onclick = function () {
        clearTimeout(intStop);
    }

    function changeColor() {
        if(h1.style.color == 'black') {
            h1.style.color = 'white';
        } else {
            h1.style.color = 'black';
        }
    }
    function trySmt() {
        var intStop = setInterval(changeColor, 500);

        do {
            var str = prompt('Введите сообщение');
            var result = confirm('Вы ввели строку ' + str + '. Нажмите на OK для продолжения, или CANCEL для отмены');
        } while (!result);
        
        if(str == "Да") {
            alert('Ура')
        } else {
            alert('Неправильный ответ')
        }
    }
    trySmt();
}   

// let arr = ['Homework', 'Food', 'Project', 'Learn JS'];

// arr.forEach(function(all, index){
//     console.log(`${index}: ${all}`);
// })

// const shop = [
//     {id: 1, product: 'Book'},
//     {id: 2, product: 'Shirt'},
//     {id: 3, product: 'Album'}
// ];

// const productName = shop.map(function(what){
//     return what.product;
// });

// console.log(productName);

// let myCar = {
//     model: 'Camaro',
//     engine: 6.0,
//     year: 1969,
//     make: 'Chevy'
// }

// for(let key in myCar) {
//     console.log(`${key}: ${myCar[key]}`)
// }

// try {
//     someThing();
// } catch (error) {
//     console.log(error);
// }

// function getSmth() {
//     console.log('Downloading...');

//     setTimeout(function(){
//         if(true){
//             console.clear();
//             console.log('Complete...');
//         }
//     }, 3000);
// };

// getSmth();

// if(confirm('Are you sure?')){
//     console.log('Deleted...')
// }else {
//     console.log('Nothing Happens');
// }

// let height,
//     width;

// width = window.outerWidth;
// height = window.outerHeight;

// if(width > 1000) {
//     document.body.style.backgroundColor = 'red';
// } else if(height > 500){
//     document.body.style.backgroundColor = 'green';
// } else {
//     document.body.style.backgroundColor = 'blue';
// }

// console.log(width);
// console.log(height);


let url = window.location;

console.log(url.href);

var a = 'a';
let b = 'b';
const c = 'c';

function function_scope() {
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('FUNCTION SCOPE: ' + a, b, c);
}

function_scope();



for (let a = 0; a < 10; a++) {
    console.log(a);
}

console.log('GLOBAL SCOPE: ' + a, b, c)