function datos(){
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    var f = document.getElementById("f").checked;
    var m = document.getElementById("m").checked;
    var estatura = document.getElementById("estatura").value;
    var peso = document.getElementById("peso").value;
    var deporte = document.getElementById("deporte").checked;

    var mensaje = "Nombres: "+ nombres
    +"\nApellidos: "+ apellidos
    +"\nEmail: "+ email
    +"\nFecha de nacimiento: "+ fechaNacimiento
    + "\nEs mujer: " + f
    + "\nEs hombre: " + m
    + "\nEstatura: " + estatura + " m"
    + "\nPeso: " + peso + " kg"
    + "\nHace deporte: " + deporte;

    console.log(mensaje);
}

