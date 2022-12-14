function mostrarResultado(){
    var puntaje=localStorage.getItem("SCORE")
    var contpuntaje=document.getElementById("SCORE")
    if(puntaje===null){
        contpuntaje.innerHTML=0+" puntos"
    }else{
        contpuntaje.innerHTML=puntaje+" puntos"
    }
}
mostrarResultado();