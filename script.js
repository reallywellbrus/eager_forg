/* ===== ДАННЫЕ ===== */

const LEVEL_FROG_COLORS = {
  1: [
    { name: 'Зелёная',        color: '#4CAF50' },
    { name: 'Салатовая',      color: '#8BC34A' },
    { name: 'Изумрудная',     color: '#009688' },
    { name: 'Тёмно-зелёная',  color: '#2E7D32' },
    { name: 'Болотная',       color: '#689F38' },
    { name: 'Оливковая',      color: '#827717' },
  ],
  2: [
    { name: 'Голубая',        color: '#2196F3' },
    { name: 'Бирюзовая',      color: '#00BCD4' },
    { name: 'Синяя',          color: '#3F51B5' },
    { name: 'Небесная',       color: '#03A9F4' },
    { name: 'Морская',        color: '#006064' },
    { name: 'Индиго',         color: '#303F9F' },
  ],
  3: [
    { name: 'Оранжевая',      color: '#FF9800' },
    { name: 'Красная',        color: '#F44336' },
    { name: 'Жёлтая',         color: '#FDD835' },
    { name: 'Коралловая',     color: '#FF7043' },
    { name: 'Золотая',        color: '#FFC107' },
    { name: 'Терракотовая',   color: '#E64A19' },
  ],
  4: [
    { name: 'Фиолетовая',     color: '#9C27B0' },
    { name: 'Розовая',        color: '#E91E63' },
    { name: 'Пурпурная',      color: '#7B1FA2' },
    { name: 'Малиновая',      color: '#C2185B' },
    { name: 'Бронзовая',      color: '#795548' },
    { name: 'Серебряная',     color: '#9E9E9E' },
    { name: 'Золотая',        color: '#FFD700' },
    { name: 'Изумрудная',     color: '#00695C' },
  ],
};

function getLevelFrogColor(level, index) {
  const palette = LEVEL_FROG_COLORS[level];
  return palette[index % palette.length];
}

const LEVELS = {
  1: { name: 'Признаки от 1 до 10',   divisors: [1,2,3,4,5,6,7,8,9,10] },
  2: { name: 'Признаки от 10 до 20',  divisors: [10,11,12,13,14,15,16,17,18,19,20] },
  3: { name: 'Остальные признаки',    divisors: [21,23,25,27,29,31,32,37] },
  4: { name: 'Все признаки',          divisors: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37] }
};

const RULES = {
  1: { title: 'Признак делимости на 1', text: 'Любое натуральное число делится на 1.', example: 'Например, 7 делится на 1, 100 делится на 1, и вообще любое число.' },
  2: { title: 'Признак делимости на 2', text: 'Число делится на 2, если его последняя цифра чётная: 0, 2, 4, 6 или 8.', example: 'Например, 34 делится на 2 (последняя цифра 4), а 35 — нет (последняя цифра 5).' },
  3: { title: 'Признак делимости на 3', text: 'Число делится на 3, если сумма его цифр делится на 3.', example: 'Например, 123: 1+2+3=6, а 6 делится на 3, значит 123 делится на 3. А 124: 1+2+4=7, 7 не делится на 3.' },
  4: { title: 'Признак делимости на 4', text: 'Число делится на 4, если две его последние цифры образуют число, делящееся на 4.', example: 'Например, 1316: последние две цифры — 16, 16 делится на 4, значит 1316 делится на 4. А 1318: 18 не делится на 4.' },
  5: { title: 'Признак делимости на 5', text: 'Число делится на 5, если его последняя цифра — 0 или 5.', example: 'Например, 45 делится на 5, а 47 — нет.' },
  6: { title: 'Признак делимости на 6', text: 'Число делится на 6, если оно делится и на 2, и на 3.', example: 'Например, 48: чётное и 4+8=12 делится на 3, значит 48 делится на 6. А 50: чётное, но 5+0=5 не делится на 3, значит 50 не делится на 6.' },
  7: { title: 'Признак делимости на 7', text: 'Отбросьте последнюю цифру и вычтите из оставшегося числа удвоенную последнюю цифру. Повторяйте, пока не станет удобно проверить.', example: 'Например, 1001: 100 − 2·1 = 98; 9 − 2·8 = −7. −7 делится на 7, значит 1001 делится на 7.' },
  8: { title: 'Признак делимости на 8', text: 'Число делится на 8, если три его последние цифры образуют число, делящееся на 8.', example: 'Например, 1512: последние три цифры — 512, 512 : 8 = 64, значит 1512 делится на 8. А 1514: 514 не делится на 8.' },
  9: { title: 'Признак делимости на 9', text: 'Число делится на 9, если сумма его цифр делится на 9.', example: 'Например, 729: 7+2+9=18, 18 делится на 9, значит 729 делится на 9.' },
  10: { title: 'Признак делимости на 10', text: 'Число делится на 10, если его последняя цифра — 0.', example: 'Например, 120 делится на 10, а 125 — нет.' },
  11: { title: 'Признак делимости на 11', text: 'Сложите цифры на нечётных местах (слева направо) и вычтите сумму цифр на чётных местах. Если результат делится на 11, то и число делится на 11.', example: 'Например, 918082: нечётные места — 9, 8, 8 (сумма 25); чётные — 1, 0, 2 (сумма 3); 25 − 3 = 22, делится на 11, значит 918082 делится на 11.' },
  12: { title: 'Признак делимости на 12', text: 'Число делится на 12, если оно делится и на 3, и на 4.', example: 'Например, 144: 1+4+4=9 (делится на 3), 44 делится на 4, значит 144 делится на 12.' },
  13: { title: 'Признак делимости на 13', text: 'Отбросьте последнюю цифру и прибавьте к оставшемуся числу учетверённую последнюю цифру. Повторяйте, пока не станет удобно.', example: 'Например, 1001: 100 + 4·1 = 104; 10 + 4·4 = 26; 26 делится на 13, значит 1001 делится на 13.' },
  14: { title: 'Признак делимости на 14', text: 'Число делится на 14, если оно делится и на 2, и на 7.', example: 'Например, 56: чётное и 56 : 7 = 8, значит 56 делится на 14.' },
  15: { title: 'Признак делимости на 15', text: 'Число делится на 15, если оно делится и на 3, и на 5.', example: 'Например, 45: 4+5=9 (делится на 3), последняя цифра 5 (делится на 5), значит 45 делится на 15.' },
  16: { title: 'Признак делимости на 16', text: 'Число делится на 16, если четыре его последние цифры образуют число, делящееся на 16.', example: 'Например, 32768: последние четыре цифры — 2768, 2768 : 16 = 173, значит 32768 делится на 16.' },
  17: { title: 'Признак делимости на 17', text: 'Отбросьте последнюю цифру и вычтите из оставшегося числа 5·(последняя цифра). Повторяйте.', example: 'Например, 1003: 100 − 5·3 = 85; 8 − 5·5 = −17. −17 делится на 17, значит 1003 делится на 17.' },
  18: { title: 'Признак делимости на 18', text: 'Число делится на 18, если оно делится и на 2, и на 9.', example: 'Например, 342: чётное и 3+4+2=9 (делится на 9), значит 342 делится на 18.' },
  19: { title: 'Признак делимости на 19', text: 'Отбросьте последнюю цифру и прибавьте к оставшемуся числу 2·(последняя цифра). Повторяйте.', example: 'Например, 1007: 100 + 2·7 = 114; 11 + 2·4 = 19; 19 делится на 19, значит 1007 делится на 19.' },
  20: { title: 'Признак делимости на 20', text: 'Число делится на 20, если две его последние цифры — 00, 20, 40, 60 или 80.', example: 'Например, 140 делится на 20, а 145 — нет.' },
  21: { title: 'Признак делимости на 21', text: 'Число делится на 21, если оно делится и на 3, и на 7.', example: 'Например, 84: 8+4=12 (делится на 3), 84 : 7 = 12, значит 84 делится на 21.' },
  22: { title: 'Признак делимости на 22', text: 'Число делится на 22, если оно делится и на 2, и на 11.', example: 'Например, 132: чётное, 1−3+2=0 (делится на 11), значит 132 делится на 22.' },
  23: { title: 'Признак делимости на 23', text: 'Отбросьте последнюю цифру и прибавьте к оставшемуся числу 7·(последняя цифра). Повторяйте.', example: 'Например, 989: 98 + 7·9 = 161; 16 + 7·1 = 23; 23 делится на 23, значит 989 делится на 23.' },
  24: { title: 'Признак делимости на 24', text: 'Число делится на 24, если оно делится и на 3, и на 8.', example: 'Например, 312: 3+1+2=6 (делится на 3), 312 : 8 = 39 (делится на 8), значит 312 делится на 24.' },
  25: { title: 'Признак делимости на 25', text: 'Число делится на 25, если две его последние цифры — 00, 25, 50 или 75.', example: 'Например, 175 делится на 25, а 180 — нет.' },
  26: { title: 'Признак делимости на 26', text: 'Число делится на 26, если оно делится и на 2, и на 13.', example: 'Например, 104: чётное и 104 : 13 = 8, значит 104 делится на 26.' },
  27: { title: 'Признак делимости на 27', text: 'Разбейте число на группы по 3 цифры справа и сложите их. Если сумма делится на 27, то и число делится на 27.', example: 'Например, 13527: 13 + 527 = 540; 540 : 27 = 20, значит 13527 делится на 27.' },
  28: { title: 'Признак делимости на 28', text: 'Число делится на 28, если оно делится и на 4, и на 7.', example: 'Например, 140: 40 делится на 4, 140 : 7 = 20, значит 140 делится на 28.' },
  29: { title: 'Признак делимости на 29', text: 'Отбросьте последнюю цифру и прибавьте к оставшемуся числу 3·(последняя цифра). Повторяйте.', example: 'Например, 1015: 101 + 3·5 = 116; 11 + 3·6 = 29; 29 делится на 29, значит 1015 делится на 29.' },
  30: { title: 'Признак делимости на 30', text: 'Число делится на 30, если оно делится на 2, на 3 и на 5.', example: 'Например, 120: чётное, 1+2+0=3 (делится на 3), последняя цифра 0 (делится на 5), значит 120 делится на 30.' },
  31: { title: 'Признак делимости на 31', text: 'Отбросьте последнюю цифру и вычтите из оставшегося числа 3·(последняя цифра). Повторяйте.', example: 'Например, 1023: 102 − 3·3 = 93; 9 − 3·3 = 0; 0 делится на 31, значит 1023 делится на 31.' },
  32: { title: 'Признак делимости на 32', text: 'Число делится на 32, если пять его последних цифр образуют число, делящееся на 32.', example: 'Например, 100064: последние пять цифр — 00064, 64 делится на 32, значит 100064 делится на 32.' },
  33: { title: 'Признак делимости на 33', text: 'Число делится на 33, если оно делится и на 3, и на 11.', example: 'Например, 132: 1+3+2=6 (делится на 3), 1−3+2=0 (делится на 11), значит 132 делится на 33.' },
  34: { title: 'Признак делимости на 34', text: 'Число делится на 34, если оно делится и на 2, и на 17.', example: 'Например, 102: чётное и 102 : 17 = 6, значит 102 делится на 34.' },
  35: { title: 'Признак делимости на 35', text: 'Число делится на 35, если оно делится и на 5, и на 7.', example: 'Например, 140: последняя цифра 0 (делится на 5), 140 : 7 = 20, значит 140 делится на 35.' },
  36: { title: 'Признак делимости на 36', text: 'Число делится на 36, если оно делится и на 4, и на 9.', example: 'Например, 144: 44 делится на 4, 1+4+4=9 (делится на 9), значит 144 делится на 36.' },
  37: { title: 'Признак делимости на 37', text: 'Разбейте число на группы по 3 цифры справа и сложите их. Если сумма делится на 37, то и число делится на 37.', example: 'Например, 4551: 4 + 551 = 555; 555 : 37 = 15, значит 4551 делится на 37.' },
};

/* ===== СОСТОЯНИЕ ===== */

const STORAGE_KEY = 'frogDivisibilityGame';

const state = {
  levelColorIndex: { 1: 0, 2: 0, 3: 0, 4: 0 },
  collectedFrogs: { 1: [], 2: [], 3: [], 4: [] },
};

let gameState = {
  level: 1,
  divisors: [],
  jumpsCompleted: 0,
  mistakes: 0,
  currentDivisor: null,
  currentNumber: null,
  currentCorrect: null,
  currentQuestionType: 'yesno',
  active: false,
  awaitingRetry: false,
};

let dictionaryFromGame = false;
let currentRuleIndex = 0;
const ruleNumbers = Object.keys(RULES).map(Number).sort((a, b) => a - b);

/* ===== ВСПОМОГАТЕЛЬНЫЕ ===== */

function frogSVG(color) {
  return `
    <svg viewBox="0 0 100 100" class="frog-svg" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="68" rx="36" ry="26" fill="${color}"/>
      <circle cx="28" cy="40" r="14" fill="${color}"/>
      <circle cx="72" cy="40" r="14" fill="${color}"/>
      <circle cx="28" cy="40" r="8" fill="white"/>
      <circle cx="72" cy="40" r="8" fill="white"/>
      <circle cx="29" cy="41" r="4" fill="#222"/>
      <circle cx="71" cy="41" r="4" fill="#222"/>
      <path d="M 36 72 Q 50 84 64 72" stroke="#222" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <ellipse cx="50" cy="76" rx="17" ry="7" fill="rgba(255,255,255,0.22)"/>
      <ellipse cx="16" cy="88" rx="11" ry="5" fill="${color}"/>
      <ellipse cx="84" cy="88" rx="11" ry="5" fill="${color}"/>
    </svg>
  `;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    if (parsed.levelColorIndex) {
      for (let level = 1; level <= 4; level++) {
        const idx = parsed.levelColorIndex[level];
        if (typeof idx === 'number') {
          state.levelColorIndex[level] = idx % LEVEL_FROG_COLORS[level].length;
        }
      }
    }
    if (parsed.collectedFrogs) {
      for (let level = 1; level <= 4; level++) {
        if (Array.isArray(parsed.collectedFrogs[level])) {
          const len = LEVEL_FROG_COLORS[level].length;
          state.collectedFrogs[level] = parsed.collectedFrogs[level]
            .filter(i => typeof i === 'number')
            .map(i => i % len);
        }
      }
    }
  } catch (e) {
    console.warn('Не удалось загрузить сохранение', e);
  }
}

/* ===== ПОДСВЕТКА В СЛОВАРИКЕ ===== */

const HIGHLIGHT_PHRASES = [
  'четыре его последние цифры',
  'две его последние цифры',
  'три его последние цифры',
  'пять его последних цифр',
  'последние четыре цифры',
  'его последняя цифра',
  'последние две цифры',
  'последние три цифры',
  'последние пять цифр',
  'последняя цифра',
  'последнюю цифру',
  'сумма его цифр',
  'нечётных местах',
  'чётных местах',
  'сумму цифр',
  'нечётная',
  'чётная',
  'Повторяйте',
];

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlightText(text) {
  const phraseRe = new RegExp(
    '(' + HIGHLIGHT_PHRASES
      .slice()
      .sort((a, b) => b.length - a.length)
      .map(escapeRegex)
      .join('|') + ')',
    'gi'
  );

  let html = text.replace(phraseRe, '<span class="hl-word">$1</span>');
  html = html.replace(/\b(\d+)\b/g, '<span class="hl-num">$1</span>');
  return html;
}

/* ===== ЛОГИКА ИГРЫ ===== */

function startLevel(level) {
  const levelData = LEVELS[level];
  gameState = {
    level,
    divisors: levelData.divisors,
    jumpsCompleted: 0,
    mistakes: 0,
    currentDivisor: null,
    currentNumber: null,
    currentCorrect: null,
    currentQuestionType: 'yesno',
    active: false,
    awaitingRetry: false,
  };

  showScreen('game-screen');
  renderPond();
  updateStats();

  document.getElementById('theory-prompt').classList.add('hidden');
  const fb = document.getElementById('feedback');
  fb.textContent = '';
  fb.className = 'feedback';

  generateQuestion();
  gameState.active = true;
}

function renderPond() {
  const inner = document.getElementById('pond-inner');
  inner.innerHTML = '';

  for (let i = 0; i <= 10; i++) {
    const slot = document.createElement('div');
    slot.className = 'pond-slot';

    const pad = document.createElement('div');
    pad.className = 'lily-pad';
    if (i === 0) {
      pad.classList.add('bank');
      pad.textContent = '🏞️';
    } else if (i === 10) {
      pad.classList.add('home-pad');
      pad.textContent = '🏠';
    } else {
      pad.textContent = '🍃';
    }
    slot.appendChild(pad);
    inner.appendChild(slot);
  }

  const colorData = getLevelFrogColor(gameState.level, state.levelColorIndex[gameState.level]);
  const frog = document.createElement('div');
  frog.id = 'frog';
  frog.className = 'frog';
  frog.innerHTML = frogSVG(colorData.color);
  inner.appendChild(frog);

  updateFrogPosition();
}

function updateFrogPosition() {
  const frog = document.getElementById('frog');
  if (!frog) return;
  const index = gameState.jumpsCompleted;
  const leftPercent = ((index + 0.5) / 11) * 100;
  frog.style.left = leftPercent + '%';
}

function updateStats() {
  document.getElementById('jump-counter').textContent =
    `Кувшинка ${gameState.jumpsCompleted} / 10`;
  document.getElementById('mistake-counter').textContent =
    `Ошибки: ${gameState.mistakes}`;
}

function generateQuestion() {
  // 10-й вопрос (когда на 9-й кувшинке) — специальный формат
  if (gameState.jumpsCompleted === 9) {
    generateAppendQuestion();
  } else {
    generateRegularQuestion();
  }
}

function generateRegularQuestion() {
  const divisors = gameState.divisors;
  const d = divisors[Math.floor(Math.random() * divisors.length)];

  let num;
  let correct;

  if (d === 1) {
    num = Math.floor(Math.random() * 9990) + 10;
    correct = true;
  } else {
    const shouldBeDivisible = Math.random() < 0.5;
    if (shouldBeDivisible) {
      const min = 10;
      const max = 9999;
      const minK = Math.ceil(min / d);
      const maxK = Math.floor(max / d);
      let k;
      if (minK > maxK) {
        k = Math.floor(Math.random() * 5) + 1;
      } else {
        k = Math.floor(Math.random() * (maxK - minK + 1)) + minK;
      }
      num = k * d;
      correct = true;
    } else {
      do {
        num = Math.floor(Math.random() * 9990) + 10;
      } while (num % d === 0);
      correct = false;
    }
  }

  gameState.currentDivisor = d;
  gameState.currentNumber = num;
  gameState.currentCorrect = correct;
  gameState.currentQuestionType = 'yesno';

  document.getElementById('question-text').innerHTML =
    `Делится ли число <strong>${num}</strong> на <strong>${d}</strong>?`;

  document.getElementById('answer-buttons').classList.remove('hidden');
  document.getElementById('append-input-area').classList.add('hidden');

  const fb = document.getElementById('feedback');
  fb.textContent = '';
  fb.className = 'feedback';

  document.getElementById('btn-yes').disabled = false;
  document.getElementById('btn-no').disabled = false;
  document.getElementById('btn-dont-know').disabled = false;
  document.getElementById('btn-check-append').disabled = false;
}

function generateAppendQuestion() {
  const divisors = gameState.divisors;
  const d = divisors[Math.floor(Math.random() * divisors.length)];
  const num = Math.floor(Math.random() * 900) + 100; // 100–999

  gameState.currentDivisor = d;
  gameState.currentNumber = num;
  gameState.currentCorrect = null;
  gameState.currentQuestionType = 'append';

  document.getElementById('question-text').innerHTML =
    `Добавьте две цифры к числу <strong>${num}</strong>, чтобы оно делилось на <strong>${d}</strong>`;

  document.getElementById('append-prefix').textContent = num;
  const input = document.getElementById('append-input');
  input.value = '';
  input.disabled = false;

  document.getElementById('answer-buttons').classList.add('hidden');
  document.getElementById('append-input-area').classList.remove('hidden');

  const fb = document.getElementById('feedback');
  fb.textContent = '';
  fb.className = 'feedback';

  document.getElementById('btn-dont-know').disabled = false;
  document.getElementById('btn-check-append').disabled = false;
}

function handleAnswer(userSaysDivisible) {
  if (!gameState.active || gameState.awaitingRetry) return;
  if (gameState.currentQuestionType !== 'yesno') return;
  gameState.active = false;

  document.getElementById('btn-yes').disabled = true;
  document.getElementById('btn-no').disabled = true;
  document.getElementById('btn-dont-know').disabled = true;

  const isCorrect = userSaysDivisible === gameState.currentCorrect;
  const fb = document.getElementById('feedback');

  if (isCorrect) {
    fb.textContent = 'Верно! 🐸';
    fb.className = 'feedback correct';

    gameState.jumpsCompleted++;
    updateStats();

    setTimeout(() => {
      updateFrogPosition();
      if (gameState.jumpsCompleted >= 10) {
        endLevel();
      } else {
        generateQuestion();
        gameState.active = true;
      }
    }, 700);
  } else {
    fb.textContent = 'Неверно 😢';
    fb.className = 'feedback wrong';

    gameState.mistakes++;
    updateStats();

    gameState.awaitingRetry = true;
    document.getElementById('theory-prompt').classList.remove('hidden');
  }
}

function handleAppendCheck() {
  if (!gameState.active || gameState.awaitingRetry) return;
  if (gameState.currentQuestionType !== 'append') return;

  const input = document.getElementById('append-input');
  const val = input.value.trim();

  const fb = document.getElementById('feedback');

  if (!/^\d{2}$/.test(val)) {
    fb.textContent = 'Введите ровно 2 цифры';
    fb.className = 'feedback wrong';
    return;
  }

  gameState.active = false;
  input.disabled = true;
  document.getElementById('btn-check-append').disabled = true;
  document.getElementById('btn-dont-know').disabled = true;

  const newNum = gameState.currentNumber * 100 + parseInt(val, 10);
  const isCorrect = newNum % gameState.currentDivisor === 0;

  if (isCorrect) {
    fb.textContent = `Верно! ${newNum} делится на ${gameState.currentDivisor} 🐸`;
    fb.className = 'feedback correct';

    gameState.jumpsCompleted++;
    updateStats();

    setTimeout(() => {
      updateFrogPosition();
      if (gameState.jumpsCompleted >= 10) {
        endLevel();
      } else {
        generateQuestion();
        gameState.active = true;
      }
    }, 900);
  } else {
    fb.textContent = `Неверно: ${newNum} не делится на ${gameState.currentDivisor} 😢`;
    fb.className = 'feedback wrong';

    gameState.mistakes++;
    updateStats();

    gameState.awaitingRetry = true;
    document.getElementById('theory-prompt').classList.remove('hidden');
  }
}

function handleDontKnow() {
  if (!gameState.active || gameState.awaitingRetry) return;
  gameState.active = false;

  document.getElementById('btn-yes').disabled = true;
  document.getElementById('btn-no').disabled = true;
  document.getElementById('btn-dont-know').disabled = true;
  document.getElementById('btn-check-append').disabled = true;
  document.getElementById('append-input').disabled = true;

  const fb = document.getElementById('feedback');
  fb.textContent = '';
  fb.className = 'feedback';

  gameState.mistakes++;
  updateStats();

  dictionaryFromGame = true;
  openDictionary(gameState.currentDivisor);
}

function endLevel() {
  gameState.active = false;

  const mistakes = gameState.mistakes;
  const earned = mistakes <= 1;

  const titleEl = document.getElementById('result-title');
  const textEl = document.getElementById('result-text');
  const frogEl = document.getElementById('result-frog');

  if (earned) {
    const level = gameState.level;
    const colorIndex = state.levelColorIndex[level];
    const colorData = getLevelFrogColor(level, colorIndex);

    state.collectedFrogs[level].push(colorIndex);
    state.levelColorIndex[level] = (colorIndex + 1) % LEVEL_FROG_COLORS[level].length;
    saveState();

    titleEl.textContent = '🎉 Уровень пройден!';
    textEl.textContent = `Ошибок: ${mistakes}. Вы получаете лягушку цвета «${colorData.name}»!`;
    frogEl.innerHTML = frogSVG(colorData.color);
    frogEl.classList.remove('hidden');
  } else {
    titleEl.textContent = '😢 Уровень пройден, но...';
    textEl.textContent = `Ошибок: ${mistakes}. Чтобы получить лягушку, нужно пройти уровень максимум с одной ошибкой. Попробуйте ещё раз!`;
    frogEl.innerHTML = '';
    frogEl.classList.add('hidden');
  }

  showScreen('result-screen');
}

/* ===== СЛОВАРИК ===== */

function openDictionary(initialDivisor) {
  document.getElementById('dictionary-modal').classList.remove('hidden');
  renderBookTabs();

  if (initialDivisor && RULES[initialDivisor]) {
    const idx = ruleNumbers.indexOf(initialDivisor);
    if (idx !== -1) {
      showRulePage(idx);
      return;
    }
  }
  showRulePage(0);
}

function renderBookTabs() {
  const tabsEl = document.getElementById('book-tabs');
  tabsEl.innerHTML = '';
  ruleNumbers.forEach((num, idx) => {
    const tab = document.createElement('div');
    tab.className = 'book-tab';
    tab.textContent = num;
    tab.dataset.index = idx;
    tab.addEventListener('click', () => showRulePage(idx));
    tabsEl.appendChild(tab);
  });
}

function capFirst(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function showRulePage(index) {
  currentRuleIndex = index;
  const num = ruleNumbers[index];
  const rule = RULES[num];

  const exampleClean = rule.example.replace(/^Например,\s*/i, '');
  const match = exampleClean.match(/^(\d+)\s*:?\s+([\s\S]+)$/);

  let exampleHTML;
  if (match) {
    const numPart = match[1];
    const rest = match[2];
    const secondMatch = rest.match(/^([\s\S]+?)\.\s+А\s+(\d+)\s*:?\s+([\s\S]+)$/);

    if (secondMatch) {
      const part1 = secondMatch[1];
      const num2 = secondMatch[2];
      const part2 = secondMatch[3];

      exampleHTML = `
        <div><strong>Пример:</strong> <span class="hl-num">${numPart}</span></div>
        <div class="example-explanation">${highlightText(capFirst(part1))}</div>
        <div class="example-second"><strong>Пример №2:</strong> <span class="hl-num">${num2}</span></div>
        <div class="example-explanation">${highlightText(capFirst(part2))}</div>
      `;
    } else {
      exampleHTML = `
        <div><strong>Пример:</strong> <span class="hl-num">${numPart}</span></div>
        <div class="example-explanation">${highlightText(capFirst(rest))}</div>
      `;
    }
  } else {
    exampleHTML = `<div>${highlightText(exampleClean)}</div>`;
  }

  document.getElementById('book-page').innerHTML = `
    <h2>${rule.title}</h2>
    <p>${highlightText(rule.text)}</p>
    <div class="example-box">
      ${exampleHTML}
    </div>
  `;

  document.querySelectorAll('.book-tab').forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
  });

  document.getElementById('book-page-indicator').textContent =
    `${index + 1} / ${ruleNumbers.length}`;

  const activeTab = document.querySelector('.book-tab.active');
  if (activeTab) activeTab.scrollIntoView({ block: 'nearest' });
}

function closeDictionary() {
  document.getElementById('dictionary-modal').classList.add('hidden');
  if (dictionaryFromGame) {
    dictionaryFromGame = false;
    gameState.awaitingRetry = false;
    document.getElementById('theory-prompt').classList.add('hidden');
    generateQuestion();
    gameState.active = true;
  }
}

/* ===== ДОМИК ===== */

function openHome() {
  document.getElementById('home-modal').classList.remove('hidden');
  renderHome();
}

function renderHome() {
  const container = document.getElementById('home-frogs');
  container.innerHTML = '';

  for (let level = 1; level <= 4; level++) {
    const section = document.createElement('div');
    section.className = 'home-section';

    const title = document.createElement('h3');
    title.textContent = LEVELS[level].name;
    section.appendChild(title);

    const row = document.createElement('div');
    row.className = 'home-frogs-row';

    const frogs = state.collectedFrogs[level];
    if (frogs.length === 0) {
      const empty = document.createElement('span');
      empty.className = 'home-empty';
      empty.textContent = 'Пока нет лягушек';
      row.appendChild(empty);
    } else {
      frogs.forEach(colorIndex => {
        const colorData = LEVEL_FROG_COLORS[level][colorIndex];
        const frogEl = document.createElement('div');
        frogEl.className = 'home-frog';
        frogEl.innerHTML = frogSVG(colorData.color);
        frogEl.title = colorData.name;
        row.appendChild(frogEl);
      });
    }

    section.appendChild(row);
    container.appendChild(section);
  }
}

/* ===== ИНИЦИАЛИЗАЦИЯ ===== */

document.addEventListener('DOMContentLoaded', () => {
  loadState();

  document.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const level = parseInt(btn.dataset.level, 10);
      startLevel(level);
    });
  });

  document.getElementById('back-to-menu').addEventListener('click', () => {
    if (gameState.active || gameState.awaitingRetry) {
      if (!confirm('Вы уверены, что хотите выйти? Прогресс уровня будет потерян.')) return;
    }
    showScreen('menu-screen');
  });

  document.getElementById('btn-yes').addEventListener('click', () => handleAnswer(true));
  document.getElementById('btn-no').addEventListener('click', () => handleAnswer(false));
  document.getElementById('btn-check-append').addEventListener('click', handleAppendCheck);

  document.getElementById('append-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAppendCheck();
    }
  });

  document.getElementById('append-input').addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 2);
  });

  document.getElementById('btn-dont-know').addEventListener('click', handleDontKnow);

  document.getElementById('btn-show-theory').addEventListener('click', () => {
    dictionaryFromGame = true;
    openDictionary(gameState.currentDivisor);
  });

  document.getElementById('btn-skip-theory').addEventListener('click', () => {
    document.getElementById('theory-prompt').classList.add('hidden');
    gameState.awaitingRetry = false;
    generateQuestion();
    gameState.active = true;
  });

  document.getElementById('result-back-to-menu').addEventListener('click', () => {
    showScreen('menu-screen');
  });

  document.getElementById('open-dictionary').addEventListener('click', () => openDictionary());
  document.getElementById('close-dictionary').addEventListener('click', closeDictionary);
  document.getElementById('book-prev').addEventListener('click', () => {
    if (currentRuleIndex > 0) showRulePage(currentRuleIndex - 1);
  });
  document.getElementById('book-next').addEventListener('click', () => {
    if (currentRuleIndex < ruleNumbers.length - 1) showRulePage(currentRuleIndex + 1);
  });

  document.getElementById('open-home').addEventListener('click', openHome);
  document.getElementById('close-home').addEventListener('click', () => {
    document.getElementById('home-modal').classList.add('hidden');
  });

  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target !== modal) return;
      if (modal.id === 'dictionary-modal') closeDictionary();
      else modal.classList.add('hidden');
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (!document.getElementById('dictionary-modal').classList.contains('hidden')) {
      closeDictionary();
    } else if (!document.getElementById('home-modal').classList.contains('hidden')) {
      document.getElementById('home-modal').classList.add('hidden');
    }
  });
});
