document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key from OpenWeatherMap
    const city = 'Bengaluru';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherData = document.getElementById('weather-data');
            weatherData.innerHTML = `
                <strong>Temperature:</strong> ${data.main.temp}°C<br>
                <strong>Weather:</strong> ${data.weather[0].description}<br>
                <strong>Humidity:</strong> ${data.main.humidity}%<br>
                <strong>Wind Speed:</strong> ${data.wind.speed} m/s
            `;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
});
