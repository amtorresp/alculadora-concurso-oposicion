function calcular() {
    const correctas = parseInt(document.getElementById('correctas').value) || 0;
    const incorrectas = parseInt(document.getElementById('incorrectas').value) || 0;
    const blanco = parseInt(document.getElementById('blanco').value) || 0;

    const TOTAL_PREGUNTAS = 100;
    const PENALIZACION = 1 / 3;

    if (correctas + incorrectas + blanco > TOTAL_PREGUNTAS) {
        document.getElementById('resultado').innerText = 
            `El total de preguntas no puede superar ${TOTAL_PREGUNTAS}.`;
        return;
    }

    const puntuacionExamen = correctas - (incorrectas * PENALIZACION);

    document.getElementById('resultado').innerText = 
        `Puntuación del examen: ${puntuacionExamen.toFixed(2)} puntos.`;
}
