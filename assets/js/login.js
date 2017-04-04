var ema = document.getElementById('email');
var pwd = document.getElementById('pwd');
var validation;
var users = [{email : "admin@laboratoria.la",password : "laboratoria"},{
			  email : "maria@laboratoria.la",password : "maria"}];

document.getElementById('button-login').addEventListener("click",function(e){
	users.forEach(function(e){
		if (e.email == ema.value && e.password == pwd.value){
			validation = true;
	}});

	if (validation == true){window.location = "index.html";}
		else{ema.value="";pwd.value="";
			document.getElementById('result').style.display='block';
			}
	e.preventDefault();	
});
