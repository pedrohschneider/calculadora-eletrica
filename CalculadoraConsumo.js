let eletronico = prompt("Digite o nome do aparelho eletrônico: ")
let tipo = parseInt(prompt("Qual é a unidade de potência do seu aparelho?\n1 - Watt\n2 - Quilowatt"))

if (tipo == 1) {

    let potenciaWatt = parseInt(prompt("Insira a potência do seu aparelho (em Watt): "))
    let tempoUso = parseInt(prompt("Digite o tempo de uso diário desse aparelho (em horas): "))
    let valor = parseFloat(prompt("Digite o valor da taxa do Quilowatt: "))

    let consumoDiario = (potenciaWatt * tempoUso) / 1000
    let consumoMensal = consumoDiario * 30
    
    let custoDiario = consumoDiario * valor
    let custoMensal = custoDiario * 30

    console.log("Aparelho:", eletronico)
    console.log("Consumo mensal em kWh:", (consumoMensal.toFixed(2)))
    console.log("Custo total ao final do mês: R$", (custoMensal.toFixed(2)))

} 
else if (tipo == 2) {

    let potenciaKW = parseInt(prompt("Insira a potência do seu aparelho (em kW): "))
    let tempoUso = parseInt(prompt("Digite o tempo de uso diário desse aparelho (em horas): "))
    let valor = parseFloat(prompt("Digite o valor da taxa do Quilowatt: "))

    let consumoDiario = potenciaKW * tempoUso
    let consumoMensal = consumoDiario * 30

    let custoDiario = consumoDiario * valor
    let custoMensal = custoDiario * 30

    console.log("Aparelho:", eletronico)
    console.log("Consumo mensal em kWh:", (consumoMensal.toFixed(2)))
    console.log("Custo total ao final do mês: R$", (custoMensal.toFixed(2)))

}
else{
    console.log("Tipo de unidade inválido.")
}