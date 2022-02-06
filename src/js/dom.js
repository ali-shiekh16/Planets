import gsap from 'gsap';
import neptune from './neptune';

import mars from './mars';
import pluto from './pluto';
import jupitor from './jupitor';
import mercury from './mercury';
import scene from './scene';
import volumeOffIcon from '../img/volume-off.png';
import volumeOnIcon from '../img/volume-on.png';

const canvasContainer = document.querySelector('#canvasContainer');
const header = document.querySelector('#header');
const startButton = document.querySelector('#startButton');
const planetHeading = document.querySelector('#planetHeading');
const planetText = document.querySelector('#planetText');

const radioButtons = document.querySelectorAll('#radioBtn');

const volumeIcon = document.querySelector('#volumeIcon');

function init() {
  document.body.scrollTo = 0;

  startButton.addEventListener('click', handleStartClick);

  radioButtons.forEach(radioBtn =>
    radioBtn.addEventListener('change', handleRadioChange)
  );

  volumeIcon.addEventListener('click', handleVolumeClick);
}

const planetsContainer = document.querySelector('#planetsContainer');

function handleStartClick() {
  document.body.style.overflowY = 'auto';
  header.classList.add('header--transparent');
  canvasContainer.classList.add('planets__canvas-container-visible');
  planetsContainer.classList.add('planets--visible');
}

const planetsTexts = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis a dolor et placerat. Cras malesuada dolor ut justo fermentum malesuada. Nunc id molestie mauris',
  'Nam ac turpis dui. Nam interdum felis tristique mattis semper. Phasellus porta nisl et risus luctus mollis. In hac habitasse platea dictumst. Aliquam nec risus dui',
  'Cras eget massa vitae est porta mollis. Aenean et mi diam. In hac habitasse platea dictumst. Integer dapibus, neque eget dictum feugiat, velit neque ornare mi, ',
  'sit amet fringilla nibh orci finibus massa. Donec ut cursus arcu. Etiam porttitor pulvinar libero, sed mattis erat vestibulum id. ',
  'Cras eget massa vitae est porta mollis. Aenean et mi diam. In hac habitasse platea dictumst. Integer dapibus, neque eget dictum feugiat, velit neque ornare mi, ',
];

const planets = [neptune, mars, pluto, jupitor, mercury];

let currentPlanet = neptune;

function handleRadioChange({ target }) {
  planetHeading.innerText = target.value.toUpperCase();

  const index = +target.getAttribute('data-js-order') - 1;

  scene.remove(currentPlanet);
  scene.add(planets[index]);
  currentPlanet = planets[index];

  planetText.innerText = planetsTexts[index];

  const animationSteps = {
    duration: 2,
    y: '-300px',
    opacity: 0,
    ease: 'power2.out',
  };
  gsap.from('#planetHeading', animationSteps);
  gsap.from('#planetText', animationSteps);
  gsap.from(currentPlanet.position, { duration: 1.5, y: 300 });
}

const audio = document.querySelector('#bgAudio');

function handleVolumeClick({ target }) {
  const isOn = target.getAttribute('data-js-volume') === 'on';

  if (isOn) {
    target.src = volumeOffIcon;
    target.setAttribute('data-js-volume', 'off');
  } else {
    target.src = volumeOnIcon;
    target.setAttribute('data-js-volume', 'on');
  }

  audio.muted = !audio.muted;
}

export default init;
