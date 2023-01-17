var estado = 0;


function desplegable(){
	
	var elemento=document.getElementById('menu_oculto');
	
	if(estado==0){
		elemento.style.display = "block";
		estado = 1;	
	}else{
		elemento.style.display = "none";
		estado = 0;
	}
	
}

function cierra(){
	
	var elemento=document.getElementById('menu_oculto');
	
	elemento.style.display = "none";
	estado = 0;
		
}