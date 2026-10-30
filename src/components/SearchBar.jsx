
import { useState } from 'react'

export default function SearchBar(props) {

    const [city, setCity] = useState("")


    // Handle input changes
    function handleChange(event) {

        setCity(event.target.value)

    }


    // Search city
    function handleSearch() {

        if (city.trim() !== "" && !props.loading) {

            props.searchCity(city.trim())

        }

    }


    // Clear input
    function clearSearch() {

        setCity("")

    }


    return (

        <div className="max-w-2xl mx-auto mt-10">

            <div className="flex flex-wrap items-center bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-2 gap-2">


                {/* Search Icon */}

                <span className="text-2xl px-3">

                    🔍

                </span>


                {/* Input */}

                <input

                    type="text"

                    value={city}

                    onChange={handleChange}

                    placeholder="Search any city..."

                    onKeyDown={(event) => {

                        if (event.key === "Enter") {

                            handleSearch()

                        }

                    }}

                    className="flex-1 min-w-0 outline-none text-slate-700 dark:text-white dark:bg-slate-900 placeholder:text-slate-400 py-3"

                />


                {/* Clear Button */}

                {city !== "" && (

                    <button

                        onClick={clearSearch}

                        type="button"

                        className="text-slate-400 hover:text-red-500 px-2 text-xl"

                    >

                        ×

                    </button>

                )}


                {/* Search Button */}

                <button

                    onClick={handleSearch}

                    disabled={props.loading || city.trim() === ""}

                    className="bg-sky-500 hover:bg-sky-600 disabled:bg-slate-400 text-white px-5 py-3 rounded-xl font-semibold transition"

                >

                    Search

                </button>


                {/* Current Location Button */}

                <button

                    onClick={props.getLocation}

                    disabled={props.loading}

                    className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-400 text-white px-5 py-3 rounded-xl font-semibold transition"

                >

                    📍 My Location

                </button>


            </div>


            <p className="text-center text-slate-400 dark:text-slate-500 text-sm mt-3">

                Search a city or use your current location

            </p>


        </div>

    )

}
