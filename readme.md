# Weather Dashboard

This is a simple weather dashboard that allows users to check the weather of any city by entering the city name or using their current location. The app fetches weather data from the OpenWeatherMap API and displays temperature, weather conditions, and wind speed.

## Features

- Search for weather by city name.
- Get weather for current location using geolocation.
- Displays temperature, condition, and wind speed.
- Responsive design for mobile and desktop.

## Installation & Setup

### Prerequisites

- A web browser (Chrome, Firefox, Edge, etc.).
- A valid OpenWeatherMap API key (replace in `app.js`).

### Steps to Run

1. Clone or download the repository.
2. Ensure you have an active internet connection to fetch weather data.
3. Replace the `apiKey` in `app.js` with your OpenWeatherMap API key.
4. Open `index.html` in a web browser.

## File Structure

- `index.html` - Main HTML file containing the UI.
- `app.js` - JavaScript file handling API requests and interactions.
- `styles.css` - CSS file for styling the app.

## How It Works

1. Enter a city name and click "Search" to get the weather.
2. Click "Use My Location" to fetch weather using geolocation.
3. Weather details will be displayed below the search bar.

## API Key Setup

This app uses the OpenWeatherMap API. To get an API key:

1. Visit [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) and sign up.
2. Get your API key from the dashboard.
3. Replace the `apiKey` variable in `app.js` with your key.
