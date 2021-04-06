import { homeElements } from "./home";

export const nav = (() => {
  const nav = document.createElement('nav');
  const homeButton = document.createElement('button');
  const menuButton = document.createElement('button');
  const contactButton = document.createElement('button');
  nav.classList.add('bg-darkblue', 'nav');

  homeButton.textContent = 'Home';
  menuButton.textContent = 'Menu';
  contactButton.textContent = 'Contact Us';
  homeButton.classList.add('nav-btn');
  menuButton.classList.add('nav-btn');
  contactButton.classList.add('nav-btn');

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);

  const changeTab = (current, clicked)=> {
    current.classList.toggle('active');
    clicked.classList.toggle('active');
  }

  return {
    nav,
    changeTab
  }
})();