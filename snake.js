const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// ������ ����� ������
const gridSize = 20;
const canvasSize = canvas.width / gridSize;

// ��������� ��������� ������
let snake = [{ x: 10, y: 10 }];
let direction = { x: 0, y: 0 }; // ������ �� ��������� � ������
let food = randomFoodPosition();
let score = 0;

// ���������� ������� � ������� ������
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if (direction.y === 0) direction = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (direction.y === 0) direction = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (direction.x === 0) direction = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (direction.x === 0) direction = { x: 1, y: 0 };
            break;
    }
});

// �������� ���� ����
function gameLoop() {
    update();
    draw();
    if (checkGameOver()) {
        alert('���� ��������! ��� ����: ' + score);
        document.location.reload();
    } else {
        setTimeout(gameLoop, 100);
    }
}

// ���������� ������� ������ � ���
function update() {
    // ��������� ������� ������
    const newHead = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    
    // �������� �� �������� ���
    if (newHead.x === food.x && newHead.y === food.y) {
        food = randomFoodPosition(); // ����� ���
        score += 10; // ����������� ����
    } else {
        snake.pop(); // ������� �����
    }

    // ��������� ����� ������ ������
    snake.unshift(newHead);
}

// ��������� ������ � ���
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // ������������ ������
    snake.forEach(segment => {
        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    });

    // ������������ ���
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

// ��������� ��������� ������� ��� ���
function randomFoodPosition() {
    return {
        x: Math.floor(Math.random() * canvasSize),
        y: Math.floor(Math.random() * canvasSize)
    };
}

// �������� �� �������� (���� ������ ������� �� ������� ��� �������� ����)
function checkGameOver() {
    const head = snake[0];

    // �������� ������ �� �������
    if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize) {
        return true;
    }

    // �������� ������������ � ����� ������
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }

    return false;
}

// ������ ����
gameLoop();
