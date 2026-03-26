
let opcao;
do {
    opcao = Number(prompt(
        "=== Calculadora Elétrica ===\n" +
        "Escolha a operação desejada:\n" +
        "1 - Consumo de energia\n" +
        "2 - Conversão de unidades\n" +
        "3 - identificação de resistor\n" +
        "4 - Lei de Ohm\n" +
        "0 - Sair"
    ));

    switch(opcao) {
        case 1:
            consumo(); 
            break;
        case 2:
            conversao(); 
            break;
        case 3:
            resistor();
            break;
        case 4:
            leiOhn();
            break;
        
        case 0:
            console.log("Saindo da calculadora...");
            console.log("Calculadora finalizada, até a próxima :)")
            break;
        default:
            console.log("Opção inválida! Digite novamente.");
    }

} while (opcao !== 0);
