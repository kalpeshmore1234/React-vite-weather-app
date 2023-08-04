import "./App.css";
import { useState } from "react";

const api = {
  key: "876ded4afd4947bc236b64d1eb40acb5",
  base:"https://api.openweathermap.org/data/2.5/",
}

function App(){
    const [search, setSearch]= useState("");
    const [weather, setWeather] = useState({});

    const searchPressed = () =>{
       fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
       .then(res => res.json())
       .then(result => {
        console.log(result)
         setWeather(result)
       })
    }

    return(
      <div className="App">
          
          <div className="content">
          {/* Header */}
          <h1>Weather app</h1>

          {/* Search box: Input + button */}
          <div className="input-box">
            <input 
              type="text"
              placeholder="Enter city..."
              onChange={(e) => setSearch(e.target.value)}
               />
              
            <button onClick={searchPressed}>Submit</button>
          </div>
           
          
          {typeof weather.weather != "undefined" ? 
          (
              <div className="info-box">
                {/* Location */}
                <p className="ans">{weather.name}</p>

                {/* Tempreture celcius */}
                <p className="ans">{weather?.main?.temp}°C</p>

                {/* condition */}

                <p className="ans">{weather?.weather[0]?.main}</p>
                <p className="ans">({weather?.weather[0]?.description})</p>
            </div>

          ) : ("")
          }
          </div>
      </div>
    )

}

export default App;