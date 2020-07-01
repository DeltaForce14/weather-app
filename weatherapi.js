// API Wesbite https://openweathermap.org/

class Weather {
    constructor(){
        this.apiKey = "be5a9399b9aeb33c5f8bee90003d9da9";
        this.city = city;
        this.state = state;
    }

    
    // fetch data from https://openweathermap.org/
    async getWeather(){
        const weatherResponseCel = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&${this.state}&appid=${this.apiKey}`);

        const weatherData = await weatherResponseCel.json();

        return {
            weather: weatherData
        }
    };

    // change location from user's input
    // updates location in Weather constructor
    changeLocation(city,state){
        this.city = city;
        this.state = state;
    }
};

