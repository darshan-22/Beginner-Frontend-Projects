const apiKey = "bb5e1a21cde19aa180410e9d2724c869";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=bb5e1a21cde19aa180410e9d2724c869&units=metric";

async function checkWeather() {
  const response = await fetch(apiUrl);
  var data = await response.json();

  console.log(data);
}

checkWeather();
