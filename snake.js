const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Размер одной клетки
const gridSize = 20;
const canvasSize = canvas.width / gridSize;

// Начальные параметры змейки
let snake = [{ x: 10, y: 10 }];
let direction = { x: 0, y: 0 }; // Змейка не двигается в начале
let food = randomFoodPosition();
let score = 0;

// Управление змейкой с помощью клавиш
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

// Основной цикл игры
function gameLoop() {
    update();
    draw();
    if (checkGameOver()) {
        alert('Игра окончена! Ваш счет: ' + score);
        document.location.reload();
    } else {
        setTimeout(gameLoop, 100);
    }
}

// Обновление позиции змейки и еды
function update() {
    // Обновляем позицию змейки
    const newHead = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    
    // Проверка на поедание еды
    if (newHead.x === food.x && newHead.y === food.y) {
        food = randomFoodPosition(); // Новая еда
        score += 10; // Увеличиваем счет
    } else {
        snake.pop(); // Удаляем хвост
    }

    // Добавляем новую голову змейки
    snake.unshift(newHead);
}

// Отрисовка змейки и еды
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Отрисовываем змейку
    snake.forEach(segment => {
        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    });

    // Отрисовываем еду
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

// Генерация случайной позиции для еды
function randomFoodPosition() {
    return {
        x: Math.floor(Math.random() * canvasSize),
        y: Math.floor(Math.random() * canvasSize)
    };
}

// Проверка на проигрыш (если змейка выходит за границы или касается себя)
function checkGameOver() {
    const head = snake[0];

    // Проверка выхода за границы
    if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize) {
        return true;
    }

    // Проверка столкновения с телом змейки
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }

    return false;
}

// Запуск игры
gameLoop();
