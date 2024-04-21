document.getElementById('searchBtn').addEventListener('click', function() {
    var locationInput = document.getElementById('locationInput').value;
    if (locationInput.trim() !== '') {
        fetchWeather(locationInput);
    } else {
        alert('Please enter a city or zip code.');
    }
});

function fetchWeather(location) {
    var apiKey = 'YOUR_API_KEY';
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again later.');
        });
}

function displayWeather(data) {
    var weatherResult = document.getElementById('weatherResult');
    weatherResult.innerHTML = '';

    var cityName = data.name;
    var temperature = data.main.temp;
    var description = data.weather[0].description;

    var weatherInfo = document.createElement('div');
    weatherInfo.classList.add('weather-info');
    weatherInfo.innerHTML = `
        <h2>${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
    `;

    weatherResult.appendChild(weatherInfo);
}
