document.getElementById("button").addEventListener("click",guardarNombre)
function guardarNombre(){
    var userName=document.getElementById("nombre").value;
    localStorage.setItem("name",userName);
}