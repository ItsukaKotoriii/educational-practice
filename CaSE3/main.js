import './style.css'

const images = [
  "images/image1.webp",
  "images/image2.webp",
  "images/image3.webp"
];
let currentIndex = 0;

function updateSlider() {
  const sliderImg = document.getElementById('sliderImg');
  const slideNumber = document.getElementById('slideNumber');
  sliderImg.src = images[currentIndex];
  slideNumber.textContent = `${currentIndex + 1}/${images.length}`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  } else if (event.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
  }
});

document.querySelector('#app').innerHTML = `
  <div class="slider-container">
        <button id="prevBtn">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <img src="images/image1.webp" alt="Image 1" id="sliderImg">
        <button id="nextBtn">
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
        <div id="slideNumber">1/3</div>
    </div>
`;

updateSlider();