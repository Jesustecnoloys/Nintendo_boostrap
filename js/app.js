function cambiarPagina(opcion)
{
	document.getElementById("inicio").style.display="none";
	document.getElementById("componetes").style.display="none";
	document.getElementById("montaje").style.display="none";
	document.getElementById("galeria").style.display="none";
	/*document.getElementById("llantas-y-neumaticos").style.display="none";*/
	/*document.getElementById("asientos").style.display="none";*/
	document.getElementById("mantenimiento").style.display="none";
	/*document.getElementById("carrocerias").style.display="none";*/
	/*document.getElementById("interiores").style.display="none";*/
	/*document.getElementById("resturaciones").style.display="none";*/
	document.getElementById("contacto").style.display="none";
	document.getElementById("formulario").style.display="none";
	document.getElementById("ayuda").style.display="none";

	/*var opcion="inicio";*/
	var titulo="";
	
	switch(opcion)
	{
		case "inicio":
			titulo="INFORMATICA";
			break;
		case "componetes":
			titulo="componetes";
			break;
		case "montaje":
			titulo="montaje";
			break;
		case "mantenimiento":
			titulo="mantenimiento";
			break;
		/*case "llantas-y-neumamticos":
			titulo="LLantas y Neumamticos";
			break;
		case "asientos":
			titulo="Asientos";
			break;
		case "tuning":
			titulo="Tuning";
			break;
		case "carrocerias":
			titulo="Carrocerias";
			break;
		case "interiores":
			titulo="Interiores";
			break;
		case"resturaciones":
			titulo="Resturaciones";
			break;*/
		case "contacto":
			titulo="Contacto";
			break;
		case "formulario":
			titulo="Formulario";
			break;
		case "ayuda":
			titulo="Ayuda";
			break;	

	}

	document.getElementById("titulo").innerHTML=titulo;
	document.getElementById(opcion).style.display="initial";

}

 var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
cambiarPagina("inicio");

/*document.getElementById("cookies").innerHTML =
"navigator.cookieEnabled is " + navigator.cookieEnabled;*/