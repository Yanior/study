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