const display = (function display() {
  function data(data) {
    document.querySelector('.name').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = `Humidity: ${data.humidity}%`;
    document.querySelector('.weatherC').innerHTML = ` ${data.tempC} `;
    document.querySelector('.weatherF').innerHTML = ` \xa0 ${data.tempF} `;
    document.querySelector('.pressure').innerHTML = `Pressure: ${data.pressure}`;
    document.querySelector('.description').innerHTML = data.description;
    document.querySelector('.icon').src = data.icon;
    if (data.don === 'd') {
      document.body.style = `background: rgb(255,0,0);
      background: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(222,144,62,1) 54%, rgba(250,255,0,1) 100%);`;
    } else {
      document.body.style = `background: rgb(2,0,36);
      background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(67,67,179,1) 45%, rgba(0,212,255,1) 100%);`;
    }
    document.querySelector('.switch').style.display = 'inline-block';
  }

  window.changeUnit = function changeUnit(){
    if (document.querySelector('.checkbox').checked){
        document.querySelector('.weatherC').style.display = 'none';
        document.querySelector('.weatherF').style.display = 'block';
    }else {
      document.querySelector('.weatherC').style.display = 'block';
      document.querySelector('.weatherF').style.display = 'none';
    }
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

export default display;
