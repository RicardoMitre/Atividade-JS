function calcularNota() {
    let n1 = parseFloat(document.getElementById("nota1").value)
    let n2 = parseFloat(document.getElementById("nota2").value)

    let media = (n1+n2)/2

    let situacao = ""
    let cor = ""

    if (media>=6.0) {
        situacao = "Aprovado"
        cor = "#000144"
    }else {
        situacao = "Reprovado"
        cor="#870012"
    }

    document.getElementById("resultadom").innerHTML = media
    document.getElementById("situationm").innerHTML = situacao
    document.getElementById("situationm").style.fontWeight = "bolder"
    document.getElementById("situationm").style.color = cor  
}

function calcularImc() {
    let n1 = parseFloat(document.getElementById("peso").value)
    let n2 = parseFloat(document.getElementById("altura").value)

    let imc = n1/n2**2

    let situacao = ""

    if (imc>=40.0) {
        situacao = "Obesidade III (mórbida)"
    } else if(imc>=35.0) {
        situacao = "Obesidade II (severa)"
    } else if (imc>=30.0) {
        situacao = "Obesidade I"
    } else if (imc>=25.0) {
        situacao = "Acima do peso"
    } else if (imc>=18.5) {
        situacao = "Peso normal"
    } else if (imc>=17.0) {
        situacao = "Abaixo do peso"
    } else {
        situacao = "Muito abaixo do peso"
    }

    document.getElementById("resultadoi").innerHTML = imc.toFixed(2)
    document.getElementById("situationi").innerHTML = situacao
    document.getElementById("situationi").style.fontWeight = "bolder"
}

function enviar() {
    let palavra = document.getElementById("palavra").value
    cor = document.querySelector('input[name="cor"]:checked').value

    const node = document.createElement("li")
    const textnode = document.createTextNode(palavra)
    node.appendChild(textnode)
    node.appendChild
    document.getElementById("lista").appendChild(node).style.color = cor

}
