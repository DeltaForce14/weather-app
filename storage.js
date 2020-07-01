class Storage {
    constructor(){
        this.city;
        this.state;
        this.defaultCity = "London";
        this.defaultState = "";
    }

    getLocationData(){
        // if city inthe storage is null set city to default city
        // else set city to whatever is in the local storage
        
            if(localStorage.getItem('city') === ""){
                this.city = this.defaultCity;
           } else {
                this.city = localStorage.getItem('city');
           }
   
           if(localStorage.getItem('state') === null){
               this.state = this.defaultState;
           } else {
               this.state = localStorage.getItem('state')
           }
   
           return {
               city: this.city,
               state: this.state
           }     
    } 

    setLocationData(city, state){
        localStorage.setItem("city", city);
        localStorage.setItem("state", state);
    }
}