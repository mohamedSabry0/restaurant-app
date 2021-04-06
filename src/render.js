import './styles/style.css';
import {homeElements} from './home';
import {nav} from './nav';

export const render = () => {
  const container = document.querySelector('#content');
  container.appendChild(nav.nav);
  container.appendChild(homeElements.homeMain);
};