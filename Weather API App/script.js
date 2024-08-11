document.addEventListener('DOMContentLoaded', () => {
    const apikey = `1c988205d90c19b98d6b7126ef6807d4`;
    const city = 'Bhubaneswar';
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;

    function fetchWeather() {
        fetch(apiurl)
        .then(response => response.json())
        .then(data => {
            updateWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:',error);
            const weatherContainer = document.getElementById('weather');
            weatherContainer.innerHTML='Failed to weather data. Please try again!';
        });
    }

    function updateWeather(data) {
        const weatherIcon = document.getElementById('weatherIcon');
        const temperature = document.getElementById('temperature');
        const description = document.getElementById('description');

        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = data.weather[0].description;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        description.textContent =  data.weather[0].description;

        const cityName = data.name;
        const weatherTitle = document.querySelector('#weather h2');
        weatherTitle.textContent = `Weather in ${cityName}`;
    }

    fetchWeather();
});