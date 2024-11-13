export default class WeatherApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
    }

    async getWeatherData(city) {
        try {
            const response = await fetch(`${this.baseUrl}?q=${city}&units=metric&appid=${this.apiKey}`);
            
            if (!response.ok) {
                throw new Error(`City not found: ${response.statusText}`);
            }
    
            const data = await response.json();
    
            return {
                cityName: data.name,
                temperature: data.main.temp,
            };
        } catch (error) {
            console.error("Error fetching weather data:", error);
            throw error;
        }
}}