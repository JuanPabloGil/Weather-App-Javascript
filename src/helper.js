const helper = (function(){

  function kelvinToCelcius(temp){
    temp = (temp - 273.15).toFixed(2) + ' C°';
    return temp;
  }

  function kelvinToFahrenheit(temp){
    temp = ((((temp - 273.15) * 9) / 5) + 32 ).toFixed(2) + ' F°';
    return temp;
  }

  function selectIcon(icon){
    switch (icon) {
      case "01d":
      case "01n":
      return "https://i.ibb.co/gSsGV6w/011-sun-1.png";
      break;

      case "02d":
      case "02n":
      return "https://i.ibb.co/PM4pDPP/008-sun-4.png";
      break;

      case "03d":
      case "04d":
      case "03n":
      case "04n":

      return "https://i.ibb.co/x5KzhjH/048-clouds.png";
      break;

      case "09d":
      case "09n":
      return "https://i.ibb.co/fqCc4gS/019-rain-5.png";
      break;

      case "10d":
      case "10n":
      return "https://i.ibb.co/Xz98Jk0/021-rain-3.png";
      break;

      case "11d":
      case "11n":
      return "https://i.ibb.co/s1vm3Jn/047-storm.png";
      break;

      case "13d":
      case "13n":
      return "https://i.ibb.co/chcyYS8/023-rain-1.png";
      break;

      case "50d":
      case "50n":
      return "https://i.ibb.co/Sttsk3X/001-wind.png";
      break;

      default:
        return "https://i.ibb.co/Hg8qKZc/042-earth.png";
      break;
    }
  }

  return{
    kelvinToCelcius,
    kelvinToFahrenheit,
    selectIcon
  }

})();

export { helper }
