// console.log("hola mundo");
let ob1 = document.querySelector('#dato');
let ob2 = document.querySelector('#dato-cifrado');

let btn = document.querySelector(".btn-cifrar");
btn.addEventListener('click', cifrado_Cesar)

console.log("-------------------------");

function cifrado_Cesar() {
    console.log("----Cifrado---");

    let dato = ob1.value
    let clave = Math.floor(Math.random() * 26)
    console.log("Tu clave es: " + clave.toString());
    let cifrado = ""
    for (var i = 0; i < dato.length; i++) {
        let a_i = 97;
        if (dato[i] == ' ') {
            cifrado += ' ';
            continue;
        }
        let num = (dato[i].charCodeAt(0) - a_i + clave) % 26 + a_i;

        cifrado += String.fromCharCode(num);
    }
    console.log("Cifrado => ", cifrado);

    ob2.value = cifrado;
}
// ehhh
