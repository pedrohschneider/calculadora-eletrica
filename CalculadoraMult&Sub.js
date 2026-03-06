// Calculadora de múltiplos e submúltiplos

let unidade = parseInt(prompt(
    "Digite a unidade do seu valor:\n1 - Volt\n2 - Watt\n3 - Ampere\n4 - Ohm"
    ))
    
    let valor = parseFloat(prompt("Digite o valor da unidade principal: "))
    
    let tipo = parseInt(prompt("Deseja converter para:\n1 - mili (m)\n2 - kilo(k) \n" ))
    
    let resultado
    
    if (tipo == 1){
        resultado = valor * 1000
    }
    else if (tipo == 2){
        resultado = valor / 1000
    }
    
    if (unidade == 1){
        console.log("Resultado em Volt:", resultado)
    }
    else if (unidade == 2){
        console.log("Resultado em Watt:", resultado)
    }
    else if (unidade == 3){
        console.log("Resultado em Ampere:", resultado)
    }
    else if (unidade == 4){
        console.log("Resultado em Ohm:", resultado)
    }
    else{
        console.log("Unidade inválida.")
    }