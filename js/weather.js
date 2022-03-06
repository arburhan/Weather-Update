
// key
const API_KEY = `36b30d0af7a9ea4327771479b1f78d10`;
const searchTemp=()=>{
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayWeather(data));
}
const displayWeather=info=>{
    document.getElementById('w-city').innerText = `${info.name}`;
    document.getElementById('w-info').innerText = `${info.weather[0].main}`;
    document.getElementById('w-temp').innerText=`${info.main.temp}`;
    const url = `http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
    document.getElementById('w-image').setAttribute('src', url);
}