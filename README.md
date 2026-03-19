# Álgebra Linear - Inteligência Artificial  
### Uma Interpretação Geométrica da Computação Neural em JavaScript

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Node.js](https://img.shields.io/badge/Node.js-runtime-green)
![Math](https://img.shields.io/badge/Álgebra%20Linear-core-blue)
![Status](https://img.shields.io/badge/status-orientado%20à%20pesquisa-black)

---

## Visão Geral

Este projeto demonstra a **base matemática das redes neurais artificiais**  
por meio de uma implementação rigorosa de conceitos de álgebra linear utilizando JavaScript.

Em vez de tratar redes neurais como caixas-pretas, este repositório expõe
seu mecanismo fundamental:

> Um neurônio é, essencialmente, um **operador geométrico** que mede o alinhamento entre vetores.

---

## Fundamento Matemático

Um neurônio computa:
y = w₁x₁ + w₂x₂ + ... + wₙxₙ


Isso é equivalente ao **produto escalar**:
y = x · w

---

## Interpretação Geométrica

y = ||x|| · ||w|| · cos(θ)


Onde:

- `||x||` → magnitude do vetor de entrada  
- `||w||` → magnitude do vetor de pesos  
- `θ` → ângulo entre os vetores  

---

## Insight Principal

> Redes neurais não "aprendem números" —  
> elas aprendem **direções em espaços de alta dimensão**.

---

## Conceitos Implementados

- Representação vetorial com arrays em JavaScript  
- Produto escalar (combinação linear)  
- Magnitude (norma Euclidiana)  
- Similaridade do cosseno  
- Cálculo do ângulo entre vetores  
- Normalização vetorial  
- Função de ativação ReLU  

---

## Execução

```bash
node src/index.js

===== NEURÔNIO CLÁSSICO =====
Produto escalar: 3.3
Saída com ReLU: 3.3

===== ANÁLISE GEOMÉTRICA =====
Similaridade (cosθ): 0.98
Ângulo (graus): ~11°

===== NEURÔNIO GEOMÉTRICO =====
Saída: 0.98

---

Perspectiva Científica:

Esta implementação evidencia que:

Um neurônio realiza uma projeção em espaço vetorial

Funções de ativação introduzem não linearidade no modelo

O aprendizado corresponde à otimização de alinhamento entre vetores.




Autor

Natan de Souza Cunha
Engenharia de Software | Pesquisador