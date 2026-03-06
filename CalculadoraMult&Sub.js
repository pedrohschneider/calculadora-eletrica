// Conversor de múltiplos e submúltiplos de unidades elétricas

let unidade = parseInt(prompt(
    "Escolha a unidade:\n1 - Volt\n2 - Watt\n3 - Ampere\n4 - Ohm"
    ))
    
    let valor = parseFloat(prompt("Digite o valor:"))
    
    let origem = parseInt(prompt(
    "Prefixo de origem:\n1- micro\n2- mili\n3- base\n4- kilo\n5- mega\n6- giga"
    ))
    
    let destino = parseInt(prompt(
    "Prefixo de destino:\n1- micro\n2- mili\n3- base\n4- kilo\n5- mega\n6- giga"
    ))
    
    let resultado = valor
    
    switch(unidade){
    
    // ---------------- VOLT ----------------
    
    case 1:
    
    switch(destino){
    
    case 1:
    if(origem==2) resultado=valor*1000
    if(origem==3) resultado=valor*1000000
    if(origem==4) resultado=valor*1000000000
    if(origem==5) resultado=valor*1000000000000
    if(origem==6) resultado=valor*1000000000000000
    console.log(resultado.toFixed(2),"µV")
    break
    
    case 2:
    if(origem==1) resultado=valor/1000
    if(origem==3) resultado=valor*1000
    if(origem==4) resultado=valor*1000000
    if(origem==5) resultado=valor*1000000000
    if(origem==6) resultado=valor*1000000000000
    console.log(resultado.toFixed(2),"mV")
    break
    
    case 3:
    if(origem==1) resultado=valor/1000000
    if(origem==2) resultado=valor/1000
    if(origem==4) resultado=valor*1000
    if(origem==5) resultado=valor*1000000
    if(origem==6) resultado=valor*1000000000
    console.log(resultado.toFixed(2),"V")
    break
    
    case 4:
    if(origem==1) resultado=valor/1000000000
    if(origem==2) resultado=valor/1000000
    if(origem==3) resultado=valor/1000
    if(origem==5) resultado=valor*1000
    if(origem==6) resultado=valor*1000000
    console.log(resultado.toFixed(2),"kV")
    break
    
    case 5:
    if(origem==1) resultado=valor/1000000000000
    if(origem==2) resultado=valor/1000000000
    if(origem==3) resultado=valor/1000000
    if(origem==4) resultado=valor/1000
    if(origem==6) resultado=valor*1000
    console.log(resultado.toFixed(2),"MV")
    break
    
    case 6:
    if(origem==1) resultado=valor/1000000000000000
    if(origem==2) resultado=valor/1000000000000
    if(origem==3) resultado=valor/1000000000
    if(origem==4) resultado=valor/1000000
    if(origem==5) resultado=valor/1000
    console.log(resultado.toFixed(2),"GV")
    break
    
    }
    
    break
    
    
    // ---------------- WATT ----------------
    
    case 2:
    
    switch(destino){
    
    case 1:
    if(origem==2) resultado=valor*1000
    if(origem==3) resultado=valor*1000000
    if(origem==4) resultado=valor*1000000000
    if(origem==5) resultado=valor*1000000000000
    if(origem==6) resultado=valor*1000000000000000
    console.log(resultado.toFixed(2),"µW")
    break
    
    case 2:
    if(origem==1) resultado=valor/1000
    if(origem==3) resultado=valor*1000
    if(origem==4) resultado=valor*1000000
    if(origem==5) resultado=valor*1000000000
    if(origem==6) resultado=valor*1000000000000
    console.log(resultado.toFixed(2),"mW")
    break
    
    case 3:
    if(origem==1) resultado=valor/1000000
    if(origem==2) resultado=valor/1000
    if(origem==4) resultado=valor*1000
    if(origem==5) resultado=valor*1000000
    if(origem==6) resultado=valor*1000000000
    console.log(resultado.toFixed(2),"W")
    break
    
    case 4:
    if(origem==1) resultado=valor/1000000000
    if(origem==2) resultado=valor/1000000
    if(origem==3) resultado=valor/1000
    if(origem==5) resultado=valor*1000
    if(origem==6) resultado=valor*1000000
    console.log(resultado.toFixed(2),"kW")
    break
    
    case 5:
    if(origem==1) resultado=valor/1000000000000
    if(origem==2) resultado=valor/1000000000
    if(origem==3) resultado=valor/1000000
    if(origem==4) resultado=valor/1000
    if(origem==6) resultado=valor*1000
    console.log(resultado.toFixed(2),"MW")
    break
    
    case 6:
    if(origem==1) resultado=valor/1000000000000000
    if(origem==2) resultado=valor/1000000000000
    if(origem==3) resultado=valor/1000000000
    if(origem==4) resultado=valor/1000000
    if(origem==5) resultado=valor/1000
    console.log(resultado.toFixed(2),"GW")
    break
    
    }
    
    break
    
    
    // ---------------- AMPERE ----------------
    
    case 3:
    console.log("Mesma lógica usada para Volt e Watt")
    break
    
    
    // ---------------- OHM ----------------
    
    case 4:
    console.log("Mesma lógica usada para Volt e Watt")
    break
    
    }