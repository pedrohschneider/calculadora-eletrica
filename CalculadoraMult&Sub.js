function conversao() {
    let unidade = parseInt(prompt(
        "Escolha a unidade base:\n1 - Volt\n2 - Watt\n3 - Ampere\n4 - Ohm"
    ))

    let valor = parseFloat(prompt("Digite o valor:"))

    let origem = parseInt(prompt(
        "unidade de origem:\n1- micro\n2- mili\n3- base\n4- kilo\n5- mega\n6- giga"
    ))

    let destino = parseInt(prompt(
        "unidade de destino:\n1- micro\n2- mili\n3- base\n4- kilo\n5- mega\n6- giga"
    ))

    let resultado = valor

    switch (unidade) {

        case 1:
            switch (destino) {
                case 1:
                    if (origem == 2) resultado = valor * 1000
                    if (origem == 3) resultado = valor * 1000000
                    if (origem == 4) resultado = valor * 1000000000
                    if (origem == 5) resultado = valor * 1000000000000
                    if (origem == 6) resultado = valor * 1000000000000000
                    console.log(resultado.toFixed(2), "µV")
                    break
                case 2:
                    if (origem == 1) resultado = valor / 1000
                    if (origem == 3) resultado = valor * 1000
                    if (origem == 4) resultado = valor * 1000000
                    if (origem == 5) resultado = valor * 1000000000
                    if (origem == 6) resultado = valor * 1000000000000
                    console.log(resultado.toFixed(2), "mV")
                    break
                case 3:
                    if (origem == 1) resultado = valor / 1000000
                    if (origem == 2) resultado = valor / 1000
                    if (origem == 4) resultado = valor * 1000
                    if (origem == 5) resultado = valor * 1000000
                    if (origem == 6) resultado = valor * 1000000000
                    console.log(resultado.toFixed(2), "V")
                    break
                case 4:
                    if (origem == 1) resultado = valor / 1000000000
                    if (origem == 2) resultado = valor / 1000000
                    if (origem == 3) resultado = valor / 1000
                    if (origem == 5) resultado = valor * 1000
                    if (origem == 6) resultado = valor * 1000000
                    console.log(resultado.toFixed(2), "kV")
                    break
                case 5:
                    if (origem == 1) resultado = valor / 1000000000000
                    if (origem == 2) resultado = valor / 1000000000
                    if (origem == 3) resultado = valor / 1000000
                    if (origem == 4) resultado = valor / 1000
                    if (origem == 6) resultado = valor * 1000
                    console.log(resultado.toFixed(2), "MV")
                    break
                case 6:
                    if (origem == 1) resultado = valor / 1000000000000000
                    if (origem == 2) resultado = valor / 1000000000000
                    if (origem == 3) resultado = valor / 1000000000
                    if (origem == 4) resultado = valor / 1000000
                    if (origem == 5) resultado = valor / 1000
                    console.log(resultado.toFixed(2), "GV")
                    break
            }
            break

        case 2:
            switch (destino) {
                case 1:
                    if (origem == 2) resultado = valor * 1000
                    if (origem == 3) resultado = valor * 1000000
                    if (origem == 4) resultado = valor * 1000000000
                    if (origem == 5) resultado = valor * 1000000000000
                    if (origem == 6) resultado = valor * 1000000000000000
                    console.log(resultado.toFixed(2), "µW")
                    break
                case 2:
                    if (origem == 1) resultado = valor / 1000
                    if (origem == 3) resultado = valor * 1000
                    if (origem == 4) resultado = valor * 1000000
                    if (origem == 5) resultado = valor * 1000000000
                    if (origem == 6) resultado = valor * 1000000000000
                    console.log(resultado.toFixed(2), "mW")
                    break
                case 3:
                    if (origem == 1) resultado = valor / 1000000
                    if (origem == 2) resultado = valor / 1000
                    if (origem == 4) resultado = valor * 1000
                    if (origem == 5) resultado = valor * 1000000
                    if (origem == 6) resultado = valor * 1000000000
                    console.log(resultado.toFixed(2), "W")
                    break
                case 4:
                    if (origem == 1) resultado = valor / 1000000000
                    if (origem == 2) resultado = valor / 1000000
                    if (origem == 3) resultado = valor / 1000
                    if (origem == 5) resultado = valor * 1000
                    if (origem == 6) resultado = valor * 1000000
                    console.log(resultado.toFixed(2), "kW")
                    break
                case 5:
                    if (origem == 1) resultado = valor / 1000000000000
                    if (origem == 2) resultado = valor / 1000000000
                    if (origem == 3) resultado = valor / 1000000
                    if (origem == 4) resultado = valor / 1000
                    if (origem == 6) resultado = valor * 1000
                    console.log(resultado.toFixed(2), "MW")
                    break
                case 6:
                    if (origem == 1) resultado = valor / 1000000000000000
                    if (origem == 2) resultado = valor / 1000000000000
                    if (origem == 3) resultado = valor / 1000000000
                    if (origem == 4) resultado = valor / 1000000
                    if (origem == 5) resultado = valor / 1000
                    console.log(resultado.toFixed(2), "GW")
                    break
            }
            break

        case 3: // AMPERE
            switch (destino) {
                case 1:
                    if (origem == 2) resultado = valor * 1000
                    if (origem == 3) resultado = valor * 1000000
                    if (origem == 4) resultado = valor * 1000000000
                    if (origem == 5) resultado = valor * 1000000000000
                    if (origem == 6) resultado = valor * 1000000000000000
                    console.log(resultado.toFixed(2), "µA")
                    break
                case 2:
                    if (origem == 1) resultado = valor / 1000
                    if (origem == 3) resultado = valor * 1000
                    if (origem == 4) resultado = valor * 1000000
                    if (origem == 5) resultado = valor * 1000000000
                    if (origem == 6) resultado = valor * 1000000000000
                    console.log(resultado.toFixed(2), "mA")
                    break
                case 3:
                    if (origem == 1) resultado = valor / 1000000
                    if (origem == 2) resultado = valor / 1000
                    if (origem == 4) resultado = valor * 1000
                    if (origem == 5) resultado = valor * 1000000
                    if (origem == 6) resultado = valor * 1000000000
                    console.log(resultado.toFixed(2), "A")
                    break
                case 4:
                    if (origem == 1) resultado = valor / 1000000000
                    if (origem == 2) resultado = valor / 1000000
                    if (origem == 3) resultado = valor / 1000
                    if (origem == 5) resultado = valor * 1000
                    if (origem == 6) resultado = valor * 1000000
                    console.log(resultado.toFixed(2), "kA")
                    break
                case 5:
                    if (origem == 1) resultado = valor / 1000000000000
                    if (origem == 2) resultado = valor / 1000000000
                    if (origem == 3) resultado = valor / 1000000
                    if (origem == 4) resultado = valor / 1000
                    if (origem == 6) resultado = valor * 1000
                    console.log(resultado.toFixed(2), "MA")
                    break
                case 6:
                    if (origem == 1) resultado = valor / 1000000000000000
                    if (origem == 2) resultado = valor / 1000000000000
                    if (origem == 3) resultado = valor / 10000000
                    break
            }
        }
    }