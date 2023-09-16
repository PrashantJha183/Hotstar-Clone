const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

function createSlide() {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  //creating DOM
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  //attaching DOM
  imgElement.appendChild(document.createTextNode(" "));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].desc));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  //setting image
  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  //setting class name
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-desc";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
}

for (let i = 0; i < 4; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 4000);

//card sliders
let posterContainer = document.querySelectorAll(".poster-card");
let preBtns = document.querySelectorAll(".pre-btn");
let nextBtns = document.querySelectorAll(".next-btn");

posterContainer.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 300;
  });
  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 300;
  });
});
// })
