import './styles/style.css';
import {home} from './home';
import {contact} from './contact';
import {menu} from './menu';
import {createNav} from './nav';

const changeActive = (clicked)=> {
  document.querySelector('.active').classList.toggle('active');
  clicked.classList.toggle('active');
};

const changeMain = (page) => {
  const container = document.querySelector('#content');
  const oldContent = document.querySelector('.main-section');
  const newContent = (page == 'home' ? home() : (page == 'menu' ? menu() : contact()))
  
  oldContent.outerHTML = '';
  container.appendChild(newContent);
};

const mainRender = () => {
  const container = document.querySelector('#content');
  container.appendChild(createNav());
  container.appendChild(home());

};

export {mainRender, changeMain, changeActive};