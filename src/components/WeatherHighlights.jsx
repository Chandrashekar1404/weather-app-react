
export default function WeatherHighlights(props) {

    const weather = props.weather


    // Convert sunrise timestamp into local city time
    const sunriseDate = new Date(
        (weather.sys.sunrise + weather.timezone) * 1000
    )

    const sunrise = sunriseDate.toISOString().slice(11, 16)


    // Convert sunset timestamp into local city time
    const sunsetDate = new Date(
        (weather.sys.sunset + weather.timezone) * 1000
    )

    const sunset = sunsetDate.toISOString().slice(11, 16)


    return (

        <div className="mt-12">

            <div className="flex items-center justify-between mb-6">

                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                    Today's Highlights
                </h2>

                <p className="text-sm text-slate-400 dark:text-slate-500">
                    Weather Details
                </p>

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">


                {/* Feels Like */}

                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm hover:shadow-lg transition border border-slate-100 dark:border-slate-800">

                    <p className="text-slate-500 dark:text-slate-400">🌡️ Feels Like</p>

                    <h3 className="text-3xl font-bold text-slate-800 dark:text-white mt-4">

                        {Math.round(weather.main.feels_like)}°C

                    </h3>

                </div>


                {/* Humidity */}

                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm hover:shadow-lg transition border border-slate-100 dark:border-slate-800">

                    <p className="text-slate-500 dark:text-slate-400">💧 Humidity</p>

                    <h3 className="text-3xl font-bold text-slate-800 dark:text-white mt-4">

                        {weather.main.humidity}%

                    </h3>

                </div>


                {/* Wind Speed */}

                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm hover:shadow-lg transition border border-slate-100 dark:border-slate-800">

                    <p className="text-slate-500 dark:text-slate-400">💨 Wind Speed</p>

                    <h3 className="text-3xl font-bold text-slate-800 dark:text-white mt-4">

                        {weather.wind.speed} m/s

                    </h3>

                </div>


                {/* Pressure */}

                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm hover:shadow-lg transition border border-slate-100 dark:border-slate-800">

                    <p className="text-slate-500 dark:text-slate-400">🌍 Pressure</p>

                    <h3 className="text-3xl font-bold text-slate-800 dark:text-white mt-4">

                        {weather.main.pressure} hPa

                    </h3>

                </div>


                {/* Visibility */}

                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm hover:shadow-lg transition border border-slate-100 dark:border-slate-800">

                    <p className="text-slate-500 dark:text-slate-400">👁️ Visibility</p>

                    <h3 className="text-3xl font-bold text-slate-800 dark:text-white mt-4">

                        {(weather.visibility / 1000).toFixed(1)} km

                    </h3>

                </div>


                {/* Sunrise and Sunset */}

                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm hover:shadow-lg transition border border-slate-100 dark:border-slate-800">

                    <p className="text-slate-500 dark:text-slate-400">🌅 Sunrise / 🌇 Sunset</p>

                    <div className="flex justify-between mt-4">

                        <div>

                            <p className="text-xs text-slate-400">Sunrise</p>

                            <h3 className="text-xl font-bold text-slate-800 dark:text-white">

                                {sunrise}

                            </h3>

                        </div>


                        <div>

                            <p className="text-xs text-slate-400">Sunset</p>

                            <h3 className="text-xl font-bold text-slate-800 dark:text-white">

                                {sunset}

                            </h3>

                        </div>

                    </div>

                </div>


            </div>

        </div>

    )

}
