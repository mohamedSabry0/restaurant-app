import './styles/style.css';
import createNav from './nav';
import home from './home';

const mainRender = () => {
  const container = document.querySelector('#content');
  container.appendChild(createNav());
  container.appendChild(home());
};

export { mainRender as default };