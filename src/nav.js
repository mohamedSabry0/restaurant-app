import {render} from './render';

const createNav = (current = 'home') => {
  const btnList = ['home', 'menu', 'contact']
  const nav = document.createElement('nav');
  nav.classList.add('bg-darkblue', 'nav');
  
  const changeTab = (current, clicked)=> {
    current.classList.toggle('active');
    clicked.classList.toggle('active');
  }
  
  btnList.forEach(btnName => {
    const btn = document.createElement('button');
    btn.textContent = btnName.toUpperCase();
    btn.classList.add('nav-btn');
    btn.addEventListener('click', ()=>{
      // const current = document.querySelector('.active');
      render().renderMain(btnName);
      changeTab(current, btn);
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