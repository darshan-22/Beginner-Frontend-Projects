const apiKey = "bb5e1a21cde19aa180410e9d2724c869";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid = ${apiKey}`);
  var data = await response.json;
}
