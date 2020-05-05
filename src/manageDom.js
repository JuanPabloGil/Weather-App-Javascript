const display = (function () {
  function data(data) {
    document.querySelector('.name').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = `Humidity: ${data.humidity}%`;
    document.querySelector('.weatherC').innerHTML = ` ${data.tempC} `;
    document.querySelector('.weatherF').innerHTML = ` \xa0 ${data.tempF} `;
    document.querySelector('.pressure').innerHTML = `Pressure: ${data.pressure}`;
    document.querySelector('.description').innerHTML = data.description;
    document.querySelector('.icon').src = data.icon;
  }


  function errorMessage(message) {
    const element = document.querySelector('.error');
    element.innerHTML = `${message
    }<span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>`;
    element.style.display = 'block';
  }

  function clearErrorMessage() {
    const element = document.querySelector('.error');
    element.style.display = 'none';
  }


  return {
    data,
    errorMessage,
    clearErrorMessage,
  };
}());

export { display };
