const apiKey = "3410331fc4a1016888540a0e72810e4a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const inputBox = document.querySelector(".input");
const btnBox = document.querySelector(".button");
const weatherImg = document.querySelector(".wheather-icon");


async function showWeather(city){
    let response = await fetch(`${apiUrl} ${city} &appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    if(response.status === 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        document.querySelector(".main").innerHTML = `'${data.weather[0].main}'`;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main === "Clouds"){
            weatherImg.src = "clouds.png";
        }else if(data.weather[0].main === "Clear"){
            weatherImg.src = "clear.png";
        }else if(data.weather[0].main === "Drizzle"){
            weatherImg.src = "drizzle.png";
        }else if(data.weather[0].main === "Mist"){
            weatherImg.src = "mist.png"
        }else if(data.weather[0].main === "Rain"){
            weatherImg.src = "rain.png"
        }else if(data.weather[0].main === "Snow" || data.weather[0].main === "Haze"){
            weatherImg.src = "snow.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

    
}


btnBox.addEventListener("click", function(){
    showWeather(inputBox.value)
})