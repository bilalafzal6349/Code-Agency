const menuBtn = document.getElementById("menu-btn");
const Links = document.getElementById("links");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("turn");
  Links.classList.toggle("show"); // Now both classes toggle correctly
});
