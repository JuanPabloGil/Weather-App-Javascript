import { helper } from './helper';
import { display }  from './manageDom'

const format = (function(){

  function getWeather(city){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=436dd24bce78a2c523210e1f077bf18b`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data){
          let relevant = relevantData(data);
          display.data(relevant);
          console.log(data);

      })
    };

    function relevantData(data){
      let weatherData = {};

      weatherData.name = data.name + ", "+ data.sys.country;
      weatherData.tempC = helper.kelvinToCelcius(data.main.temp);
      weatherData.tempF = helper.kelvinToFahrenheit(data.main.temp);
      weatherData.humidity = data.main.humidity;
      weatherData.pressure = data.main.pressure;
      weatherData.description = data.weather[0].description;
      weatherData.icon = helper.selectIcon(data.weather[0].icon);

      return weatherData;
    }


    return {
      getWeather,
      relevantData
    }

  })();

  export { format } ;
