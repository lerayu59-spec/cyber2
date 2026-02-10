// Данные об угрозах
const threatsData = {
    1: {
        title: "Фишинг",
        icon: "fa-fish",
        colorClass: "phishing",
        description: "Фишинг - это вид интернет-мошенничества, когда злоумышленники притворяются законными организациями, чтобы выманить ваши личные данные: пароли, данные банковских карт, паспортные данные.",
        protection: [
            "Никогда не переходите по подозрительным ссылкам в письмах и сообщениях",
            "Проверяйте адрес сайта в адресной строке браузера",
            "Не вводите пароли на сайтах, пришедших по ссылке из email или сообщения",
            "Включайте двухфакторную аутентификацию везде, где это возможно"
        ],
        example: "Пример: Вы получаете письмо якобы от 'Сбербанка' с темой 'Ваш аккаунт заблокирован'. В письме просят перейти по ссылке и ввести данные карты для 'разблокировки'. Настоящий банк никогда не просит этого делать по email.",
        checklist: [
            "Я проверяю отправителя перед переходом по ссылкам",
            "Я не передаю пароли и данные карт по email/сообщениям",
            "Я включаю двухфакторную аутентификацию в важных сервисах"
        ],
        quiz: {
            question: "Что нужно сделать, получив письмо о блокировке аккаунта с просьбой перейти по ссылке?",
            options: [
                { text: "Сразу перейти по ссылке и ввести данные", correct: false },
                { text: "Открыть официальный сайт напрямую и проверить статус аккаунта", correct: true },
                { text: "Переслать письмо другу", correct: false },
                { text: "Игнорировать письмо", correct: false }
            ]
        }
    },
    2: {
        title: "Слабые пароли",
        icon: "fa-key",
        colorClass: "password",
        description: "Использование простых, коротких паролей или одного пароля для всех сервисов - одна из самых распространенных ошибок, приводящих к взлому аккаунтов.",
        protection: [
            "Используйте пароли длиной не менее 12 символов",
            "Включайте в пароли буквы (заглавные и строчные), цифры и специальные символы",
            "Используйте разные пароли для разных сервисов",
            "Рассмотрите использование менеджера паролей (Bitwarden, KeePass)",
            "Включите двухфакторную аутентификацию"
        ],
        example: "Пароль '123456' или 'password' взламывается за секунды. Даже пароль 'qwerty123' ненадежен. Хороший пароль: 'M0sc0w-Sch00l-2024!' или 'BlueDragon#42@Winter'.",
        checklist: [
            "Мои пароли длиннее 10 символов",
            "Я использую разные пароли для разных сайтов",
            "Я не использую в паролях личную информацию (дата рождения, имя)",
            "Я обновляю важные пароли раз в полгода"
        ],
        quiz: {
            question: "Какой пароль наиболее безопасен?",
            options: [
                { text: "12345678", correct: false },
                { text: "пароль123", correct: false },
                { text: "M0sc0w-2024-Secure!", correct: true },
                { text: "qwertyuiop", correct: false }
            ]
        }
    },
    3: {
        title: "Опасности в социальных сетях",
        icon: "fa-share-alt",
        colorClass: "social",
        description: "Социальные сети - не только место для общения, но и источник угроз: кража личных данных, кибербуллинг, мошенничество, фишинг.",
        protection: [
            "Настройте приватность профиля: ограничьте доступ к вашей информации",
            "Не публикуйте личную информацию: адрес, телефон, расписание",
            "Не добавляйте в друзья незнакомых людей",
            "Будьте осторожны с сообщениями от 'друзей' с просьбой перевести деньги",
            "Регулярно проверяйте активность своего аккаунта"
        ],
        example: "Пример: ВКонтакте появляется фейковая страница вашего друга, которая просит срочно перевести деньги 'на лечение'. Всегда звоните или пишите другу в другом мессенджере, чтобы подтвердить просьбу.",
        checklist: [
            "Мой профиль в соцсетях настроен как 'только для друзей'",
            "Я не публикую геолокацию в реальном времени",
            "Я не отвечаю на сообщения от незнакомцев",
            "Я регулярно проверяю список активных сессий"
        ],
        quiz: {
            question: "Что делать, если друг в соцсети просит срочно перевести деньги?",
            options: [
                { text: "Сразу перевести, друг ведь просит", correct: false },
                { text: "Позвонить или написать в другом мессенджере для подтверждения", correct: true },
                { text: "Проигнорировать сообщение", correct: false },
                { text: "Пожаловаться на страницу друга", correct: false }
            ]
        }
    }
    // Остальные угрозы можно добавить аналогично
};

// Глобальные переменные для статистики
let learnedThreats = new Set();
let completedChecks = 0;
let quizScore = 0;
let totalQuizQuestions = 0;

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Обработчики для узлов угроз
    document.querySelectorAll('.threat-node').forEach(node => {
        node.addEventListener('click', function() {
            const threatId = this.getAttribute('data-id');
            showThreatDetails(threatId);
            learnedThreats.add(threatId);
            updateStats();
        });
    });

    // Обработчик закрытия деталей
    document.getElementById('closeDetails').addEventListener('click', function() {
        document.getElementById('threatDetails').style.display = 'none';
    });

    // Инициализация статистики
    updateStats();

    // Создание соединительных линий
    drawConnections();
});

// Показать детали угрозы
function showThreatDetails(threatId) {
    const threat = threatsData[threatId];
    if (!threat) return;

    // Обновление заголовка и иконки
    document.getElementById('threatTitle').textContent = threat.title;
    document.getElementById('threatIcon').className = `threat-icon-large ${threat.colorClass}`;
    document.getElementById('threatIcon').innerHTML = `<i class="fas ${threat.icon}"></i>`;

    // Обновление описания
    document.getElementById('threatDescription').textContent = threat.description;
    document.getElementById('threatExample').textContent = threat.example;

    // Обновление способов защиты
    const protectionList = document.getElementById('threatProtection');
    protectionList.innerHTML = threat.protection.map(item => `<li>${item}</li>`).join('');

    // Обновление чек-листа
    const checklistContainer = document.getElementById('threatChecklist');
    checklistContainer.innerHTML = threat.checklist.map((item, index) => `
        <div class="checklist-item">
            <input type="checkbox" id="check${index}" onchange="updateChecklist()">
            <label for="check${index}">${item}</label>
        </div>
    `).join('');

    // Обновление теста
    document.getElementById('quizQuestion').textContent = threat.quiz.question;

    const quizOptions = document.querySelector('.quiz-options');
    quizOptions.innerHTML = threat.quiz.options.map((option, index) => `
        <button class="quiz-option" data-correct="${option.correct}" onclick="checkAnswer(this, ${option.correct})">
            ${option.text}
        </button>
    `).join('');

    document.getElementById('quizFeedback').style.display = 'none';

    // Показываем панель деталей
    document.
    getElementById('threatDetails').style.display = 'block';

    // Прокручиваем к деталям
    document.getElementById('threatDetails').scrollIntoView({ behavior: 'smooth' });
}

// Проверка ответа в тесте
function checkAnswer(button, isCorrect) {
    const allOptions = document.querySelectorAll('.quiz-option');
    const feedback = document.getElementById('quizFeedback');

    // Отключаем все кнопки
    allOptions.forEach(opt => opt.disabled = true);

    // Подсвечиваем правильные/неправильные ответы
    allOptions.forEach(opt => {
        if (opt.getAttribute('data-correct') === 'true') {
            opt.classList.add('correct');
        }
        if (opt === button && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });

    // Показываем обратную связь
    if (isCorrect) {
        feedback.textContent = "✅ Верно! Отличный ответ!";
        feedback.style.backgroundColor = '#d4edda';
        feedback.style.color = '#155724';
        quizScore++;
    } else {
        feedback.textContent = "❌ Неверно. Попробуйте изучить материал еще раз.";
        feedback.style.backgroundColor = '#f8d7da';
        feedback.style.color = '#721c24';
    }

    totalQuizQuestions++;
    feedback.style.display = 'block';
    updateStats();

    // Через 3 секунды сбрасываем тест
    setTimeout(() => {
        allOptions.forEach(opt => {
            opt.disabled = false;
            opt.classList.remove('correct', 'incorrect');
        });
        feedback.style.display = 'none';
    }, 3000);
}

// Обновление чек-листа
function updateChecklist() {
    const checkboxes = document.querySelectorAll('#threatChecklist input[type="checkbox"]:checked');
    completedChecks = checkboxes.length;
    updateStats();
}

// Обновление статистики
function updateStats() {
    document.getElementById('threat-count').textContent = Object.keys(threatsData).length;
    document.getElementById('learnedThreats').textContent = learnedThreats.size;
    document.getElementById('completedChecks').textContent = completedChecks;

    const scorePercentage = totalQuizQuestions > 0 ? Math.round((quizScore / totalQuizQuestions) * 100) : 0;
    document.getElementById('quizScore').textContent = `${scorePercentage}%`;
}

// Рисование соединительных линий
function drawConnections() {
    const connections = document.querySelector('.connections');
    const centerX = 50; // Процент от ширины
    const centerY = 50; // Процент от высоты

    // Координаты узлов (примерные)
    const nodes = [
        {x: 20, y: 15},  // Фишинг
        {x: 10, y: 40},  // Пароли
        {x: 40, y: 30},  // Соцсети
        {x: 30, y: 60},  // Игры
        {x: 70, y: 20},  // Wi-Fi
        {x: 60, y: 50},  // Мобильные
        {x: 50, y: 75},  // Буллинг
        {x: 80, y: 65}   // Вирусы
    ];

    // Очищаем предыдущие линии
    connections.innerHTML = '';

    // Рисуем линии от центра к каждому узлу
    nodes.forEach((node, index) => {
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', `${centerX}%`);
        line.setAttribute('y1', `${centerY}%`);
        line.setAttribute('x2', `${node.x}%`);
        line.setAttribute('y2', `${node.y}%`);
        line.setAttribute('stroke', 'rgba(52, 152, 219, 0.3)');
        line.setAttribute('stroke-width', '2');
        line.setAttribute('stroke-dasharray', '5,5');
        connections.appendChild(line);
    });

    // Добавляем анимацию
    setTimeout(() => {
        const lines = connections.querySelectorAll('line');
        lines.forEach(line => {
            line.style.transition = 'stroke 0.5s ease';
            line.style.stroke = 'rgba(52, 152, 219, 0.6)';
        });
    }, 500);
}
