document.addEventListener('DOMContentLoaded', function() {
    // בעתיד נוסיף כאן לוגיקה להוספת משימות, תזכורות וגרפים
    console.log('האתר נטען בהצלחה');
});

function checkReminders() {
    const tasks = [
        { name: 'משימה 1', deadline: '2024-09-01' },
        { name: 'משימה 2', deadline: '2024-09-05' }
    ];

    const today = new Date().toISOString().split('T')[0];
    
    tasks.forEach(task => {
        if (task.deadline === today) {
            alert(התזכורת שלך: ${task.name} היא להיום!);
        }
    });
}

// הפעלת פונקציית התזכורות בעת הטעינה
document.addEventListener('DOMContentLoaded', function() {
    checkReminders();
});

// לאחר טעינת הדף
document.addEventListener('DOMContentLoaded', function() {
    checkReminders();
    createProgressChart();
});

// פונקציה ליצירת גרף התקדמות
function createProgressChart() {
    const ctx = document.getElementById('progressChart').getContext('2d');
    
    const progressChart = new Chart(ctx, {
        type: 'bar',  // סוג הגרף: בר
        data: {
            labels: ['פרויקט 1', 'פרויקט 2', 'פרויקט 3'],
            datasets: [{
                label: 'התקדמות בפרויקטים (%)',
                data: [70, 50, 90],  // כאן ניתן להכניס נתונים דינמיים
                backgroundColor: ['rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100  // סרגל בין 0 ל-100%
                }
            }
        }
    });
}

// הוספת משימה חדשה
document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault(); // מניעת טעינת הדף מחדש

    const taskName = document.getElementById('task-name').value;
    const taskDeadline = document.getElementById('task-deadline').value;

    const newTask = {
        id: data.tasks.length + 1,
        name: taskName,
        deadline: taskDeadline,
        status: 'pending'
    };

    data.tasks.push(newTask);
    renderTasks();

    // ניקוי הטופס לאחר הוספת המשימה
    document.getElementById('task-form').reset();
});

// בקשת הרשאה מהמשתמש להתראות פוש
function requestNotificationPermission() {
    if ('Notification' in window && navigator.serviceWorker) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                console.log('הרשאה להתראות ניתנה');
            } else {
                console.log('הרשאה להתראות נדחתה');
            }
        });
    }
}

// שליחת התראה למשתמש
function sendNotification(title, body) {
    if (Notification.permission === 'granted') {
        new Notification(title, {
            body: body,
            icon: 'icon.png' // ניתן להוסיף אייקון להתראה
        });
    }
}

// קריאה לפונקציות
document.addEventListener('DOMContentLoaded', function() {
    requestNotificationPermission();
    
    // שליחת התראה כשתזכורת מוצגת
    sendNotification('תזכורת', 'יש לך משימה להיום!');
});

// פונקציית התחברות/הרשמה
document.getElementById('auth-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // בדיקת משתמש קיים ב-Local Storage
    const storedUser = JSON.parse(localStorage.getItem(username));

    if (storedUser && storedUser.password === password) {
        // התחברות מוצלחת
        document.getElementById('auth-status').textContent = ברוך הבא, ${username};
        loadUserTasks(username);
    } else if (!storedUser) {
        // משתמש לא קיים - הרשמה
        const newUser = {
            username: username,
            password: password,
            tasks: []
        };
        localStorage.setItem(username, JSON.stringify(newUser));
        document.getElementById('auth-status').textContent = המשתמש נרשם בהצלחה, ${username};
        loadUserTasks(username);
    } else {
        // סיסמה שגויה
        document.getElementById('auth-status').textContent = 'שם משתמש או סיסמה שגויים';
    }
});

// טעינת משימות המשתמש
function loadUserTasks(username) {
    const storedUser = JSON.parse(localStorage.getItem(username));
    if (storedUser && storedUser.tasks) {
        data.tasks = storedUser.tasks;
        renderTasks();
    }
}

// שמירת המשימות של המשתמש
function saveUserTasks(username) {
    const storedUser = JSON.parse(localStorage.getItem(username));
    if (storedUser) {
        storedUser.tasks = data.tasks;
        localStorage.setItem(username, JSON.stringify(storedUser));
    }
}

// עדכון אוטומטי אחרי כל שינוי במשימות
document.getElementById('task-form').addEventListener('submit', function() {
    const username = document.getElementById('username').value;
    saveUserTasks(username);
});

function checkReminders() {
    const tasks = [
        { name: 'משימה 1', deadline: '2024-09-01' },
        { name: 'משימה 2', deadline: '2024-09-05' }
    ];

    const today = new Date().toISOString().split('T')[0];

    tasks.forEach(task => {
        if (task.deadline === today) {
            alert(התזכורת שלך: ${task.name} היא להיום!);
        }
    });
}

// בדיקת תזכורות כל 24 שעות
setInterval(checkReminders, 86400000);

// בדיקה ראשונית עם טעינת הדף
document.addEventListener('DOMContentLoaded', function() {
    checkReminders();
    createProgressChart();
});

// מחיקת משימה
document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-task')) {
        const taskIndex = [...e.target.parentElement.parentElement.children].indexOf(e.target.parentElement);
        data.tasks.splice(taskIndex, 1);
        renderTasks();

        const username = document.getElementById('username').value;
        saveUserTasks(username);
    }
});

function updateProjectStatus(projectId, newStatus) {
    const project = data.projects.find(proj => proj.id === projectId);
    if (project) {
        project.status = newStatus;
        renderProjects();

        const username = document.getElementById('username').value;
        saveUserTasks(username);
    }
}
function checkReminders() {
    const today = new Date().toISOString().split('T')[0];
    data.tasks.forEach(task => {
        const taskDate = new Date(task.deadline);
        const todayDate = new Date(today);
        const daysLeft = Math.ceil((taskDate - todayDate) / (1000 * 60 * 60 * 24));

        if (daysLeft === 1) {
            sendNotification('תזכורת', מחר יש לך את המשימה: ${task.name});
        } else if (daysLeft === 0) {
            sendNotification('תזכורת', המשימה שלך: ${task.name} היא להיום!);
        }
    });
}

function createProjectProgressChart() {
    const ctx = document.getElementById('projectProgressChart').getContext('2d');
    
    const labels = data.projects.map(project => project.name);
    const progressData = data.projects.map(project => project.progress);
    
    const progressChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'התקדמות בפרויקטים (%)',
                data: progressData,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}