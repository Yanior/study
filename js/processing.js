function valid (form) {
	var fail = false;
	var name = form.name.value;
	var password = form.password.value;
	var RePassword = form.RePassword.value;
	var state = form.state.value;
	if(name == "" || name == " ")
		fail = "Вы не ввели свое имя";
	else if(password == "")
		fail = "Вы не ввели свой пароль";
	else if(password != RePassword)
		fail = "Пароли не совпадают";
	else if(state == "")
		fail = "Укажите пол";
	if(fail)
		alert(fail);
	else
		window.location = "http://google.com";
}