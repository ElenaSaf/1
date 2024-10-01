// �������� ��� �������� �������
const filmCards = document.querySelectorAll('.film-card');
const popup = document.getElementById('film-popup');
const popupTitle = document.getElementById('popup-title');
const popupInfo = document.getElementById('popup-info');
const closeBtn = document.querySelector('.close');

// ��������� ������� ����� ��� ������ ��������
filmCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.getAttribute('data-title');
        const info = card.getAttribute('data-info');
        
        // ������������� ������ �� ����������� ����
        popupTitle.textContent = title;
        popupInfo.textContent = info;
        
        // ���������� ����������� ����
        popup.style.display = 'flex';
    });
});

// �������� ������������ ����
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// �������� ���� ��� ����� ��� ��� �������
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
document.getElementById('submit-quiz').addEventListener('click', function() {
    let score = 0;

    // �������� ��������� ������ ��� ������� �������
    const answer1 = document.querySelector('input[name="q1"]:checked');
    const answer2 = document.querySelector('input[name="q2"]:checked');
    const answer3 = document.querySelector('input[name="q3"]:checked');

    // ��������� ������ ������
    if (answer1 && answer1.value === 'right') {
        score++;
    }

    // ��������� ������ ������
    if (answer2 && answer2.value === 'right') {
        score++;
    }

    // ��������� ������ ������
    if (answer3 && answer3.value === 'right') {
        score++;
    }

    // ���� �� ��� ������ �����, ������������� ������������
    if (!answer1 || !answer2 || !answer3) {
        alert('����������, �������� �� ��� �������.');
        return;
    }

    // ����� ����������
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.textContent = `�� ��������� �������� �� ${score} �� 3 ��������!`;

    // ��������� ����� � ����������� �� ����������
    if (score === 3) {
        resultDiv.style.color = 'green';
    } else if (score === 2) {
        resultDiv.style.color = 'yellow';
    } else {
        resultDiv.style.color = 'red';
    }
});
