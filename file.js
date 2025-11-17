let text = document.getElementById("text");
function obtener(documento) {
    let valor = documento.innerText;
    if (text.textContent === "0") {
        text.textContent = valor;
    } else {
        text.textContent += valor
    }
}
function limpiar() {
    text.textContent = "0";
}
function pregunta() {
    alert("Calculadora simple 1.0")
}
function borrar() {
    if (text.textContent.length > 1) {
        text.textContent = text.textContent.slice(0,text.textContent.length - 1);
    } else {
        text.textContent = "0";
    }
}
function calcular() {
    let ins = "0" + text.textContent + ";";
    let i = 0;
    let pos1 = 0;
    let result = 0;
    let oper = 1;
    let ver = 0;
    while (i < ins.length) {
        if (ins[i] == "+" || ins[i] == "-" || ins[i] == "*" || ins[i] == "/" || ins[i] == ";") {
            if (oper == 1) {
                result += parseInt(ins.slice(pos1,i));
            }
            if (oper == 2) {
                result -= parseInt(ins.slice(pos1,i));
            }
            if (oper == 3) {
                result *= parseInt(ins.slice(pos1,i));
            }
            if (oper == 4) {
                result /= parseInt(ins.slice(pos1,i));
            }
            if (ins[i] == "+") {
                oper = 1;
            }
            if (ins[i] == "-") {
                oper = 2;
            }
            if (ins[i] == "*") {
                oper = 3;
            }
            if (ins[i] == "/") {
                oper = 4;
            }
            pos1 = i+1;
        }
        i++;
    }
    text.textContent = result;
}