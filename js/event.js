function buttonClick (button) {
	alert("Вы нажали на кнопку. Кнопка имеет имя = " + button.name + 
	", также value = " + button.value + ".");
}

var counter = 0;
function counterFirst (element) {
	counter++;
	element.innerHTML = "На этот текст было наведено " + counter + " раз";
}
