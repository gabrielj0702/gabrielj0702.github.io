const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});



//This actually isnt used in my website, because I used  bootstrap instead. But I added it just in case.