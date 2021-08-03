const currentLink = window.location.href;
const arrA = document.getElementsByTagName("a");

for (i = 0; i < arrA.length; i++) {
  if (arrA[i].href === currentLink) {
    arrA[i].classList.add("selected");
  }
}

// let a, b, c, d, e, f, g;
// function randomColor() {
//   return Math.floor(Math.random() * 10);
// }
// function randomBackgroundColor(a, b, c, d, e, f, g) {
//   const randomFun = randomColor();
//   a = randomFun;
//   b = randomFun;
//   c = randomFun;
//   d = randomFun;
//   e = randomFun;
//   f = randomFun;
//   g = "88";
//   document.body.style.background = "#" + a + b + c + d + e + f + g;
// }
// function startRandomBackgroundColor() {
//   randomBackgroundColor(a, b, c, d, e, f);
// }
// document.addEventListener("mousemove", startRandomBackgroundColor);
