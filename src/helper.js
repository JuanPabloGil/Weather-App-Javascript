const helper = (function () {
  function kelvinToCelcius(temp) {
    temp = `${(temp - 273.15).toFixed(1)} C°`;
    return temp;
  }

  function kelvinToFahrenheit(temp) {
    temp = `${((((temp - 273.15) * 9) / 5) + 32).toFixed(1)} F°`;
    return temp;
  }

  function selectIcon(icon) {
    let text = '';
    switch (icon) {
      case '01d':
      case '01n':
        text = 'https://i.ibb.co/gSsGV6w/011-sun-1.png';
        break;

      case '02d':
      case '02n':
        text = 'https://i.ibb.co/PM4pDPP/008-sun-4.png';
        break;

      case '03d':
      case '04d':
      case '03n':
      case '04n':

        text = 'https://i.ibb.co/x5KzhjH/048-clouds.png';
        break;

      case '09d':
      case '09n':
        text = 'https://i.ibb.co/fqCc4gS/019-rain-5.png';
        break;

      case '10d':
      case '10n':
        text = 'https://i.ibb.co/Xz98Jk0/021-rain-3.png';
        break;

      case '11d':
      case '11n':
        text = 'https://i.ibb.co/s1vm3Jn/047-storm.png';
        break;

      case '13d':
      case '13n':
        text = 'https://i.ibb.co/chcyYS8/023-rain-1.png';
        break;

      case '50d':
      case '50n':
        text = 'https://i.ibb.co/Sttsk3X/001-wind.png';
        break;

      default:
        text = 'https://i.ibb.co/Hg8qKZc/042-earth.png';
        break;
    }
    return text;
  }

  return {
    kelvinToCelcius,
    kelvinToFahrenheit,
    selectIcon,
  };
}());

export { helper };
