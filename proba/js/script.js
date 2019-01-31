window.onload = function () {
    var wrap = document.getElementById('popup_overlay');
    var closeB = document.getElementById('popup_close');
    var btn = document.getElementById('popupIn');
    btn.onclick = popupOpen;
    closeB.onclick = popupClose;

    function popupOpen() {
        wrap.style.display = 'block';
        popupBtn(1);
    }

    function popupBtn(x) {
        var op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0;
        
        if(op < x ) {
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

     function popupIn(x) {
        var op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0;

        if(op < x) {
            op += 0.05;
            wrap.style.opacity = op;

            // setTimeout(popupIn, 50, x);
            setTimeout(function () {
                popupIn(x);
            }, 50);
        }
     }
     function popupOut(x) {
        var op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0;

        if(op > x) {
            op -= 0.05;
            wrap.style.opacity = op;

            // setTimeout(popupIn, 50, x);
            setTimeout(function () {
                popupOut(x);
            }, 50);
        }
        if(wrap.style.opacity == x) {
            wrap.style.display = 'none'; 
         }
     }

     setTimeout(popup, 3000);
}