# calculadora-eletrica
Calculadora elétrica
# 🔌 Calculadora de Consumo de Energia

Este é um projeto simples em **JavaScript** que calcula o **consumo mensal de energia elétrica** de um aparelho eletrônico e o **custo estimado ao final do mês**.

O usuário informa o nome do aparelho, a potência e o tempo de uso diário. O programa então calcula o consumo em **kWh** e o custo com base em uma tarifa estimada.

## 📋 Funcionalidades

- Informar o **nome do aparelho eletrônico**
- Escolher a unidade de potência:
  - Watt (W)
  - Quilowatt (kW)
- Informar o **tempo de uso diário em horas**
- Calcular:
  - Consumo diário
  - Consumo mensal
  - Custo diário
  - Custo mensal

## ⚙️ Como funciona

A fórmula utilizada para calcular o consumo é:

Consumo (kWh) = Potência (W) × Tempo de uso (h) ÷ 1000

Se o aparelho já estiver em **kW**, não é necessário dividir por 1000.

O custo é calculado usando uma tarifa estimada de:

R$ 0,90 por kWh
