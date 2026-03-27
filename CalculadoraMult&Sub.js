function conversao() {

    let unidade = parseInt(prompt("Escolha a unidade base da sua conversão:\n1- Volt. \n2-Watt. \n3-Amper. \n4-Ohm. "))
    
    let valor = parseFloat(prompt("Digite o valor a converter: "));

    let origem = parseInt(prompt("Qual a unidadede de origem?\n1-micro.\n2-Mili.\n3-Base.\n4-Kilo.\n5-Mega.\n6-Giga."))

    let destino = parseInt(prompt("Qual a unidadede de destino?\n1-micro.\n2-Mili.\n3-Base.\n4-Kilo.\n5-Mega.\n6-Giga."))

    let resultado = valor

    switch (unidade) {
        case 1:
            switch (destino){

                case 1:
                    if(origem == 2) resultado= valor * 1000
                    if(origem == 3) resultado= valor * 1000000
                    if(origem == 4) resultado= valor * 1000000000
                    if(origem == 5) resultado= valor * 1000000000000
                    if(origem == 6) resultado= valor * 1000000000000000
                    console.log(resultado + "µV");
                    break;

                    case 2:
                    if(origem == 1) resultado= valor / 1000
                    if(origem == 3) resultado= valor * 1000
                    if(origem == 4) resultado= valor * 1000000
                    if(origem == 5) resultado= valor * 1000000000
                    if(origem == 6) resultado= valor * 1000000000000
                    console.log(resultado + "mV");
                    break;

                    case 3:
                    if(origem == 1) resultado= valor / 1000000
                    if(origem == 2) resultado= valor / 1000
                    if(origem == 4) resultado= valor * 1000
                    if(origem == 5) resultado= valor * 1000000
                    if(origem == 6) resultado= valor * 1000000000
                    console.log(resultado + "V");
                    break;

                    case 4:
                    if(origem == 1) resultado= valor / 1000000000
                    if(origem == 2) resultado= valor / 1000000
                    if(origem == 3) resultado= valor / 1000
                    if(origem == 5) resultado= valor * 1000
                    if(origem == 6) resultado= valor * 1000000
                    console.log(resultado + "kV");
                    break;

                    case 5:
                    if(origem == 1) resultado= valor / 1000000000000
                    if(origem == 2) resultado= valor / 1000000000
                    if(origem == 3) resultado= valor / 1000000
                    if(origem == 4) resultado= valor / 1000
                    if(origem == 6) resultado= valor * 1000
                    console.log(resultado + "MV");
                    break;

                    case 6:
                    if(origem == 1) resultado= valor / 1000000000000000
                    if(origem == 2) resultado= valor / 1000000000000
                    if(origem == 3) resultado= valor / 1000000000
                    if(origem == 4) resultado= valor / 1000000
                    if(origem == 5) resultado= valor / 1000
                    console.log(resultado + "GV");
                    break;
            }
            break;

        case 2:
            switch (destino)    {
                    case 1:
                    if(origem == 2) resultado= valor * 1000
                    if(origem == 3) resultado= valor * 1000000
                    if(origem == 4) resultado= valor * 1000000000
                    if(origem == 5) resultado= valor * 1000000000000
                    if(origem == 6) resultado= valor * 1000000000000000
                    console.log(resultado + "µW");
                    break;

                    case 2:
                    if(origem == 1) resultado= valor / 1000
                    if(origem == 3) resultado= valor * 1000
                    if(origem == 4) resultado= valor * 1000000
                    if(origem == 5) resultado= valor * 1000000000
                    if(origem == 6) resultado= valor * 1000000000000
                    console.log(resultado + "mW");
                    break;

                    case 3:
                    if(origem == 1) resultado= valor / 1000000
                    if(origem == 2) resultado= valor / 1000
                    if(origem == 4) resultado= valor * 1000
                    if(origem == 5) resultado= valor * 1000000
                    if(origem == 6) resultado= valor * 1000000000
                    console.log(resultado + "W");
                    break;

                    case 4:
                    if(origem == 1) resultado= valor / 1000000000
                    if(origem == 2) resultado= valor / 1000000
                    if(origem == 3) resultado= valor / 1000
                    if(origem == 5) resultado= valor * 1000
                    if(origem == 6) resultado= valor * 1000000
                    console.log(resultado + "kW");
                    break;

                    case 5:
                    if(origem == 1) resultado= valor / 1000000000000
                    if(origem == 2) resultado= valor / 1000000000
                    if(origem == 3) resultado= valor / 1000000
                    if(origem == 4) resultado= valor / 1000
                    if(origem == 6) resultado= valor * 1000
                    console.log(resultado + "MW");
                    break;

                    case 6:
                    if(origem == 1) resultado= valor / 1000000000000000
                    if(origem == 2) resultado= valor / 1000000000000
                    if(origem == 3) resultado= valor / 1000000000
                    if(origem == 4) resultado= valor / 1000000
                    if(origem == 5) resultado= valor / 1000
                    console.log(resultado + "GW");
                    break;
            }
            break;

            case 3:
                switch(destino) {
                    case 1:
                    if(origem == 2) resultado= valor * 1000
                    if(origem == 3) resultado= valor * 1000000
                    if(origem == 4) resultado= valor * 1000000000
                    if(origem == 5) resultado= valor * 1000000000000
                    if(origem == 6) resultado= valor * 1000000000000000
                    console.log(resultado + "µA");
                    break;

                    case 2:
                    if(origem == 1) resultado= valor / 1000
                    if(origem == 3) resultado= valor * 1000
                    if(origem == 4) resultado= valor * 1000000
                    if(origem == 5) resultado= valor * 1000000000
                    if(origem == 6) resultado= valor * 1000000000000
                    console.log(resultado + "mA");
                    break;

                    case 3:
                    if(origem == 1) resultado= valor / 1000000
                    if(origem == 2) resultado= valor / 1000
                    if(origem == 4) resultado= valor * 1000
                    if(origem == 5) resultado= valor * 1000000
                    if(origem == 6) resultado= valor * 1000000000
                    console.log(resultado + "A");
                    break;

                    case 4:
                    if(origem == 1) resultado= valor / 1000000000
                    if(origem == 2) resultado= valor / 1000000
                    if(origem == 3) resultado= valor / 1000
                    if(origem == 5) resultado= valor * 1000
                    if(origem == 6) resultado= valor * 1000000
                    console.log(resultado + "kA");
                    break;

                    case 5:
                    if(origem == 1) resultado= valor / 1000000000000
                    if(origem == 2) resultado= valor / 1000000000
                    if(origem == 3) resultado= valor / 1000000
                    if(origem == 4) resultado= valor / 1000
                    if(origem == 6) resultado= valor * 1000
                    console.log(resultado + "MA");
                    break;

                    case 6:
                    if(origem == 1) resultado= valor / 1000000000000000
                    if(origem == 2) resultado= valor / 1000000000000
                    if(origem == 3) resultado= valor / 1000000000
                    if(origem == 4) resultado= valor / 1000000
                    if(origem == 5) resultado= valor / 1000
                    console.log(resultado + "GA")
                    break;

        }
        break;

        case 4: 
        switch(destino) {
            case 1:
            if(origem == 2) resultado= valor * 1000
            if(origem == 3) resultado= valor * 1000000
            if(origem == 4) resultado= valor * 1000000000
            if(origem == 5) resultado= valor * 1000000000000
            if(origem == 6) resultado= valor * 1000000000000000
            console.log(resultado + "µΩ");
            break;

            case 2:
            if(origem == 1) resultado= valor / 1000
            if(origem == 3) resultado= valor * 1000
            if(origem == 4) resultado= valor * 1000000
            if(origem == 5) resultado= valor * 1000000000
            if(origem == 6) resultado= valor * 1000000000000
            console.log(resultado + "mΩ");
            break;

            case 3:
            if(origem == 1) resultado= valor / 1000000
            if(origem == 2) resultado= valor / 1000
            if(origem == 4) resultado= valor * 1000
            if(origem == 5) resultado= valor * 1000000
            if(origem == 6) resultado= valor * 1000000000
            console.log(resultado + "Ω");
            break;

            case 4:
            if(origem == 1) resultado= valor / 1000000000
            if(origem == 2) resultado= valor / 1000000
            if(origem == 3) resultado= valor / 1000
            if(origem == 5) resultado= valor * 1000
            if(origem == 6) resultado= valor * 1000000
            console.log(resultado + "kΩ");
            break;

            case 5:
            if(origem == 1) resultado= valor / 1000000000000
            if(origem == 2) resultado= valor / 1000000000
            if(origem == 3) resultado= valor / 1000000
            if(origem == 4) resultado= valor / 1000
            if(origem == 6) resultado= valor * 1000
            console.log(resultado + "MΩ");
            break;

            case 6:
            if(origem == 1) resultado= valor / 1000000000000000
            if(origem == 2) resultado= valor / 1000000000000
            if(origem == 3) resultado= valor / 1000000000
            if(origem == 4) resultado= valor / 1000000
            if(origem == 5) resultado= valor / 1000
            console.log(resultado + "GΩ")
            break;

        }
    } 
}