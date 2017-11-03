function changeColor(nuevoColor){
	
	var e = document.getElementById('test');
	e.style.color = nuevoColor;
}

function validar(){

	var user = document.getElementById('user');
	var pass = document.getElementById('pass');

	if(user.value == "" OR pass.value.length == 0){

		alert("Ambos campos son obligatorios.");
	}
}