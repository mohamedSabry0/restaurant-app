const contact = () => {
  const contactMain = document.createElement('div');
  contactMain.classList.add('main-section');
  
  const contactHeading = document.createElement('h1');
  contactHeading.classList.add('headline');
  const contactInfo = document.createElement('p');
  contactInfo.classList.add('contact-info');
  

  contactHeading.textContent = 'Contact Us';
  contactInfo.textContent = 'for any concerns or suggestions please contact us on the following:\ntel:+1123123123\nemail:amazingrest@qwerty.co';

  contactMain.appendChild(contactHeading);
  contactMain.appendChild(contactInfo);
  
  return contactMain;
};

export {contact};