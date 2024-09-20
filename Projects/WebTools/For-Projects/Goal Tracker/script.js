document.getElementById('save-btn').addEventListener('click', function() {
    const personalGoals = document.getElementById('personal-goals').value;
    const professionalGoals = document.getElementById('professional-goals').value;
    const healthGoals = document.getElementById('health-goals').value;
    const dailyTasks = document.getElementById('daily-tasks').value;
    const trackingTools = document.getElementById('tracking-tools').value;
    const smartSpecific = document.getElementById('smart-specific').value;
    const smartMeasurable = document.getElementById('smart-measurable').value;
    const smartAchievable = document.getElementById('smart-achievable').value;
    const smartRelevant = document.getElementById('smart-relevant').value;
    const smartTimebound = document.getElementById('smart-timebound').value;

    const data = {
        personalGoals,
        professionalGoals,
        healthGoals,
        dailyTasks,
        trackingTools,
        smartSpecific,
        smartMeasurable,
        smartAchievable,
        smartRelevant,
        smartTimebound
    };

    // Save data to localStorage (for demonstration purposes)
    localStorage.setItem('goalData', JSON.stringify(data));
    alert('Data saved successfully!');
});