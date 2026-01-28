let weatherInput = document.getElementById("weatherInput");
let weatherForm = document.getElementById("weatherForm");
// let searchButton = document.getElementById("searchButton");
let response = document.getElementById("response");

weatherForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(weatherInput.value != ""){
        weatherForecast(weatherInput.value.trim());
    }
    else{
        alert("Please Enter a city");
    }

});

weatherForecast("Sukkur");

function weatherForecast(city){
        let apiUrl = `http://api.weatherapi.com/v1/current.json?key=414bfed570924542aff45116262701&q=${city}`;
        fetch(apiUrl).then((res)=>res.json())
        .then((res)=>{
            response.innerHTML=`
             <h2>${res.location.name}</h2>
            <span>${res.location.region},${res.location.country}</span>
            <span>Local Time: ${res.location.localtime}</span>
            <img src="${res.current.condition.icon}" alt="icon" id="weatherIcon">
            <h3>${res.current.temp_c}°C</h3>
            <h4>${res.current.condition.text}</h4>
            <div class="cardContainer">
           <div class="card">
           <span>feels like</span>
           <span>${res.current.feelslike_c}°C</span>
           </div>
           <div class="card">
            <span>humidity</span>
            <span>${res.current.humidity}%</span>
           </div>
           <div class="card">
            <span>wind speed</span>
            <span>${res.current.wind_kph} km/h</span>
           </div>
           <div class="card">
            <span>visibility</span>
            <span>${res.current.vis_km} km</span>
           </div>
           </div>
            `;
        });
}