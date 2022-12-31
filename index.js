const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bf634694b8mshe236f7ef5e23ec6p17f299jsn3b6e686a8386',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let search = document.querySelector('#search');

function weather(city){
    let temperature = document.getElementById('temperature');
     let cityweather = document.getElementById('cityweather');
     let humidity = document.getElementById('humidity');
     let wind = document.getElementById('wind');
   
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then((response) => 
        response.json())

	.then((response) =>{
        cityweather.innerHTML = city,
     temperature.innerHTML = response.temp,
     humidity.innerHTML = response.humidity,
     wind.innerHTML = response.wind_speed,

    console.log(response)
})
	.catch((err) => console.error(err));
  
}
weather('Kathmandu')

let cityname = document.getElementById('cityname');

search.addEventListener('click', (e) =>{
        weather(cityname.value);
        e.preventDefault();
})