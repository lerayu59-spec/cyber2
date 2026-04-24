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
    },
    4: {
        title: "Мошенничество в играх",
        icon: "fa-gamepad",
        colorClass: "games",
        description: "Онлайн-игры — частая мишень для мошенников: кражи игровых аккаунтов, обман при обмене предметами, фишинговые сайты под видом игровых магазинов и вымогательство.",
        protection: [
            "Никогда не передавайте данные аккаунта незнакомцам, даже администраторам игры",
            "Покупайте игровую валюту только на официальных платформах (Steam, App Store, Google Play)",
            "Не переходите по ссылкам на 'бесплатные скины' или 'читы'",
            "Включите двухфакторную аутентификацию в Steam и других игровых сервисах",
            "Проверяйте репутацию игрока перед обменом ценными предметами"
        ],
        example: "Пример: В чате игры незнакомец предлагает обменяться редкими скинами, но просит сначала авторизоваться на 'особом сайте'. Сайт — подделка, ваш логин и пароль уходят мошеннику.",
        checklist: [
            "Я не перехожу по ссылкам из игровых чатов от незнакомцев",
            "Я покупаю игровую валюту только в официальных магазинах",
            "У меня включена двухфакторная аутентификация в Steam",
            "Я не делюсь данными аккаунта ни с кем"
        ],
        quiz: {
            question: "Незнакомец в игре предлагает бесплатный редкий скин за переход по ссылке. Что делать?",
            options: [
                { text: "Перейти по ссылке — бесплатные скины бывают!", correct: false },
                { text: "Не переходить по ссылке и заблокировать пользователя", correct: true },
                { text: "Спросить у друзей, стоит ли переходить", correct: false },
                { text: "Попросить сначала прислать скин, а потом перейти", correct: false }
            ]
        }
    },
    5: {
        title: "Общественный Wi-Fi",
        icon: "fa-wifi",
        colorClass: "wifi",
        description: "Публичные Wi-Fi сети в кафе, торговых центрах и транспорте часто не зашифрованы. Злоумышленники могут перехватывать ваши данные или создавать поддельные точки доступа.",
        protection: [
            "Не вводите пароли и данные банковских карт, подключившись к публичному Wi-Fi",
            "Используйте VPN при подключении к открытым сетям",
            "Убедитесь, что сайт использует HTTPS (замок в адресной строке)",
            "Отключайте Wi-Fi на телефоне, когда он не нужен",
            "Не подключайтесь к сетям без пароля с подозрительными названиями"
        ],
        example: "Пример: В торговом центре вы подключаетесь к Wi-Fi 'FreeShopWifi'. Злоумышленник создал эту точку и видит весь ваш трафик: сообщения, пароли, данные карты при оплате.",
        checklist: [
            "Я не ввожу пароли и данные карт в публичных сетях",
            "Я использую VPN в общественных местах",
            "Я проверяю наличие HTTPS перед вводом данных",
            "Я не подключаюсь к неизвестным открытым сетям автоматически"
        ],
        quiz: {
            question: "Вы в кафе и хотите войти в интернет-банк. Что правильно?",
            options: [
                { text: "Подключиться к бесплатному Wi-Fi кафе и войти в банк", correct: false },
                { text: "Использовать мобильный интернет или VPN", correct: true },
                { text: "Войти в банк только если Wi-Fi называется 'Secure'", correct: false },
                { text: "Попросить у сотрудника кафе пароль от Wi-Fi — это безопаснее", correct: false }
            ]
        }
    },
    6: {
        title: "Мобильные приложения",
        icon: "fa-mobile-alt",
        colorClass: "mobile",
        description: "Вредоносные и недобросовестные приложения могут следить за вами, красть данные, оформлять платные подписки и запрашивать лишние разрешения без вашего ведома.",
        protection: [
            "Устанавливайте приложения только из официальных магазинов (App Store, Google Play)",
            "Проверяйте разрешения: фонарик не должен просить доступ к контактам",
            "Читайте отзывы и проверяйте разработчика перед установкой",
            "Регулярно удаляйте неиспользуемые приложения",
            "Обновляйте приложения — обновления закрывают уязвимости"
        ],
        example: "Пример: Бесплатная игра просит доступ к микрофону, геолокации и контактам. После установки она отправляет ваши данные на сторонние серверы и подписывает на платные услуги.",
        checklist: [
            "Я устанавливаю приложения только из официальных магазинов",
            "Я проверяю разрешения приложений перед установкой",
            "Я регулярно удаляю приложения, которыми не пользуюсь",
            "Мои приложения всегда обновлены до последней версии"
        ],
        quiz: {
            question: "Приложение-фонарик запрашивает доступ к вашим контактам и геолокации. Что делать?",
            options: [
                { text: "Разрешить — разработчику виднее, зачем это нужно", correct: false },
                { text: "Отказать в лишних разрешениях или найти другое приложение", correct: true },
                { text: "Разрешить только геолокацию", correct: false },
                { text: "Установить и не обращать внимания", correct: false }
            ]
        }
    },
    7: {
        title: "Кибербуллинг",
        icon: "fa-comment-slash",
        colorClass: "bullying",
        description: "Кибербуллинг — систематические оскорбления, угрозы, распространение личных данных или унизительного контента в интернете. Может нанести серьёзный психологический вред.",
        protection: [
            "Не отвечайте агрессорам — реакция жертвы часто их провоцирует",
            "Блокируйте и жалуйтесь на обидчиков через инструменты платформы",
            "Сохраняйте скриншоты как доказательства",
            "Расскажите о происходящем взрослому: родителю, учителю или школьному психологу",
            "Не публикуйте личную информацию, которую можно использовать против вас"
        ],
        example: "Пример: Одноклассники создают фейковый аккаунт с вашими фотографиями и пишут от вашего имени оскорбления другим. Это преследование в интернете — сохраняйте доказательства и сообщайте родителям.",
        checklist: [
            "Я не отвечаю на провокации в интернете",
            "Я знаю, как заблокировать человека во всех используемых мной соцсетях",
            "Я не публикую фото и данные других людей без их согласия",
            "Я могу рассказать взрослому, если меня обижают в интернете"
        ],
        quiz: {
            question: "Незнакомец систематически пишет вам оскорбления в соцсети. Что нужно сделать?",
            options: [
                { text: "Оскорбить в ответ — пусть знает!", correct: false },
                { text: "Заблокировать, сохранить скриншоты и рассказать взрослым", correct: true },
                { text: "Удалить свой аккаунт", correct: false },
                { text: "Публично рассказать всем о происходящем", correct: false }
            ]
        }
    },
    8: {
        title: "Вредоносное ПО",
        icon: "fa-virus",
        colorClass: "virus",
        description: "Вирусы, трояны, шпионские программы и вымогатели могут зашифровать ваши файлы, украсть пароли или использовать ваш компьютер для атак на других пользователей.",
        protection: [
            "Установите антивирус и регулярно обновляйте его базы",
            "Не скачивайте программы с подозрительных сайтов — только с официальных",
            "Не открывайте вложения в письмах от незнакомых отправителей",
            "Регулярно создавайте резервные копии важных файлов",
            "Своевременно обновляйте операционную систему и браузер"
        ],
        example: "Пример: Вы скачиваете 'взломанную' игру с торрент-сайта. Вместе с игрой устанавливается программа-шпион, которая записывает все вводимые пароли и отправляет их злоумышленникам.",
        checklist: [
            "На моём устройстве установлен и обновлён антивирус",
            "Я скачиваю программы только с официальных сайтов",
            "Я не открываю файлы из писем от незнакомцев",
            "Я регулярно делаю резервные копии важных данных"
        ],
        quiz: {
            question: "Друг прислал ссылку на 'бесплатный' платный софт. Что делать?",
            options: [
                { text: "Скачать — раз друг прислал, значит безопасно", correct: false },
                { text: "Не скачивать: взломанный софт часто содержит вирусы", correct: true },
                { text: "Скачать и проверить антивирусом после установки", correct: false },
                { text: "Скачать только если сайт выглядит официально", correct: false }
            ]
        }
    }
};

let learnedThreats = new Set();
let completedChecks = 0;
let quizScore = 0;
let totalQuizQuestions = 0;

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.threat-node').forEach(node => {
        node.addEventListener('click', function() {
            const threatId = this.getAttribute('data-id');
            showThreatDetails(threatId);
            learnedThreats.add(threatId);
            updateStats();
        });
    });

    document.getElementById('closeDetails').addEventListener('click', function() {
        document.getElementById('threatDetails').style.display = 'none';
    });

    updateStats();
    drawConnections();
});

function showThreatDetails(threatId) {
    const threat = threatsData[threatId];
    if (!threat) return;

    document.getElementById('threatTitle').textContent = threat.title;
    document.getElementById('threatIcon').className = `threat-icon-large ${threat.colorClass}`;
    document.getElementById('threatIcon').innerHTML = `<i class="fas ${threat.icon}"></i>`;

    document.getElementById('threatDescription').textContent = threat.description;
    document.getElementById('threatExample').textContent = threat.example;

    const protectionList = document.getElementById('threatProtection');
    protectionList.innerHTML = threat.protection.map(item => `<li>${item}</li>`).join('');

    const checklistContainer = document.getElementById('threatChecklist');
    checklistContainer.innerHTML = threat.checklist.map((item, index) => `
        <div class="checklist-item">
            <input type="checkbox" id="check${index}" onchange="updateChecklist()">
            <label for="check${index}">${item}</label>
        </div>
    `).join('');

    document.getElementById('quizQuestion').textContent = threat.quiz.question;

    const quizOptions = document.querySelector('.quiz-options');
    quizOptions.innerHTML = threat.quiz.options.map((option, index) => `
        <button class="quiz-option" data-correct="${option.correct}" onclick="checkAnswer(this, ${option.correct})">
            ${option.text}
        </button>
    `).join('');

    document.getElementById('quizFeedback').style.display = 'none';

    document.getElementById('threatDetails').style.display = 'block';
    document.getElementById('threatDetails').scrollIntoView({ behavior: 'smooth' });
}

function checkAnswer(button, isCorrect) {
    const allOptions = document.querySelectorAll('.quiz-option');
    const feedback = document.getElementById('quizFeedback');

    allOptions.forEach(opt => opt.disabled = true);

    allOptions.forEach(opt => {
        if (opt.getAttribute('data-correct') === 'true') {
            opt.classList.add('correct');
        }
        if (opt === button && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });

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

    setTimeout(() => {
        allOptions.forEach(opt => {
            opt.disabled = false;
            opt.classList.remove('correct', 'incorrect');
        });
        feedback.style.display = 'none';
    }, 3000);
}

function updateChecklist() {
    const checkboxes = document.querySelectorAll('#threatChecklist input[type="checkbox"]:checked');
    completedChecks = checkboxes.length;
    updateStats();
}

function updateStats() {
    document.getElementById('threat-count').textContent = Object.keys(threatsData).length;
    document.getElementById('learnedThreats').textContent = learnedThreats.size;
    document.getElementById('completedChecks').textContent = completedChecks;

    const scorePercentage = totalQuizQuestions > 0 ? Math.round((quizScore / totalQuizQuestions) * 100) : 0;
    document.getElementById('quizScore').textContent = `${scorePercentage}%`;
}

function drawConnections() {
    const connections = document.querySelector('.connections');
    const centerX = 50;
    const centerY = 50;

    const nodes = [
        {x: 20, y: 15},
        {x: 10, y: 40},
        {x: 40, y: 30},
        {x: 30, y: 60},
        {x: 70, y: 20},
        {x: 60, y: 50},
        {x: 50, y: 75},
        {x: 80, y: 65}
    ];

    connections.innerHTML = '';

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

    setTimeout(() => {
        const lines = connections.querySelectorAll('line');
        lines.forEach(line => {
            line.style.transition = 'stroke 0.5s ease';
            line.style.stroke = 'rgba(52, 152, 219, 0.6)';
        });
    }, 500);
}
