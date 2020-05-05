const display = (function() {

  function data(data) {
    document.querySelector(".name").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = "Humidity: " + data.humidity + "%";
    document.querySelector(".weatherC").innerHTML = data.tempC;
    document.querySelector(".weatherF").innerHTML = data.tempF;
    document.querySelector(".pressure").innerHTML = "Pressure: " + data.pressure;
    document.querySelector(".description").innerHTML = "Description: " + data.description;
    document.querySelector(".icon").src = data.icon;

  }


  return {
    data,
  }

})();

export { display }
