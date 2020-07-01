// UI object. 

class UI {

    constructor(){
        this.locationPlaceholder = document.getElementById('w-location');
        this.descriptionPlaceholder = document.getElementById('w-description');
        this.temperaturePlaceholder = document.getElementById('w-string');
        this.humidityPlaceholder = document.getElementById('w-humidity');
        this.sunRiseSetPlaceholder = document.getElementById('sun');
        this.feelsLikePlaceholder = document.getElementById('feels-like');
        this.windPlaceholder = document.getElementById('wind');
    }

    showWeather(weather){
        //Location
        this.locationPlaceholder.textContent = weather.name;
        
        //Description
        let output = '';
        weather.weather.forEach((item)=>
         output += `<img src=http://openweathermap.org/img/wn/${item.icon}@2x.png>${item.main}`
         )

        this.descriptionPlaceholder.innerHTML = output;

        //Sunrise / Sunset
        const options = {
            hour:  "2-digit",
            minute: "2-digit",
           second: "2-digit"
         }

        let sunrise = new Date((weather.sys.sunrise * 1000)).toLocaleString('en-US', options);
        let sunset = new Date((weather.sys.sunset * 1000)).toLocaleString('en-US', options);

        this.sunRiseSetPlaceholder.textContent = `Sunrise: ${sunrise} / Sunset: ${sunset}`;

        //Temperature 
        const CELSIUS = "&#8451";
        let temperature = Math.round(weather.main.temp);
        this.temperaturePlaceholder.innerHTML = `${temperature} ${CELSIUS}`;

        //Humidity
        this.humidityPlaceholder.textContent = `Humidity: ${weather.main.humidity}%`

        //Feels Like
        let feelsLike = Math.round(weather.main.feels_like);
        this.feelsLikePlaceholder.innerHTML= `Feels Like: ${feelsLike} ${CELSIUS}`

        //Wind
        this.windPlaceholder.textContent = `Wind: ${weather.wind.speed} meter/sec`;

        
        console.log(weather);
    }
}

