// Identificador de valor de resistor por código de cores

let tipo = parseInt(prompt("O resistor possui quantas faixas?\n4 - Quatro faixas\n5 - Cinco faixas"));

// Variáveis para armazenar os valores das cores
let cor1 = parseInt(prompt("1ª Faixa (Dígito):\n0-Preto, 1-Marrom, 2-Vermelho, 3-Laranja, 4-Amarelo, 5-Verde, 6-Azul, 7-Violeta, 8-Cinza, 9-Branco"));
let cor2 = parseInt(prompt("2ª Faixa (Dígito):\n0-Preto, 1-Marrom, 2-Vermelho, 3-Laranja, 4-Amarelo, 5-Verde, 6-Azul, 7-Violeta, 8-Cinza, 9-Branco"));

let valorBase = 0;
let multiplicadorOpcao = 0;
let toleranciaOpcao = 0;

// Se for 4 faixas, a lógica é: (Dígito1 e Dígito2) x Multiplicador
if (tipo == 4) {
    // Para juntar 1 e 2 e virar 12, multiplicamos o primeiro por 10 e somamos o segundo
    valorBase = (cor1 * 10) + cor2;
    
    multiplicadorOpcao = parseInt(prompt("Multiplicador:\n1-Preto(x1), 2-Marrom(x10), 3-Vermelho(x100), 4-Laranja(x1k), 5-Amarelo(x10k), 6-Verde(x100k), 7-Azul(x1M), 8-Dourado(x0.1), 9-Prata(x0.01)"));
    
    toleranciaOpcao = parseInt(prompt("Tolerância:\n1-Marrom(1%), 2-Vermelho(2%), 3-Dourado(5%), 4-Prata(10%)"));
} 

// Se for 5 faixas, a lógica é: (Dígito1, Dígito2 e Dígito3) x Multiplicador
else if (tipo == 5) {
    let cor3 = parseInt(prompt("3ª Faixa (Dígito):\n0-Preto, 1-Marrom, 2-Vermelho, 3-Laranja, 4-Amarelo, 5-Verde, 6-Azul, 7-Violeta, 8-Cinza, 9-Branco"));
    
    // Para juntar 1, 2 e 3 e virar 123:
    valorBase = (cor1 * 100) + (cor2 * 10) + cor3;
    
    multiplicadorOpcao = parseInt(prompt("Multiplicador:\n1-Preto(x1), 2-Marrom(x10), 3-Vermelho(x100), 4-Laranja(x1k), 5-Amarelo(x10k), 6-Verde(x100k), 7-Azul(x1M), 8-Dourado(x0.1), 9-Prata(x0.01)"));
    
    toleranciaOpcao = parseInt(prompt("Tolerância:\n1-Marrom(1%), 2-Vermelho(2%), 3-Dourado(5%), 4-Prata(10%)"));
}

// Lógica do Multiplicador usando Switch (como você fez na calculadora)
let mult = 1;
switch(multiplicadorOpcao) {
    case 1: mult = 1; break;
    case 2: mult = 10; break;
    case 3: mult = 100; break;
    case 4: mult = 1000; break;
    case 5: mult = 10000; break;
    case 6: mult = 100000; break;
    case 7: mult = 1000000; break;
    case 8: mult = 0.1; break;
    case 9: mult = 0.01; break;
}

// Lógica da Tolerância
let tol = "";
switch(toleranciaOpcao) {
    case 1: tol = "1%"; break;
    case 2: tol = "2%"; break;
    case 3: tol = "5%"; break;
    case 4: tol = "10%"; break;
}

let resultadoFinal = valorBase * mult;

// Exibição do resultado com conversão simples
if (resultadoFinal >= 1000000) {
    console.log("Resultado: " + (resultadoFinal / 1000000).toFixed(2) + " MΩ | Tolerância: " + tol);
} else if (resultadoFinal >= 1000) {
    console.log("Resultado: " + (resultadoFinal / 1000).toFixed(2) + " kΩ | Tolerância: " + tol);
} else {
    console.log("Resultado: " + resultadoFinal.toFixed(2) + " Ω | Tolerância: " + tol);
}