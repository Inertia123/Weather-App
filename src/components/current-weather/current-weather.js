import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather" >
            <div className="right" >
                <h1 className="city">Other Detalis</h1>
                <div className="para">
                    <span className="parameter label">Feels Like:</span>
                    <span className="parameter value">18°C</span>
                </div>
                <div className="para">
                    <span className="parameter label">Wind:</span>
                    <span className="parameter value">2 m/s</span>
                </div>
                <div className="para">
                    <span className="parameter label">Humidity:</span>
                    <span className="parameter value">15%</span>
                </div>
                <div className="para">
                    <span className="parameter label">Pressure:</span>
                    <span className="parameter value">18 hPa</span>
                </div>
            </div>
            <div className="left" >
                <h1 className="city">Bhubaneswar</h1>
                <div className="datetime">
                <p>12-01-2023</p>
                <p>12:00 AM</p>
                </div>
                <div className="temp">
                    <p className="temperature">20°</p>
                    <div className="pictorial">
                        <img alt="weather" className="weather-icon" src="icons/01d.png"/>
                        <p className="weather-description">Sunny</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CurrentWeather