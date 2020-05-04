let  searchInput = document.querySelector('.searchInput');
let  searchButton = document.querySelector('.searchButton');
let name = document.querySelector('.name');
let weather = document.querySelector('.weather');

function kelvinToCelcius(temp){
  temp = (temp - 273.15).toFixed(2) + ' C°';
  return temp;
}

function kelvinToFahrenheit(temp){
  temp = ((((temp - 273.15) * 9) / 5) + 32 ).toFixed(2) + ' F°';
  return temp;
}

searchButton.addEventListener('click', () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=436dd24bce78a2c523210e1f077bf18b`)

    .then(function(response) {
      return response.json();
    })

    .then(function(data){
      console.log(data);
      name.innerHTML = data.name;
      weather.innerHTML = kelvinToFahrenheit(data.main.temp) ;
    })

    .catch(err => alert('WRONG CITY NAME!'))
  });
