const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const claves = new Map();
claves.set('a', 'ai');
claves.set('e', 'enter');
claves.set('i', 'imes');
claves.set('o', 'ober');
claves.set('u', 'ufat');

function encriptar(stringEncriptada) {
    if (textArea.value == "") {
        alert("No has digitado un texto para encriptar");
        return "";
    }
    if (!esValidoTexto(textArea.value)) {
        alert("has digitado caracteres especiales, intenta nuevamente");
        textArea.value = "";
        return "";
    }
    stringEncriptada = stringEncriptada.value.toLowerCase();
    for (const [clave, valor] of claves.entries()) {
        if (stringEncriptada.includes(clave)) {
            stringEncriptada = stringEncriptada.replaceAll(clave, valor);
        }
    }
    return stringEncriptada;
}

/**
 * funcion para encriptar
 * aunque el manejo pormedio de replace es mas compacto, este puede hacer codificaciones dobles, ya que los codigos contienen vocales.
 * @param {String} stringEncriptar: ojo, no pasar elemento html, acceder a su valor.
 */
function encriptarV2(stringEncriptar) {
    if (textArea.value == "") {
        alert("No has digitado un texto para encriptar");
        return "";
    }
    if (!esValidoTexto(textArea.value)) {
        alert("has digitado caracteres especiales, intenta nuevamente");
        textArea.value = "";
        return "";
    }
    let stringEncriptada = "";
    contador = 0;
    for (const letra of stringEncriptar) {
        switch (letra) {
            case 'a':
                codigo="ai";
                break;
            case 'e':
                codigo="enter";
                break;
            case 'i':
                codigo="imes";
                break;
            case 'o':
                codigo="ober";
                break;
            case 'u':
                codigo="ufat";
                break;
            default:
                codigo=letra;
                break;
        }
        stringEncriptada = stringEncriptada.concat('',codigo);
    }
    return stringEncriptada;
}

function desencriptar(stringEncriptada){
    for (const [clave,valor] of claves) {
        if(stringEncriptada.includes(valor)){
            stringEncriptada = stringEncriptada.replaceAll(valor,clave);
        }
    }
    return stringEncriptada;
}

function btnEncriptar() {
    const textoEncriptado = encriptarV2(textArea.value);
    if (textoEncriptado == "") {
        return;
    }
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
    if (textArea.value == "") {
        alert("No has digitado texto para desencriptar!");
    }
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
}

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
}

function esValidoTexto(texto) {
    //const formato = /[´`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    // /^[a-z]*$/
    const formato = /^[a-z]*$/;
    let respuesta = formato.test(texto) ? true : false;
    return respuesta;
}