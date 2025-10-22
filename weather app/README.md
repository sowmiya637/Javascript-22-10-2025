
# Real-Time Weather App 🌤️

A simple **Real-Time Weather App** built using **HTML, CSS, and JavaScript** that fetches weather data for any city in real-time using the **Open-Meteo API**.  


## Concept

This project demonstrates **real-time weather fetching** for any city. It uses the following concepts:

1. **Frontend Development**: HTML for structure, CSS for styling, and JavaScript for interactivity.
2. **APIs (Application Programming Interfaces)**: The app fetches real-time data from **Open-Meteo** and **Open-Meteo Geocoding API**.
3. **Asynchronous JavaScript**: Uses `async/await` and `fetch()` to make API requests.
4. **DOM Manipulation**: Updates the webpage dynamically based on user input and API response.
5. **Error Handling**: Provides feedback if the city is invalid or if an error occurs during data fetching.

---

## Features

- Fetches current weather for any city.
- Displays temperature, wind speed, and the timestamp of the weather data.
- Responsive and clean user interface with a modern gradient background.
- User-friendly error messages for invalid input or network issues.

---

## Technologies Used

- **HTML5** – Markup for structure.
- **CSS3** – Styling and layout.
- **JavaScript (ES6+)** – Logic, API calls, and DOM manipulation.
- **Open-Meteo API** – Provides weather data.
- **Open-Meteo Geocoding API** – Converts city name into latitude and longitude.

---

## How It Works

1. The user enters a city name in the input box and clicks **Get Weather**.
2. The app sends a request to **Open-Meteo Geocoding API** to fetch the latitude and longitude of the city.
3. Using the latitude and longitude, the app requests the current weather from **Open-Meteo Weather API**.
4. The weather information (temperature, wind speed, and time) is displayed dynamically on the page.
5. If the city is not found or an error occurs, an appropriate error message is shown.


