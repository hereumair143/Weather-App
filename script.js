const cityInput =document.querySelector("#cityInput");
const btn = document.querySelector("#btn")
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");



const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=Noida&appid=5f3ca6335f4b0fec4b09a6ffbf3f4c07`

btn.addEventListener('click', async function city (Event){  
    Event.preventDefault()
    console.log(cityInput.value);
    

    const response = await fetch(url + city + {method:'GET'});
    let result;
    if(response.ok){                              
         result = await response.json();
        console.log(result)
    }else{
        console.log("error: ",response);
    }

    searchBtn.addEventListener("click", ()=>{
        console.log(result)

    }) 

    document.querySelector(".City").innerHTML = result.name;
    document.querySelector(".temp").innerHTML = Math.round(result.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = result.main.humidity + "%";
    document.querySelector(".wind").innerHTML = result.wind.speed + "km/h";
 
    
})

