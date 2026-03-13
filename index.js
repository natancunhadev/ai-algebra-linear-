// Vetor de entradas
const inputs = [1, 2, 3];

// Vetor de pesos
const weights = [0.5, 0.2, 0.8];

// Produto escalar
function dotProduct(inputs, weights) {

    let sum = 0;

    for (let i = 0; i < inputs.length; i++) {

        sum += inputs[i] * weights[i];

    }

    return sum;

}

// Função de ativação ReLU
function relu(x) {

    return Math.max(0, x);

}

// Execução do neurônio
const result = dotProduct(inputs, weights);

const output = relu(result);

console.log("Resultado linear:", result);

console.log("Saída após ativação:", output);