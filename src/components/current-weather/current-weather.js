import "./current-weather.css"

const CurrentWeather = () => {
    return (
        <div className="weather" >
            <div className="right" >
                
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
                        <img alt="weather" className="weather-icon" src=""/>
                        <p className="weather-description">Sunny</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CurrentWeather