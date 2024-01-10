import { useEffect, useState } from "react";
import HomeButton from "../components/HomeButton";

type ListItemType = {
    id: number;
    name: string;
    sys: {
        country: string;
    };
    coord: {
        lat: number;
        lon: number;
    };
    main: {
        temp: number;
        feels_like: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
    };
};

const Challenge1 = () => {
    const [city, setCity] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [blocking, setBlocking] = useState(false);
    const [searchList, setSearchList] = useState<ListItemType[]>([]);
    const [selectedCity, setSelectedCity] = useState<ListItemType | null>(null);

    const handleSearch = async () => {
        if (!city) {
            // NOTE: Use Toast or Snackbar on future update
            alert("Please input city first");
            return;
        }
        setBlocking(true);
        try {
            const apiKey = process.env.REACT_APP_API_KEY;
            const apiUrl = `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=${apiKey}&units=metric`;

            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error("Failed to fetch weather data");
            }

            const data = await response.json();
            setSearchList(data.list);
            setIsDropdownOpen(true);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
        setBlocking(false);
    };

    useEffect(() => {
        if (!city) {
            setSearchList([]);
        }
    }, [city]);

    const handleSelect = (id: number) => {
        setIsDropdownOpen(false);
        const selected = searchList.find((o) => o.id === id);
        if (selected) {
            setSelectedCity(selected);
        }
    };

    return (
        <div className="weather-container">
            <h1 className="weather-title">Weather App</h1>
            <div className="search-container">
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Search City"
                        className="weather-input"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    {city && searchList?.length && isDropdownOpen ? (
                        <div className="list-search-container">
                            {searchList.map((item, index) => (
                                <div
                                    key={`list-${index}`}
                                    className="list-search-item"
                                    onClick={() => handleSelect(item.id)}
                                >
                                    <span>
                                        {item.name}, {item.sys.country}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
                <button
                    disabled={blocking}
                    className="btn btn-primary"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
            {selectedCity && (
                <div className="weather-detail-container">
                    <span className="weather-detail-title">
                        {selectedCity?.name}, {selectedCity?.sys.country}
                    </span>
                    <span className="weather-detail-temp">28&deg;C</span>
                    <span>
                        Feels like {selectedCity?.main.feels_like.toFixed(0)}
                        &deg;C
                    </span>
                    <div className="list-detail">
                        <ul className="ul-list-detail">
                            <li>Lat: {selectedCity?.coord.lat}</li>
                            <li>Lon: {selectedCity?.coord.lon}</li>
                            <li>Humidity: {selectedCity?.main.humidity}%</li>
                            <li>Pressure: {selectedCity?.main.pressure}hPa</li>

                            <li>
                                Sea Level: {selectedCity?.main.sea_level ?? "-"}
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            <HomeButton />
        </div>
    );
};

export default Challenge1;
