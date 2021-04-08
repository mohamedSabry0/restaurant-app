import {changeMain, changeActive} from './render';

const createNav = () => {
  const btnList = ['home', 'menu', 'contact']
  const nav = document.createElement('nav');
  nav.classList.add('bg-darkblue', 'nav');
  
  btnList.forEach(btnName => {
    const btn = document.createElement('button');
    btn.textContent = btnName.toUpperCase();
    btn.classList.add('nav-btn');
    btn.addEventListener('click', ()=>{
      changeActive(btn);
      changeMain(btnName);
    })

    if (btnName == 'home'){
      console.log('set active to home')
      btn.classList.add('active');
    }

    nav.appendChild(btn);
  });

  return nav;
};

export { createNav }