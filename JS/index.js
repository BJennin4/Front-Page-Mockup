window.onscroll = function () {
  headerStick();
};

var header = document.getElementById("siteHeader");
var sticky = header.offsetTop;

function headerStick() {
  if (window.pageYOffset > sticky) {
    header.classList.add("stick");
  } else {
    header.classList.remove("stick");
  }
}
