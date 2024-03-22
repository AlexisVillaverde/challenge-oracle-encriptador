//Guardar datos insgresados de los textArea en constantes
const campo_texto = document.querySelector("#texto-usuario");
const campo_resultado = document.querySelector("#campo-resultado");

//Matriz para encriptar texto
const matriz_claves = [
    ["e","enter"], //indice 0
    ["i","imes"], //indice 1
    ["a","ai"], //indice 2
    ["o","ober"], //indice 3
    ["u","ufat"] //indice 4
];

//Verificar solo la entrada de letras minúsculas
campo_texto.addEventListener("input", () =>{
        let cadena = campo_texto.value;
        patron = /^[a-z," "]*$/;
        patron_mayus=/[A-Z]/;
        if(patron_mayus.test(cadena) ){
            campo_texto.value = cadena.toLowerCase();
        }else if(!patron.test(cadena)){
            swal.fire({
                title:'Solo se permiten letras en minúsculas'
            });
            cadena = cadena.substring(0,cadena.length-1);
            campo_texto.value=cadena;
        }
})

//Función para verificar si hay texto introducido y encriptar el texto
function btnEncriptar(){
        const textoIngresado = campo_texto.value;
        if(textoIngresado.trim() == ""){
            swal.fire({
                title:"Por favor ingrese un mensaje a encriptar"
            });
            return;
        }else{
        const texto = encriptar(campo_texto.value);
        campo_resultado.value = texto;
        // Limpiar el campo de texto
        document.getElementById('texto-usuario').value = '';
        //Mostrar resultado y ocultar mensajes iniciales
        document.getElementById("mensajes-iniciales").style.display="none";
        document.getElementById("resultado").style.display="block";
    }
}

//Función para encriptar texto
function encriptar(frase){
     for(let i=0;i<matriz_claves.length; i++){
        if(frase.includes(matriz_claves[i][0])){
            frase = frase.replaceAll(
                matriz_claves[i][0],
                matriz_claves[i][1]
            )
        }
     }
     return frase;
}

//Función para verificar si hay texto introducido y desencriptar texto  
function btnDesencriptar(){
    const textoIngresado = campo_texto.value;
        if(textoIngresado.trim() == ""){
            //alert('Por favor ingrese un mensaje a encriptar')
             swal.fire({
                title:"Por favor ingrese un mensaje a encriptar"
            }); 
            return;
        }else{
            const texto = desencriptar(campo_texto.value);
            campo_resultado.value = texto;
        // Limpiar el campo de texto
        document.getElementById('texto-usuario').value = '';
        document.getElementById("mensajes-iniciales").style.display="none";
        document.getElementById("resultado").style.display="block";
        }
}

//Función para desencriptar
function desencriptar(fraseEncriptada){
    for(let i = matriz_claves.length-1; i>=0; i--){
        if(fraseEncriptada.includes(matriz_claves[i][1])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_claves [i][1],
                matriz_claves [i][0]
            )
        }
    }
    return fraseEncriptada;
}

//Función para mostrar el resultado y ocultar mensajes iniciales
function mostrarElementos() {
    var imagen = document.getElementById("muneco");
    var botonCopiar = document.getElementById("btn-copy");
    
    if (campo_texto.value.length = 0) {
      imagen.style.display = "block";
      botonCopiar.style.display = "block";
    } else {
      imagen.style.display = "none";
      botonCopiar.style.display = "none";
    }
  }

//Función para copiar los resultados
function copiarAlPortapapeles(){
    navigator.clipboard.writeText(campo_resultado.value);
    swal.fire({
        title:"El texto fue copiado exitosamente😎😎"
    });
} 