import WeatherApi from './api/WeatherApi';
import Emoji from './UI/emojiUi';
import TemperatureUtils from './utils/temperatureUtils';

const api = new WeatherApi('858684dd9e19a3e72fba1c64f40b1dee');

document.getElementById('getWeather').addEventListener('click', async () => {
    const city = document.getElementById('city').value;

    try {
        const weatherData = await api.getWeatherData(city);

        document.getElementById('cityName').textContent = `${weatherData.cityName}`;

        const tempFahrenheit = TemperatureUtils.toFahrenheit(weatherData.temperature);

        document.getElementById('temperature').textContent = `${weatherData.temperature}°C (${tempFahrenheit}°F)`;

        document.getElementById('emoji').textContent = `${Emoji.getEmoji(weatherData.temperature)}`;

    } catch (error) {

        console.error("Error fetching weather data:", error);
        document.getElementById('cityName').textContent = "City not found. Please try again.";
        document.getElementById('temperature').textContent = "";
        document.getElementById('emoji').textContent = "";
    }
});