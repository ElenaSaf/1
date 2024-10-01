// Получаем все карточки фильмов
const filmCards = document.querySelectorAll('.film-card');
const popup = document.getElementById('film-popup');
const popupTitle = document.getElementById('popup-title');
const popupInfo = document.getElementById('popup-info');
const closeBtn = document.querySelector('.close');

// Добавляем событие клика для каждой карточки
filmCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.getAttribute('data-title');
        const info = card.getAttribute('data-info');
        
        // Устанавливаем данные во всплывающее окно
        popupTitle.textContent = title;
        popupInfo.textContent = info;
        
        // Показываем всплывающее окно
        popup.style.display = 'flex';
    });
});

// Закрытие всплывающего окна
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Закрытие окна при клике вне его области
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
document.getElementById('submit-quiz').addEventListener('click', function() {
    let score = 0;

    // Получаем выбранные ответы для каждого вопроса
    const answer1 = document.querySelector('input[name="q1"]:checked');
    const answer2 = document.querySelector('input[name="q2"]:checked');
    const answer3 = document.querySelector('input[name="q3"]:checked');

    // Проверяем первый вопрос
    if (answer1 && answer1.value === 'right') {
        score++;
    }

    // Проверяем второй вопрос
    if (answer2 && answer2.value === 'right') {
        score++;
    }

    // Проверяем третий вопрос
    if (answer3 && answer3.value === 'right') {
        score++;
    }

    // Если не был выбран ответ, предупреждаем пользователя
    if (!answer1 || !answer2 || !answer3) {
        alert('Пожалуйста, ответьте на все вопросы.');
        return;
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
