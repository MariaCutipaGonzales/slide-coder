
var button=document.getElementById('post-button');
var input=document.getElementById('input-text');
var textArea=document.getElementById('textArea');
var parent = document.getElementById('muro');

	
button.addEventListener('click', function(e){
	if (input.value == "" && textArea=="") {
		input.focus();
	}else if (input.value.length > 0 && textArea.value.length > 0){
	var div =document.createElement('div');
	var p=document.createElement('p');
	var del=document.createElement('button');
	del.setAttribute('class','delete');
	del.innerHTML="x";
	p.innerHTML=input.value+" :  "+textArea.value;
	div.appendChild(del);
	div.appendChild(p);
	parent.appendChild(div);
	input.value="";
	textArea.value="";

	del.addEventListener('click',function(e){
		e.preventDefault();
		this.parentNode.remove(e);
	});
	}
});


