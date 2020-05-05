import { helper } from './helper';
import { display } from './manageDom';

const format = (function format() {
  function relevantData(data) {
    const weatherData = {};

    weatherData.name = `${data.name}, ${data.sys.country}`;
    weatherData.tempC = helper.kelvinToCelcius(data.main.temp);
    weatherData.tempF = helper.kelvinToFahrenheit(data.main.temp);
    weatherData.humidity = data.main.humidity;
    weatherData.pressure = data.main.pressure;
    weatherData.description = data.weather[0].description;
    weatherData.icon = helper.selectIcon(data.weather[0].icon);

    return weatherData;
  }

  function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=436dd24bce78a2c523210e1f077bf18b`)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod !== 200) {
          display.errorMessage('City not found or the city was mistyped');
        } else {
          const relevant = relevantData(data);
          display.clearErrorMessage();
          display.data(relevant);
        }
      });
  }


  return {
    getWeather,
    relevantData,
  };
}());

export { format };
