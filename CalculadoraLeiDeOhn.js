function leiOhn() {
    let escolha = prompt("O que você deseja calcular?\n1 - Tensão (V)\n2 - Corrente (I)\n3 - Resistência (R)");

    if (escolha == "1") {
        let r = parseFloat(prompt("Digite o valor da Resistência (em Ohms):"));
        let i = parseFloat(prompt("Digite o valor da Corrente (em Amperes):"));
        let v = r * i;
        alert("A Tensão (V) é de: " + v.toFixed(2) + " Volts");

    } else if (escolha == "2") {
        let v = parseFloat(prompt("Digite o valor da Tensão (em Volts):"));
        let r = parseFloat(prompt("Digite o valor da Resistência (em Ohms):"));
        if (r == 0) {
            alert("Erro: A resistência não pode ser zero (curto-circuito!).");
        } else {
            let i = v / r;
            alert("A Corrente (I) é de: " + i.toFixed(2) + " Amperes");
        }

    } else if (escolha == "3") {
        let v = parseFloat(prompt("Digite o valor da Tensão (em Volts):"));
        let i = parseFloat(prompt("Digite o valor da Corrente (em Amperes):"));
        if (i == 0) {
            alert("Erro: A corrente não pode ser zero.");
        } else {
            let r = v / i;
            alert("A Resistência (R) é de: " + r.toFixed(2) + " Ohms");
        }

    } else {
        console.log("Opção inválida! Escolha 1, 2 ou 3.");
    }
}

