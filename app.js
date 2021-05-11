

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


// Buttons Work section 

function liveWeatherReact() {
  window.open("https://federicacosta-weatherapp-react.netlify.app/", "_blank");
}

function codeWeatherReact() {
  window.open("https://github.com/Feffa-hub/react-weather", "_blank");
}

function liveWeatherVanilla() {
  window.open("https://federicacosta-weatherapp-vanilla.netlify.app/", "_blank");
}

function codeWeatherVanilla() {
  window.open("https://github.com/Feffa-hub/Final--project", "_blank");
}
