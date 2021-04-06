
import {homeElements} from './home';

export const render = () => {
  const container = document.querySelector('#content');
  
  container.appendChild(homeElements().homeMain);
};