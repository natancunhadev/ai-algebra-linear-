// graficotrid.js

const fs = require('fs');

function gerarGrafico3D(inputs, weights) {

    const html = `
    <html>
    <head>
        <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    </head>
    <body>
        <div id="grafico" style="width:100%;height:100vh;"></div>

        <script>

            const inputs = {
                x: [0, ${inputs[0]}],
                y: [0, ${inputs[1]}],
                z: [0, ${inputs[2]}],
                mode: 'lines+markers',
                type: 'scatter3d',
                name: 'Vetor Inputs',
                line: { width: 6 }
            };

            const weights = {
                x: [0, ${weights[0]}],
                y: [0, ${weights[1]}],
                z: [0, ${weights[2]}],
                mode: 'lines+markers',
                type: 'scatter3d',
                name: 'Vetor Weights',
                line: { width: 6 }
            };

            const data = [inputs, weights];

            const layout = {
                title: 'Visualização 3D - Álgebra Linear em IA',
                scene: {
                    xaxis: { title: 'X' },
                    yaxis: { title: 'Y' },
                    zaxis: { title: 'Z' }
                }
            };

            Plotly.newPlot('grafico', data, layout);

        </script>
    </body>
    </html>
    `;

    fs.writeFileSync('public/grafico.html', html);

    console.log("Gráfico 3D gerado em: public/grafico.html");
}

module.exports = { gerarGrafico3D };