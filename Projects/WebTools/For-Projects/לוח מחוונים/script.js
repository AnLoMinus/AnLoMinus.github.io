document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.getElementById('projectList');
    const taskList = document.getElementById('taskList');
    const notificationList = document.getElementById('notificationList');
    const userList = document.getElementById('userList');
    
    const projects = [];
    const tasks = [];
    const notifications = [];
    const users = [];

    function addProject() {
        const projectName = document.getElementById('projectName').value;
        if (projectName) {
            projects.push(projectName);
            updateList(projectList, projects);
            document.getElementById('projectName').value = '';
        }
    }

    function editProject() {
        const projectName = document.getElementById('projectName').value;
        const index = projects.indexOf(projectName);
        if (index > -1) {
            const newProjectName = prompt('הכנס שם חדש לפרויקט');
            if (newProjectName) {
                projects[index] = newProjectName;
                updateList(projectList, projects);
                document.getElementById('projectName').value = '';
            }
        } else {
            alert('הפרויקט לא נמצא');
        }
    }

    function deleteProject() {
        const projectName = document.getElementById('projectName').value;
        const index = projects.indexOf(projectName);
        if (index > -1) {
            projects.splice(index, 1);
            updateList(projectList, projects);
            document.getElementById('projectName').value = '';
        } else {
            alert('הפרויקט לא נמצא');
        }
    }

    function addTask() {
        const taskName = document.getElementById('taskName').value;
        if (taskName) {
            tasks.push(taskName);
            updateList(taskList, tasks);
            document.getElementById('taskName').value = '';
        }
    }

    function markTaskComplete() {
        const taskName = document.getElementById('taskName').value;
        const index = tasks.indexOf(taskName);
        if (index > -1) {
            tasks.splice(index, 1);
            updateList(taskList, tasks);
            document.getElementById('taskName').value = '';
        } else {
            alert('המשימה לא נמצאת');
        }
    }

    function deleteTask() {
        const taskName = document.getElementById('taskName').value;
        const index = tasks.indexOf(taskName);
        if (index > -1) {
            tasks.splice(index, 1);
            updateList(taskList, tasks);
            document.getElementById('taskName').value = '';
        } else {
            alert('המשימה לא נמצאת');
        }
    }

    function addNotification() {
        const notificationText = document.getElementById('notificationText').value;
        if (notificationText) {
            notifications.push(notificationText);
            updateList(notificationList, notifications);
            document.getElementById('notificationText').value = '';
        }
    }

    function editNotification() {
        const notificationText = document.getElementById('notificationText').value;
        const index = notifications.indexOf(notificationText);
        if (index > -1) {
            const newNotificationText = prompt('הכנס טקסט חדש להתראה');
            if (newNotificationText) {
                notifications[index] = newNotificationText;
                updateList(notificationList, notifications);
                document.getElementById('notificationText').value = '';
            }
        } else {
            alert('ההתראה לא נמצאת');
        }
    }

    function deleteNotification() {
        const notificationText = document.getElementById('notificationText').value;
        const index = notifications.indexOf(notificationText);
        if (index > -1) {
            notifications.splice(index, 1);
            updateList(notificationList, notifications);
            document.getElementById('notificationText').value = '';
        } else {
            alert('ההתראה לא נמצאת');
        }
    }

    function addUser() {
        const userName = document.getElementById('userName').value;
        if (userName) {
            users.push(userName);
            updateList(userList, users);
            document.getElementById('userName').value = '';
        }
    }

    function editUser() {
        const userName = document.getElementById('userName').value;
        const index = users.indexOf(userName);
        if (index > -1) {
            const newUserName = prompt('הכנס שם חדש למשתמש');
            if (newUserName) {
                users[index] = newUserName;
                updateList(userList, users);
                document.getElementById('userName').value = '';
            }
        } else {
            alert('המשתמש לא נמצא');
        }
    }

    function deleteUser() {
        const userName = document.getElementById('userName').value;
        const index = users.indexOf(userName);
        if (index > -1) {
            users.splice(index, 1);
            updateList(userList, users);
            document.getElementById('userName').value = '';
        } else {
            alert('המשתמש לא נמצא');
        }
    }

    function updateList(element, list) {
        element.innerHTML = '';
        list.forEach(item => {
            const div = document.createElement('div');
            div.className = 'item';
            div.textContent = item;
            element.appendChild(div);
        });
    }

    const ctx = document.getElementById('taskChart').getContext('2d');
    const taskChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Complete', 'Pending'],
            datasets: [{
                label: 'Tasks',
                data: [tasks.length, 10 - tasks.length],
                backgroundColor: ['#4caf50', '#ff5722'],
                borderColor: ['#388e3c', '#e64a19'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    function refreshChart() {
        taskChart.data.datasets[0].data = [tasks.length, 10 - tasks.length];
        taskChart.update();
    }

    async function fetchData() {
        try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    fetchData();

    // Connect buttons to functions
    document.getElementById('addProjectButton').addEventListener('click', addProject);
    document.getElementById('editProjectButton').addEventListener('click', editProject);
    document.getElementById('deleteProjectButton').addEventListener('click', deleteProject);
    
    document.getElementById('addTaskButton').addEventListener('click', addTask);
    document.getElementById('markTaskCompleteButton').addEventListener('click', markTaskComplete);
    document.getElementById('deleteTaskButton').addEventListener('click', deleteTask);
    
    document.getElementById('addNotificationButton').addEventListener('click', addNotification);
    document.getElementById('editNotificationButton').addEventListener('click', editNotification);
    document.getElementById('deleteNotificationButton').addEventListener('click', deleteNotification);
    
    document.getElementById('addUserButton').addEventListener('click', addUser);
    document.getElementById('editUserButton').addEventListener('click', editUser);
    document.getElementById('deleteUserButton').addEventListener('click', deleteUser);
    
    document.getElementById('refreshChartButton').addEventListener('click', refreshChart);
});