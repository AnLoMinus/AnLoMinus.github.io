document.addEventListener('DOMContentLoaded', () => {
    const calendarElement = document.getElementById('calendar');
    const scheduleListElement = document.getElementById('schedule-list');
    const pageTitle = document.getElementById('page-title');
    const scheduleTitle = document.getElementById('schedule-title');
    const bookDropdown = document.getElementById('book-dropdown');
    const monthSelector = document.getElementById('month-selector');
    const hourDropdown = document.getElementById('hour-dropdown');
    const yearDropdown = document.getElementById('year-dropdown');
    const scheduleForm = document.getElementById('schedule-form');
    const yearInput = document.getElementById('year-input');
    const monthInput = document.getElementById('month-input');
    const dayInput = document.getElementById('day-input');
    const hourInput = document.getElementById('hour-input');
    const taskInput = document.getElementById('task-input');
    const messageElement = document.getElementById('message');
    const combinedViewButton = document.getElementById('combined-view');
    
    const texts = {
        he: {
            title: 'לוח לימוד',
            scheduleTitle: 'מערכת שעות יומית',
            books: {
                'chovat-halevavot': 'חובת הלבבות: יסודות עבודת ה\' ותחילת הדרך',
                'mesilat-yesharim': 'מסילת ישרים: שלב שפלות רוח ותהליך ההכנה',
                'shmoneh-prakim': 'שמונה פרקים: פילוסופיה ומוסר',
                'sefer-hamidot': 'ספר המידות: תיקון מידות ודרכים מעשיות',
                'avod-hashem': 'עבד ה\': תפילה ותיקון עצמי',
                'hegionot-chachamim': 'הגיונות חכמים: תיקון עצמי ותפילה',
                'machshavot-yisrael': 'מחשבות ישראל: גילוי עצמי והתעלות רוחנית',
                'hanefesh-chayah': 'הנפש חיה: שילוב רוחניות בחיי היומיום'
            },
            schedules: {
                'chovat-halevavot': [{ time: '00:00', task: 'התבוננות חצות' }, { time: '06:00', task: 'מדיטציה בוקר' }, { time: '12:00', task: 'לימוד צהריים' }, { time: '18:00', task: 'סקירה ערב' }, { time: '22:00', task: 'התבוננות לילה' }],
                'mesilat-yesharim': [{ time: '00:00', task: 'מיקוד בענווה' }, { time: '06:00', task: 'הכנה בוקר' }, { time: '12:00', task: 'לימוד' }, { time: '18:00', task: 'עבודה על אופי' }, { time: '22:00', task: 'סקירת עצמי' }],
                // Add more schedules
            }
        }
    };

    let currentBook = 'chovat-halevavot';
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    const months = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];

    function generateCalendar() {
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        calendarElement.innerHTML = Array.from({ length: daysInMonth }, (_, i) => {
            const date = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(i + 1).padStart(2, '0')}`;
            return `<div class="day" data-date="${date}">${i + 1}</div>`;
        }).join('');
    }

    function generateHourDropdown() {
        hourDropdown.innerHTML = Array.from({ length: 24 }, (_, i) => {
            const hour = String(i).padStart(2, '0') + ':00';
            return `<option value="${hour}">${hour}</option>`;
        }).join('');
    }

    function updateSchedule(date) {
        const schedule = texts.he.schedules[currentBook];
        const filteredSchedule = schedule.filter(item => item.time === hourDropdown.value);
        scheduleListElement.innerHTML = filteredSchedule.map(item => `<li><span>${item.time}</span>: ${item.task}</li>`).join('');
    }

    function updateMonths() {
        monthSelector.innerHTML = months.map((month, index) => `<option value="${index}" ${index === currentMonth ? 'selected' : ''}>${month}</option>`).join('');
    }

    function populateYearDropdown() {
        yearDropdown.innerHTML = '';
        for (let year = currentYear - 0; year <= currentYear + 10; year++) {
            const option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearDropdown.appendChild(option);
        }
        yearDropdown.value = currentYear;
    }

    function setBook(book) {
        currentBook = book;
        updateSchedule(`${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-01`);
    }

    function setMonth(month) {
        currentMonth = parseInt(month, 10);
        generateCalendar();
        updateSchedule(`${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-01`);
    }

    function setYear(year) {
        currentYear = parseInt(year, 10);
        generateCalendar();
        updateSchedule(`${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-01`);
    }

    function addSchedule(year, month, day, hour, task) {
        const date = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const schedules = loadSchedules();
        if (!schedules[date]) {
            schedules[date] = [];
        }
        schedules[date].push({ time: hour, task });
        saveSchedules(schedules);
        updateSchedule(date);
        messageElement.textContent = `תוכנית נוספה ל-${date} בשעה ${hour}.`;
        messageElement.style.color = '#f0e6d6'; // זהב
    }

    function generateCombinedView() {
        const scheduleElement = document.getElementById('schedule');
        scheduleElement.innerHTML = '';
        Object.keys(texts.he.books).forEach(bookKey => {
            const book = texts.he.books[bookKey];
            const bookTitle = document.createElement('h3');
            bookTitle.textContent = book;
            scheduleElement.appendChild(bookTitle);

            const dummyData = [
                { date: '2024-08-01', time: '08:00', task: 'Start reading' },
                { date: '2024-08-01', time: '12:00', task: 'Review notes' },
                { date: '2024-08-02', time: '08:00', task: 'Continue reading' },
            ];

            const list = document.createElement('ul');
            dummyData.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = `${item.date} ${item.time}: ${item.task}`;
                list.appendChild(listItem);
            });

            scheduleElement.appendChild(list);
        });
    }

    bookDropdown.innerHTML = Object.keys(texts.he.books).map(key => `<option value="${key}">${texts.he.books[key]}</option>`).join('');
    generateCalendar();
    generateHourDropdown();
    updateMonths();
    populateYearDropdown();
    updateSchedule(`${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-01`);

    bookDropdown.addEventListener('change', () => {
        setBook(bookDropdown.value);
    });

    monthSelector.addEventListener('change', () => {
        setMonth(monthSelector.value);
    });

    hourDropdown.addEventListener('change', () => {
        updateSchedule(`${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-01`);
    });

    calendarElement.addEventListener('click', (event) => {
        if (event.target.classList.contains('day')) {
            const date = event.target.getAttribute('data-date');
            updateSchedule(date);
        }
    });

    scheduleForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const year = parseInt(yearInput.value, 10);
        const month = parseInt(monthInput.value, 10);
        const day = parseInt(dayInput.value, 10);
        const hour = hourInput.value;
        const task = taskInput.value;

        addSchedule(year, month, day, hour, task);
        scheduleForm.reset();
    });

    combinedViewButton.addEventListener('click', () => {
        generateCombinedView();
    });

    setBook('chovat-halevavot');
    setMonth(currentMonth);
    yearDropdown.value = currentYear;
});