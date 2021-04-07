const menu = () => {
  const menuMain = document.createElement('div');
  menuMain.classList.add('main-section');
  
  const menuHeading = document.createElement('h1');
  menuHeading.classList.add('headline');
  const menuInfo = document.createElement('p');
  menuInfo.classList.add('menu-info');
  

  menuHeading.textContent = 'menu Us';
  menuInfo.textContent = 'for any concerns or suggestions please menu us on the following:\ntel:+1123123123\nemail:amazingrest@qwerty.co';

  menuMain.appendChild(menuHeading);
  menuMain.appendChild(menuInfo);
  
  return menuMain;
};

export {menu};