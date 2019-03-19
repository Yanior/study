

window.onload = function() {
	
	var wrap = document.getElementById('popup_overlay');
	
	var closeB = document.getElementById('popup_close');
	closeB.onclick = popupClose;
	
	var inP = document.getElementById('popupIn');
	inP.onclick = popup;
	
	
	var tIn, tOut;
	// <div style="display:block">
	function popup() {
		wrap.style.display = 'block';
		
		popupIn(1);
	}
	
	function popupClose() {
		popupOut(0);	
	}
	
	function popupIn(x) {
		
		/// 0.05 0.1 0.15
		var op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0;
		
		if(op < x) {
			
			clearInterval(tOut);
			op += 0.05;
			wrap.style.opacity = op;
			
			//setTimeout(popupIn, 50, x);
			 tIn = setTimeout(function () {
				
				popupIn(x);
				
			}, 50);
		}
	}
	
	function popupOut(x) {
		
		/// 0.05 0.1 0.15
		var op = (wrap.style.opacity) ? parseFloat(wrap.style.opacity) : 0;
		
		if(op > x) {
			
			clearInterval(tIn);
			op -= 0.05;
			wrap.style.opacity = op;
			
			//setTimeout(popupIn, 50, x);
			tOut = setTimeout(function () {
				
				popupOut(x);
				
			}, 100);
		}
		
		if(wrap.style.opacity == x) {
			wrap.style.display = 'none';
		}
	}
	
	
	//setTimeout(popup,3000);
	
	var h1 = document.getElementById('header');
	
	h1.onclick = function () {
		clearTimeout(intStop);
	}
	
	function changeColor() {
		
		///color
		if(h1.style.color == 'black') {
			h1.style.color = 'white';
		}
		else {
			h1.style.color = 'black';
		}
	}
	
	var intStop = setInterval(changeColor, 500);
	/*
	alert();
	confirm();
	prompt();*/
	
	
	do {
		var str = prompt("Введите сообщение");
		
		var result = confirm("Вы ввели  " + str + ". Нажмите на ОК для продолжения, или Cancel для повтора.");// OK Cancel
	}
	while(!result)
	
	alert(str);
	
	
}

