document.getElementById('submit-quiz').addEventListener('click', function() {
    let score = 0;

    // �������� ��������� ������ ��� ������� �������
    const answer1 = document.querySelector('input[name="q1"]:checked');
    const answer2 = document.querySelector('input[name="q2"]:checked');
    const answer3 = document.querySelector('input[name="q3"]:checked');

    // �������� �� ������� ��������� �������
    if (!answer1 || !answer2 || !answer3) {
        alert('����������, �������� �� ��� �������.');
        return;
    }

    // ��������� ������
    if (answer1.value === 'right') {
        score++;
    }
    if (answer2.value === 'right') {
        score++;
    }
    if (answer3.value === 'right') {
        score++;
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
