let  searchInput = document.querySelector('.searchInput');
let  searchButton = document.querySelector('.searchButton');


searchButton.addEventListener('click', () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=436dd24bce78a2c523210e1f077bf18b`)

    .then(function(response) {
      return response.json();
    })

    .then(function(data){
      console.log(data);

    })

    .catch(err => alert('WRONG CITY NAME!'))
  });
