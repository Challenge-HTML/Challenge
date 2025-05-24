const formulario = document.getElementById("frmContato");

formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    console.log("ENVIOU");

});

alert("tire suas duvidas")

function mostrarAviso() {
    alert("Enviado"); 
}