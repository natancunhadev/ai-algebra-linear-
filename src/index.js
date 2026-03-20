// ===============================
// VETORES DE ENTRADA E PESOS
// ===============================

const inputs = [1, 2, 3];
const weights = [0.5, 0.2, 0.8];


// ===============================
// PRODUTO ESCALAR
// ===============================

function dotProduct(a, b) {
    let sum = 0;

    for (let i = 0; i < a.length; i++) {
        sum += a[i] * b[i];
    }

    return sum;
}


// ===============================
// MAGNITUDE (NORMA DO VETOR)
// ===============================

function magnitude(vector) {
    let sum = 0;

    for (let i = 0; i < vector.length; i++) {
        sum += vector[i] ** 2;
    }

    return Math.sqrt(sum);
}


// ===============================
// SIMILARIDADE DO COSSENO
// ===============================

function cosineSimilarity(a, b) {
    const dot = dotProduct(a, b);
    const magA = magnitude(a);
    const magB = magnitude(b);

    return dot / (magA * magB);
}


// ===============================
// ÂNGULO ENTRE VETORES
// ===============================

function angleBetween(a, b) {
    const cosTheta = cosineSimilarity(a, b);
    return Math.acos(cosTheta); // radianos
}


// ===============================
// NORMALIZAÇÃO DE VETORES
// ===============================

function normalize(vector) {
    const mag = magnitude(vector);
    return vector.map(v => v / mag);
}


// ===============================
// FUNÇÃO DE ATIVAÇÃO (ReLU)
// ===============================

function relu(x) {
    return Math.max(0, x);
}


// ===============================
// EXECUÇÃO DO NEURÔNIO CLÁSSICO
// ===============================

const linearResult = dotProduct(inputs, weights);
const activatedOutput = relu(linearResult);


// ===============================
// EXECUÇÃO DO NEURÔNIO GEOMÉTRICO
// ===============================

const similarity = cosineSimilarity(inputs, weights);
const angle = angleBetween(inputs, weights);

const normInputs = normalize(inputs);
const normWeights = normalize(weights);

const geometricOutput = dotProduct(normInputs, normWeights);



// ===============================
// logs (results)
// ===============================

console.log("===== NEURÔNIO CLÁSSICO =====");
console.log("Produto escalar:", linearResult);
console.log("Saída com ReLU:", activatedOutput);

console.log("\n===== ANÁLISE GEOMÉTRICA =====");
console.log("Similaridade (cosθ):", similarity);
console.log("Ângulo (rad):", angle);
console.log("Ângulo (graus):", angle * (180 / Math.PI));

console.log("\n===== NEURÔNIO GEOMÉTRICO =====");
console.log("Saída (vetores normalizados):", geometricOutput);

