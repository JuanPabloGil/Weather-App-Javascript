const helper = (function(){

  function kelvinToCelcius(temp){
    temp = (temp - 273.15).toFixed(2) + ' C°';
    return temp;
  }

  function kelvinToFahrenheit(temp){
    temp = ((((temp - 273.15) * 9) / 5) + 32 ).toFixed(2) + ' F°';
    return temp;
  }

  return{
    kelvinToCelcius,
    kelvinToFahrenheit
  }

})();

export { helper }
