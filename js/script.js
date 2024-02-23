let upButton = document.querySelector('.up');

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }

});

upButton.addEventListener("click",function () {
  window.scrollTo(0, 0);
});
//Вивід року
let year = document.querySelector("p.copy");
let data = new Date();
year.innerHTML = data.getFullYear() + "  All rights reserved";