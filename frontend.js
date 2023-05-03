window.addEventListener('load', onLoad);


const slideinfoboxpositions = [ 
["40px", "40px"],
["200px", "700px"],
["30px", "730px"],
["300px", "30px"] ];

// Set the initial slide index
var currentSlide = 0;
function onLoad() {
  showSlide(currentSlide);
}

// Function to show the slide with the given index
function showSlide(index) {
  // Hide all the slides
  const slides = document.getElementsByClassName('mainbackgroundimg');
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    slides[i].classList.remove("active");
  }

  // Show the slide with the given index
  slides[index].style.opacity = 1;


  slides[index].firstElementChild.firstElementChild.style.top = slideinfoboxpositions[index][0];
  slides[index].firstElementChild.firstElementChild.style.left = slideinfoboxpositions[index][1];
  slides[index].classList.add("active");
}


function update() {

    const slides = document.getElementsByClassName('mainbackgroundimg');
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}
setInterval(update, 6000);