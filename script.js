let progress = 0;

function checkAnswer(questionNumber, answer) {
    const resultElement = document.getElementById('result');
    const correctAnswers = {
        1: 'Rotor',
        2: 'Anemómetro'
    };

    if (answer === correctAnswers[questionNumber]) {
        resultElement.textContent = `¡Correcto!`;
        resultElement.style.color = 'green';
        updateProgress(50); // Progreso aumenta en 50% por cada respuesta correcta

        if (questionNumber === 1) {
            document.getElementById('quiz-container').style.display = 'none';
            document.getElementById('quiz-container-2').style.display = 'block';
        } else {
            resultElement.textContent += " Has completado el quiz.";
        }
    } else {
        resultElement.textContent = 'Incorrecto, intenta de nuevo.';
        resultElement.style.color = 'red';
    }
}

function updateProgress(amount) {
    progress += amount;
    const progressBarFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');

    progressBarFill.style.width = progress + '%';
    progressText.textContent = progress + '% Completado';
}
