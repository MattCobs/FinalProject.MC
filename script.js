document.getElementById('searchBtn').addEventListener('click', function() {
    var locationInput = document.getElementById('locationInput').value;
    if (locationInput.trim() !== '') {
        fetchWeather(locationInput);
    } else {
        alert('Please enter a city or zip code.');
    }
});

