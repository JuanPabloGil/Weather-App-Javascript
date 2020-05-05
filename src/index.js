import './assets/css/style.css';
import { format } from './formatWeather';


const searchInput = document.querySelector('.searchInput');
const searchButton = document.querySelector('.searchButton');


searchButton.addEventListener('click', () => {
  format.getWeather(searchInput.value);
});
