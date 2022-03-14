function darkMode() {
  let backgroundDark = document.querySelector('body');
  backgroundDark.classList.toggle('backgroundDark');

  let titleDark = document.querySelector('h1');
  titleDark.classList.toggle('titleDark');
  
  let btTextDark = document.querySelector('h3');
  btTextDark.classList.toggle('btTextDark');

  let cardsDark = document.querySelectorAll('.item');

  cardsDark.forEach (element => {element.classList.toggle('cardsDark')});

  let cardTextDark = document.querySelectorAll('.item h2, p');
  cardTextDark.forEach (element => {element.classList.toggle('cardTextDark')}); 
 }
var btSwitch = document.getElementById("btSwitch");
btSwitch.addEventListener("click", darkMode);