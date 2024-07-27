import './assets/styles/reset.css';
import './assets//styles/normalize.css';
import placeholder from './assets/images/placeholder.png';

console.log('this is about');

const img = document.createElement('img');
img.src = placeholder;
document.querySelector('body').appendChild(img);
