
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").classList.remove("hidden");
  } else {
    document.querySelector(".navbar").classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
}

document.addEventListener("DOMContentLoaded", function() {
  var elementsToShow = document.querySelectorAll('.animated');

  function showElements() {
    for (var i = 0; i < elementsToShow.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = elementsToShow[i].getBoundingClientRect().top;
      var elementHeight = elementsToShow[i].offsetHeight;

      if (elementTop < windowHeight - (elementHeight / 2)) {
        elementsToShow[i].classList.add("animate-show");
      }
    }
  }

  showElements();

  window.addEventListener('scroll', showElements);
});

