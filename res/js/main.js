const circle = document.getElementById("circle");
const couter = document.getElementById("couter");
const fotoandtimeFast = document.getElementById("fotoandtimeFast");
const fotoandtimeMedium = document.getElementById("fotoandtimeMedium");
const fotoandtimeSlow = document.getElementById("fotoandtimeSlow");
const dificulty = document.getElementById("dificulty");
var hits = 0;

image_array = ["enemy1.png", "enemy2.png"];
function get_random_image() {
  random_index = Math.floor(Math.random() * image_array.length);
  selected_image = image_array[random_index];
  document.getElementById("circle").src = `./res/img/${selected_image}`;
}

var myTimer = setInterval(myFn, 400000);

function randomize() {
  document.getElementById("circle").style.marginTop = randomNumber(7, 22);
  document.getElementById("circle").style.marginLeft = randomNumber(-74, 74);
  hits++;
  counter.innerHTML = hits;
  clearInterval(myTimer);
  myTimer = setInterval(myFn, x);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min + "%";
}

function myFn() {
  hits -= 2;
  counter.innerHTML = hits;
}

fotoandtimeFast.onclick = () => {
  x = 500;
  document.getElementById("circle").style.transition = "0.09s";
  document.getElementById("fotoandtimeFast").style.fontWeight = "bold";
  document.getElementById("fotoandtimeMedium").style.fontWeight = "normal";
  document.getElementById("fotoandtimeSlow").style.fontWeight = "normal";
};
fotoandtimeMedium.onclick = () => {
  x = 1000;
  document.getElementById("circle").style.transition = "0.4s";
  document.getElementById("fotoandtimeFast").style.fontWeight = "normal";
  document.getElementById("fotoandtimeMedium").style.fontWeight = "bold";
  document.getElementById("fotoandtimeSlow").style.fontWeight = "normal";
};
fotoandtimeSlow.onclick = () => {
  x = 2000;
  document.getElementById("circle").style.transition = "0.6s";
  document.getElementById("fotoandtimeFast").style.fontWeight = "normal";
  document.getElementById("fotoandtimeMedium").style.fontWeight = "normal";
  document.getElementById("fotoandtimeSlow").style.fontWeight = "bold";
};