const home = () => {
  const homeMain = document.createElement('div');
  homeMain.classList.add('main-section');
  const textSection = document.createElement('div');
  textSection.classList.add('text-section');
  const homeIntro = document.createElement('p');
  homeIntro.classList.add('home-intro');
  const homeHeading = document.createElement('h1');
  homeHeading.classList.add('headline');
  const homeImage = document.createElement('img');
  homeImage.classList.add('home-image');

  homeHeading.textContent = 'Awesome Restaurant';
  homeIntro.textContent = 'The most amazing restaurant you can find around here';

  textSection.appendChild(homeHeading);
  textSection.appendChild(homeIntro);

  homeMain.appendChild(textSection);
  homeMain.appendChild(homeImage);

  return homeMain;
};

export { home as default };