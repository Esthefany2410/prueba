function datos(){
   var nombres = document.getElementById("nombres").value
   var apellidos = document.getElementById("apellidos").value
   var email = document.getElementById("email").value
   var fechanacimiento = document.getElementById("fecha-nacimiento").value
   var f = document.getElementById("f").checked
   var m = document.getElementById("m").checked
   var n = document.getElementById("n").checked
   var estatura = document.getElementById("estatura").value
   var peso = document.getElementById("peso").value
   var deporte = document.getElementById("deporte").checked

   var Mensaje = `Nombres: ${nombres}
   \napellidos: ${apellidos}
   \ncorreo: ${email}
   \nfecha de nacimiento: ${fechanacimiento}
   \nes mujer: ${f}
   \nes hombre: ${m}
   \nno opina: ${n}
   \nestatura: ${estatura} m
   \npeso: ${peso} kg
   \nhace deporte: ${deporte}`
   
   console.log(Mensaje)
}