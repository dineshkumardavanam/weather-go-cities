document.getElementById("weatherSearch").addEventListener('click',function(e){

    e.preventDefault();	

    var city = e.path[1][0].value;

    console.log(city);

    weather.innerHTML =  city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2a5087284cmsh4eb006ff7d36459p1e0491jsn1c7642988d3b',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
        .then(response => response.json())
        .then(response => {
            max_temp.innerHTML = response.max_temp;
            min_temp.innerHTML = response.min_temp;
            temprature.innerHTML = response.temp;
            humidity_pct.innerHTML = response.humidity;
            cloudpct.innerHTML = response.cloud_pct;
            windspeed.innerHTML = response.wind_speed;
            winddegree.innerHTML = response.wind_degrees;


        })
        .catch(err => console.error(err));


});