function mostrarNombre(){
    document.getElementById("saludo").innerHTML+=localStorage.getItem("name");
}
mostrarNombre();