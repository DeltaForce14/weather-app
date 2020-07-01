// Initiate new weather object
// default city is passed on once the app is opened
const weather = new Weather;

// Initiate new UI object 
const ui = new UI;

// Initiate new UI object 
const storage = new Storage;


// UI buttons 
const saveChangesBtn = document.querySelector('#w-change-btn');


// Fetch data and push it to UI
function getDefaultWeather(){
    weather.getWeather()
    .then(data => ui.showWeather(data.weather))
    .catch(err => console.log("An Error Accured:", err))
}

// DOM LOAD START 
// Set default city when website loads, fetch the last entry from storage
weather.changeLocation(storage.getLocationData().city, storage.getLocationData().state);

//Event Listener DOM LOAD
document.addEventListener('DOMContentLoaded', getDefaultWeather);
// DOM LOAD END 


//Event Listeners SAVE CHANGES BUTTON
saveChangesBtn.addEventListener('click', (event) => {
    // UI input 
    const cityInputUI = document.querySelector('#city').value;
    const stateCodeInputUI = document.querySelector('#state').value;
    weather.changeLocation(cityInputUI,stateCodeInputUI);

    //store city and state in local storage
    storage.setLocationData(cityInputUI,stateCodeInputUI);
    storage.getLocationData();

    // get and display weather
    getDefaultWeather();

    //Close modal, we need to use jquery as we are using bootstrap
    $('#locModal').modal('hide');
    

});





