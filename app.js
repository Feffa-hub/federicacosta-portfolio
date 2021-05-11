// Button scroll down

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Hamburger menu


const menuList = document.getElementById('menu-list'); 

function toggleButton (){
  menuList.classList.toggle('show');
}

const hamburgerButton = document.getElementById('hamburger');
hamburgerButton.addEventListener('click', toggleButton); 


// Event Listeners Index

function aboutMe() {
  window.location.href="about.html";
}

let buttonAbout = document.getElementById('btn-about');
buttonAbout.addEventListener('click', aboutMe);


function work() {
  window.location.href="work.html";
}

let buttonWork = document.getElementById('btn-work');
buttonWork.addEventListener('click', work);


// Event Listeners Work

function liveWeatherReact() {
 window.open("https://federicacosta-weatherapp-react.netlify.app/", "_blank"); 
}

let btnWeatherReact = document.getElementById('btn-weather-react-live');
btnWeatherReact.addEventListener('click', liveWeatherReact);


function liveWeatherVanilla() {
 window.open("https://federicacosta-weatherapp-vanilla.netlify.app/", "_blank"); 
}

let btnWeatherVanilla = document.getElementById('btn-weather-vanilla-live');
btnWeatherVanilla.addEventListener('click', liveWeatherVanilla);

