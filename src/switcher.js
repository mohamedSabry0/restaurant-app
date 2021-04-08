import home from './home';
import contact from './contact';
import menu from './menu';

const changeActive = (clicked) => {
  document.querySelector('.active').classList.toggle('active');
  clicked.classList.toggle('active');
};

const changeMain = (page) => {
  const container = document.querySelector('#content');
  const oldContent = document.querySelector('.main-section');

  const newContent = (() => {
    switch (page) {
      case 'menu':
        return menu();
      case 'contact':
        return contact();
      default:
        return home();
    }
  })();

  oldContent.outerHTML = '';
  container.appendChild(newContent);
};

export { changeMain, changeActive };