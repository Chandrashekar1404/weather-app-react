
export default function Navbar(props) {

    return (

        <nav className="bg-slate-950 dark:bg-black text-white shadow-lg">

            <div className="max-w-7xl mx-auto px-5 py-5 flex items-center justify-between">

                {/* Logo */}

                <div className="flex items-center gap-3">

                    <div className="bg-sky-500 p-2 rounded-xl text-2xl">

                        🌤️

                    </div>

                    <div>

                        <h1 className="text-2xl font-bold">

                            Weather<span className="text-sky-400">Now</span>

                        </h1>

                        <p className="text-xs text-slate-400">

                            Your daily weather companion

                        </p>

                    </div>

                </div>


                {/* Navigation */}

                <div className="hidden md:flex items-center gap-8">

                    <a href="#" className="text-sky-400 font-semibold">

                        Dashboard

                    </a>

                    <a href="#highlights" className="text-slate-300 hover:text-white">

                        Highlights

                    </a>

                    <a href="#forecast" className="text-slate-300 hover:text-white">

                        Forecast

                    </a>

                </div>


                {/* Theme Toggle Button */}

                <button

                    onClick={props.toggleTheme}

                    className="bg-slate-800 hover:bg-slate-700 px-4 py-3 rounded-xl transition flex items-center gap-2"

                >

                    <span className="text-xl">

                        {props.darkMode ? "☀️" : "🌙"}

                    </span>

                    <span className="hidden sm:block text-sm font-semibold">

                        {props.darkMode ? "Light Mode" : "Dark Mode"}

                    </span>

                </button>


            </div>

        </nav>

    )

}
