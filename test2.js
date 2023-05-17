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