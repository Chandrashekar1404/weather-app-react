
export default function CurrentWeather(props) {

    const weather = props.weather

    const iconCode = weather.weather[0].icon

    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`


    // Get current date
    const today = new Date()

    const date = today.toLocaleDateString("en-IN", {

        weekday: "long",

        day: "numeric",

        month: "long"

    })


    return (

        <div className="mt-10 bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden relative">


            {/* Decorative Circle */}

            <div className="absolute w-64 h-64 bg-white opacity-5 rounded-full -right-20 -top-20"></div>


            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">


                {/* Left Section */}

                <div className="text-center md:text-left">

                    <p className="text-sky-100 text-sm uppercase tracking-widest">

                        Current Weather

                    </p>


                    <h2 className="text-3xl md:text-4xl font-bold mt-3">

                        {weather.name}, {weather.sys.country}

                    </h2>


                    <p className="text-sky-100 mt-3">

                        {date}

                    </p>


                    <div className="mt-8">

                        <p className="text-2xl font-semibold capitalize">

                            {weather.weather[0].description}

                        </p>

                        <p className="text-sky-100 mt-2">

                            🌡️ Feels like {Math.round(weather.main.feels_like)}°C

                        </p>

                    </div>

                </div>


                {/* Right Section */}

                <div className="flex items-center gap-3">

                    <img

                        src={iconUrl}

                        alt={weather.weather[0].description}

                        className="w-36 h-36 md:w-44 md:h-44 drop-shadow-lg"

                    />


                    <div>

                        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">

                            {Math.round(weather.main.temp)}°

                        </h1>

                        <p className="text-sky-100 text-xl mt-2">

                            Celsius

                        </p>

                    </div>

                </div>


            </div>

        </div>

    )

}
