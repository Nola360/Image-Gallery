const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
//default opacity
const opacity = 0.6;
imgs.forEach(img => img.addEventListener('click', imgClick));


//Set first image opacity
imgs[0].style.opacity = opacity;
function imgClick(e) {
  //Reset the opacity
  imgs.forEach(img => (img.style.opacity = 1));

  //change current image to src of clicked image
  current.src = e.target.src;

  //add fade in class
  current.classList.add('fade-in');

  //Remove fade-in class after .5 seconds
  setTimeout(() => current.classList.remove('fade-in'), 500);

  //change the opacity to opacity var 
  e.target.style.opacity = opacity;
}

