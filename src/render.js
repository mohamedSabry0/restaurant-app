import './styles/style.css';
import {home} from './home';
import {contact} from './contact';
import {menu} from './menu';
import {createNav} from './nav';

const render = () => {
  const container = document.querySelector('#content');
  container.innerHTML = '';
  container.appendChild(createNav());

  const renderMain = (page='home') => {
    const main = (page == 'home' ? home() : (page == 'menu' ? menu() : contact()));
    console.log(main);
    container.appendChild(main);
  };

  return {
    renderMain
  };
};

export {render}