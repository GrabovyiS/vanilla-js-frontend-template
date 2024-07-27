import './assets/styles/reset.css';
import './assets//styles/normalize.css';
import './assets/images/placeholder.png';
import createDiv from './components/createDiv.js';
import getWeather from './data/getWeather.js';

console.log('this is index!', createDiv());

getWeather('moscow', 'metric').then((weatherData) => {
  console.log('done');
  const output = document.createElement('p');
  output.textContent = weatherData.resolvedAddress;
  document.querySelector('body').append(output);
});
