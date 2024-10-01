document.getElementById('submit-quiz').addEventListener('click', function() {
    let score = 0;

    // Получаем выбранные ответы для каждого вопроса
    const answer1 = document.querySelector('input[name="q1"]:checked');
    const answer2 = document.querySelector('input[name="q2"]:checked');
    const answer3 = document.querySelector('input[name="q3"]:checked');

    // Проверка на наличие выбранных ответов
    if (!answer1 || !answer2 || !answer3) {
        alert('Пожалуйста, ответьте на все вопросы.');
        return;
    }

    // Проверяем ответы
    if (answer1.value === 'right') {
        score++;
    }
    if (answer2.value === 'right') {
        score++;
    }
    if (answer3.value === 'right') {
        score++;
    }

    // Показ результата
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.textContent = `Вы правильно ответили на ${score} из 3 вопросов!`;

    // Изменение цвета в зависимости от результата
    if (score === 3) {
        resultDiv.style.color = 'green';
    } else if (score === 2) {
        resultDiv.style.color = 'yellow';
    } else {
        resultDiv.style.color = 'red';
    }
});
