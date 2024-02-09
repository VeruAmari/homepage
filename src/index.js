import './normalize.css';
import './style.css';
import imgLow from './images/pic1_low.jpg';
import imgLower from './images/pic1_lower.jpg';
import img2 from './images/pic2.jpg';

const photo1 = document.querySelector('.photo-1');
photo1.setAttribute('srcset', `${imgLower} 300w,${imgLow} 600w`);

document.querySelector('.photo-2').setAttribute('src', img2);
