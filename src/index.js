import './assets/styles/reset.css';
import './assets//styles/normalize.css';
import './assets/images/placeholder.png';
import Div from './components/Div/Div.js';
import getWeather from './data/getWeather.js';

console.log('this is index');

getWeather('moscow', 'metric').then((weatherData) => {
  console.log('done');
  const output = document.createElement('p');
  output.textContent = weatherData.resolvedAddress;
  document.querySelector('body').append(output);
  const div = Div();
  document.querySelector('body').append(div);
});
