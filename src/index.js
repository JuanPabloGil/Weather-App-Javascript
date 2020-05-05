import './assets/css/style.css';
import { format } from './formatWeather';


let  searchInput = document.querySelector('.searchInput');
let  searchButton = document.querySelector('.searchButton');


searchButton.addEventListener('click', () => {
    format.getWeather(searchInput.value);
});
