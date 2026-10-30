
import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'

import SearchBar from './components/SearchBar'

import CurrentWeather from './components/CurrentWeather'

import WeatherHighlights from './components/WeatherHighlights'

import Forecast from './components/Forecast'

import {
    getCurrentWeather,
    getForecast,
    getCurrentWeatherByCoordinates,
    getForecastByCoordinates
} from './services/weatherService'


function App() {

    // Current weather state
    const [weather, setWeather] = useState(null)

    // Forecast state
    const [forecast, setForecast] = useState(null)

    // Loading state
    const [loading, setLoading] = useState(false)

    // Error state
    const [error, setError] = useState("")


    // Theme state
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    )


    // Search weather using city name
    async function handleSearch(city) {

        try {

            setLoading(true)

            setError("")

            const weatherData = await getCurrentWeather(city)

            const forecastData = await getForecast(city)

            setWeather(weatherData)

            setForecast(forecastData)

        }

        catch (error) {

            console.log(error)

            setWeather(null)

            setForecast(null)

            setError("Unable to fetch weather information. Please try another city.")

        }

        finally {

            setLoading(false)

        }

    }


    // Get weather using current location
    function handleCurrentLocation() {

        // Check browser geolocation support
        if (!navigator.geolocation) {

            setError("Geolocation is not supported by your browser.")

            return

        }


        // Start loading
        setLoading(true)

        setError("")


        // Get user's current position
        navigator.geolocation.getCurrentPosition(

            // Success callback
            async function (position) {

                try {

                    // Get latitude
                    const latitude = position.coords.latitude

                    // Get longitude
                    const longitude = position.coords.longitude


                    // Fetch current weather
                    const weatherData = await getCurrentWeatherByCoordinates(
                        latitude,
                        longitude
                    )


                    // Fetch forecast
                    const forecastData = await getForecastByCoordinates(
                        latitude,
                        longitude
                    )


                    // Update states
                    setWeather(weatherData)

                    setForecast(forecastData)

                }

                catch (error) {

                    console.log(error)

                    setWeather(null)

                    setForecast(null)

                    setError("Unable to fetch weather for your location.")

                }

                finally {

                    setLoading(false)

                }

            },


            // Error callback
            function (error) {

                console.log(error)

                if (error.code === 1) {

                    setError("Location permission denied. Please allow location access in your browser.")

                }

                else if (error.code === 2) {

                    setError("Your current location is unavailable. Please try again.")

                }

                else if (error.code === 3) {

                    setError("Location request timed out. Please try again.")

                }

                else {

                    setError("Unable to detect your current location.")

                }

                setLoading(false)

            },


            // Geolocation options
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }

        )

    }


    // Save theme
    useEffect(() => {

        localStorage.setItem(
            "theme",
            darkMode ? "dark" : "light"
        )

    }, [darkMode])


    // Load default city
    useEffect(() => {

        handleSearch("Hyderabad")

    }, [])


    // Toggle theme
    function toggleTheme() {

        setDarkMode(!darkMode)

    }


    return (

        <div className={darkMode ? "dark" : ""}>

            <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-white transition-colors duration-300">

                <Navbar
                    darkMode={darkMode}
                    toggleTheme={toggleTheme}
                />


                <main className="max-w-7xl mx-auto px-5 py-10">


                    {/* Dashboard Heading */}

                    <div className="text-center">

                        <p className="text-sky-600 dark:text-sky-400 font-semibold tracking-widest uppercase text-sm">

                            Weather Overview

                        </p>


                        <h1 className="text-4xl md:text-5xl font-bold mt-3">

                            Weather Dashboard

                        </h1>


                        <p className="text-slate-500 dark:text-slate-400 mt-3">

                            Stay updated with weather conditions around the world.

                        </p>

                    </div>


                    {/* Search Bar */}

                    <SearchBar

                        searchCity={handleSearch}

                        getLocation={handleCurrentLocation}

                        loading={loading}

                    />


                    {/* Loading */}

                    {loading && (

                        <div className="text-center mt-10 text-sky-600 dark:text-sky-400 font-semibold animate-pulse">

                            Fetching weather information...

                        </div>

                    )}


                    {/* Error */}

                    {error !== "" && (

                        <div className="max-w-2xl mx-auto mt-8 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 p-4 rounded-xl text-center">

                            {error}

                        </div>

                    )}


                    {/* Weather Dashboard */}

                    {weather !== null && !loading && (

                        <div className="mt-8">

                            <CurrentWeather weather={weather} />


                            <div id="highlights">

                                <WeatherHighlights weather={weather} />

                            </div>


                            {forecast !== null && (

                                <div id="forecast">

                                    <Forecast forecast={forecast} />

                                </div>

                            )}

                        </div>

                    )}


                    {/* Footer */}

                    <footer className="text-center text-slate-400 dark:text-slate-500 text-sm mt-16 pb-5">

                        WeatherNow © 2026 | Powered by OpenWeather

                    </footer>


                </main>

            </div>

        </div>

    )

}

export default App
