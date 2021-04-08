import first from './images/hans-vivek-4JO8HSEDW7w-unsplash.jpg'
import second from './images/jakub-kapusnak-4f4YZfDMLeU-unsplash.jpg'
import third from './images/sigmund-9hzr53AsB8U-unsplash.jpg'
const menu = () => {
  const menuMain = document.createElement('div');
  menuMain.classList.add('main-section');
  const menuHeading = document.createElement('h1');
  menuHeading.classList.add('headline');
  menuHeading.textContent = 'MENU';
  menuMain.appendChild(menuHeading);
  
  let imageList = [
    [first, 'one'],
    [second, 'two'],
    [third, 'many']
  ];
  imageList.forEach((element)=>{
    const menuItem = document.createElement('div');
    const image = document.createElement('img');
    image.setAttribute('src', element[0]);
    const desc = document.createElement('p');
    desc.textContent = `breakfast for ${element[1]}`.toUpperCase();
    image.classList.add('menu-image');
    menuItem.appendChild(image);
    menuItem.appendChild(desc);
    menuItem.classList.add('menu-item');
    menuMain.appendChild(menuItem);
  });
  
  return menuMain;
};

export {menu};