const apiKey = "7cf0d33ab013ba7ac672461bdfde6ab9"; // Replace with your OpenWeatherMap API key

const apiUrl = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// Fetch weather data
const fetchWeather = async (city) => {
  try {
    const response = await fetch(apiUrl(city));
    if (!response.ok) {
      throw new Error("City not found or API request failed");
    }
    const data = await response.json();
    console.log("DATA == ", data);
    return data;
  } catch (error) {
    console.error(error);
    displayError(error.message);
  }
};

const formatWeatherData = (data) => ({
  city: data.name,
  temperature: data.main.temp,
  description: data.weather[0].description,
  windSpeed: data.wind.speed,
  icon: data.weather[0].icon,
});

// Display weather data
const displayWeather = (weatherData) => {
  const weatherInfo = document.getElementById("weather-info");
  weatherInfo.innerHTML = `
        <h2>${weatherData.city}</h2>
        <img src="http://openweathermap.org/img/wn/${weatherData.icon}.png" alt="${weatherData.description}" class="weather-icon" />
        <p>Temperature: ${weatherData.temperature}°C</p>
        <p>Condition: ${weatherData.description}</p>
        <p>Wind Speed: ${weatherData.windSpeed} m/s</p>
    `;
};

const displayError = (message) => {
  const weatherInfo = document.getElementById("weather-info");
  weatherInfo.innerHTML = `<p class="error">${message}</p>`;
};

// Fetch and display weather for a given city
const fetchAndDisplayWeather = async (city) => {
  const weatherData = await fetchWeather(city);
  if (weatherData) {
    const formattedData = formatWeatherData(weatherData);
    displayWeather(formattedData);
  }
};

// Get weather for the user's current location using geolocation
const getLocationWeather = async () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const locationApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        const response = await fetch(locationApiUrl);
        const data = await response.json();
        const formattedData = formatWeatherData(data);
        displayWeather(formattedData);
      },
      (error) => {
        displayError("Unable to retrieve location");
      }
    );
  } else {
    displayError("Geolocation not supported by your browser");
  }
};

document.getElementById("search-btn").addEventListener("click", () => {
  const city = document.getElementById("city").value;
  if (city) {
    fetchAndDisplayWeather(city);
  } else {
    displayError("Please enter a city");
  }
});

document
  .getElementById("geolocation-btn")
  .addEventListener("click", getLocationWeather);
