document.addEventListener("DOMContentLoaded", function() {
    function updateDateTime() {
        const currentDate = new Date();
        
        const dateElement = document.getElementById('date');
        const timeElement = document.getElementById('time');
    
        const options = {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
        };
    
        const dateFormatted = currentDate.toLocaleDateString('en-US', options);
        const timeFormatted = currentDate.toLocaleTimeString('en-US');
    
        dateElement.textContent = dateFormatted;
        timeElement.textContent = timeFormatted;
    }
    
    // Update the date and time every second
    setInterval(updateDateTime, 1000);
    
    // Initial update
    updateDateTime();
});