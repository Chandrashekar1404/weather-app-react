
import axios from 'axios'

// OpenWeather API key
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

// Base URL
const BASE_URL = "https://api.openweathermap.org/data/2.5"


// Get current weather using city name
export async function getCurrentWeather(city) {

    const response = await axios.get(`${BASE_URL}/weather`, {

        params: {
            q: city,
            appid: API_KEY,
            units: "metric"
        }

    })

    return response.data

}


// Get forecast using city name
export async function getForecast(city) {

    const response = await axios.get(`${BASE_URL}/forecast`, {

        params: {
            q: city,
            appid: API_KEY,
            units: "metric"
        }

    })

    return response.data

}


// Get current weather using latitude and longitude
export async function getCurrentWeatherByCoordinates(latitude, longitude) {

    const response = await axios.get(`${BASE_URL}/weather`, {

        params: {
            lat: latitude,
            lon: longitude,
            appid: API_KEY,
            units: "metric"
        }

    })

    return response.data

}


// Get forecast using latitude and longitude
export async function getForecastByCoordinates(latitude, longitude) {

    const response = await axios.get(`${BASE_URL}/forecast`, {

        params: {
            lat: latitude,
            lon: longitude,
            appid: API_KEY,
            units: "metric"
        }

    })

    return response.data

}
