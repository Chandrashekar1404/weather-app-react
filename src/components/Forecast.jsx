
export default function Forecast(props) {

    const forecast = props.forecast

    const timezone = forecast.city.timezone

    const groupedForecast = {}


    // Group forecast records by date
    forecast.list.forEach(function (item) {

        const localDate = new Date(
            (item.dt + timezone) * 1000
        )

        const dateKey = localDate.toISOString().split("T")[0]

        const hour = localDate.getUTCHours()


        if (!groupedForecast[dateKey]) {

            groupedForecast[dateKey] = item

        }

        else {

            const previousItem = groupedForecast[dateKey]

            const previousDate = new Date(
                (previousItem.dt + timezone) * 1000
            )

            const previousHour = previousDate.getUTCHours()


            if (Math.abs(hour - 12) < Math.abs(previousHour - 12)) {

                groupedForecast[dateKey] = item

            }

        }

    })


    const dailyForecast = Object.values(groupedForecast).slice(0, 5)


    return (

        <div className="mt-12">

            <div className="mb-6">

                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                    5-Day Forecast
                </h2>

                <p className="text-slate-400 dark:text-slate-500 mt-1">
                    Weather predictions for upcoming days
                </p>

            </div>


            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">


                {dailyForecast.map(function (item, index) {

                    const localDate = new Date(
                        (item.dt + timezone) * 1000
                    )


                    const day = localDate.toLocaleDateString("en-IN", {

                        weekday: "short",

                        day: "numeric",

                        month: "short",

                        timeZone: "UTC"

                    })


                    const iconCode = item.weather[0].icon

                    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`


                    return (

                        <div

                            key={index}

                            className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 text-center border border-slate-100"


                        >

                            {/* Date */}

                            <h3 className="text-lg font-bold text-slate-700">

                                {day}

                            </h3>


                            {/* Weather Icon */}

                            <img

                                src={iconUrl}

                                alt={item.weather[0].description}

                                className="w-20 h-20 mx-auto"

                            />


                            {/* Weather Condition */}

                            <p className="text-sm text-slate-500 capitalize">

                                {item.weather[0].description}

                            </p>


                            {/* Temperature */}

                            <h2 className="text-3xl font-bold text-slate-800 mt-3">

                                {Math.round(item.main.temp)}°C

                            </h2>


                            <p className="text-xs text-slate-400 mt-2">

                                Feels like {Math.round(item.main.feels_like)}°C

                            </p>


                            {/* Rain Probability */}

                            <div className="mt-5 bg-sky-50 rounded-xl p-3">

                                <p className="text-sky-600 text-sm font-semibold">

                                    💧 Rain Probability

                                </p>

                                <p className="text-slate-700 font-bold mt-1">

                                    {Math.round(item.pop * 100)}%

                                </p>

                            </div>


                        </div>

                    )

                })}


            </div>

        </div>

    )

}
