const modal = document.querySelector("#modal");
const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector("#close-modal");
const stopScrolling = document.querySelector("body");

openModal.addEventListener("click", () => {
  modal.showModal();
  stopScrolling.classList.toggle("stop-scrolling");
});

closeModal.addEventListener("click", () => {
  modal.close();
  stopScrolling.classList.remove("stop-scrolling");
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// let arr = document.querySelectorAll(".img-1");
// for (let i = 0; i < arr.length; i++) {
//   let self = arr[i];

//   self.addEventListener(
//     "mouseenter",
//     function () {
//       mouseEnter();
//     },
//     false
//   );
// }

// let rmClass = document.querySelectorAll(".img-1");

// for (i of rmClass) {
//   i.addEventListener("mouseenter", function (n) {
//     n.classList.remove("img-1-hover");
//     n.classList.add("img-1-hover-active");
//   });
// }

// for (i of addClass) {
//   function mouseEnter() {
//     i.classList.remove("img-1-hover");
//     i.classList.add("img-1-hover-active");
//   }
// }

// const arr =
//   document.querySelectorAll[
//     ("#hoverOn1", "#hoverOn2", "#hoverOn3", "#hoverOn4")
//   ];

// const arr2 = document.querySelectorAll[("#img1", "#img2", "#img3", "#img4")];

// arr.forEach.addEventListener("mouseenter", function () {
//   arr2.forEach(function (el) {
//     el.classList.remove("img-1-hover");
//     el.classList.add("img-1-hover-active");
//   });
// });

// let addClass = document.querySelectorAll(".img-1");

// Object.entries(addClass).map((object) => {
//   object[1].addEventListener("mouseenter", function () {
//     Array.from(document.querySelectorAll("#img")).forEach(function (el) {
//       el.classList.remove("img-1-hover");
//       el.classList.add("img-1-hover-active");
//     });
//   });
// });

// Array.from(document.querySelectorAll(".img-1")).forEach(function (ad) {
//   ad.addEventListener("mouseenter", function () {
//     Array.from(document.querySelectorAll("#img")).forEach(function (el) {
//       el.classList.remove("img-1-hover");
//       el.classList.add("img-1-hover-active");
//     });
//   });
// });

// const ids = document.querySelectorAll[("#img1", "#img2", "#img3", "#img4")];
//     [].forEach.call(ids, function (el) {
//       el.classList.remove("img-1-hover");
//       el.classList.add("img-1-hover-active");
//     });

// let rmClass = document.querySelectorAll(".img-1-hover");
// [("#img1", "#img2", "#img3", "#img4")];
// Object.entries(addClass).map((object) => {
//   object[1].addEventListener("mouseenter", function () {
//     Object.entries(rmClass).map((object) => {
//       object[1].classList.remove("img-1-hover");
//       object[1].classList.add("img-1-hover-active");
//     });
//   });
// });

// function mouseEnter() {
//   addClass.classList.remove("img-1-hover");
//   addClass.classList.add("img-1-hover-active");
// }

// document
//   .querySelectorAll("img-1")
//   .forEach((el) => el.addEventListener("mouseenter", mouseEnter));
// document
//   .querySelectorAll("img-1-hover")
//   .forEach((al) => al.addEventListener("mouseleave", mouseLeave));

// let addClass = document.querySelectorAll("img-1-hover");

// document
//   .querySelectorAll("img-2")
//   .forEach((ul) => ul.addEventListener("mouseenter", mouseHover));
// document
//   .querySelectorAll("img-2-hover")
//   .forEach((ol) => ol.addEventListener("mouseleave", mouseHoverOut));

// let addClass2 = document.querySelectorAll("img-2-hover");

// function mouseEnter() {
//   addClass.classList.remove("img-1-hover");
//   addClass.classList.add("img-1-hover-active");
// }

// function mouseLeave() {
//   addClass.classList.remove("img-1-hover-active");
//   addClass.classList.add("img-1-hover");
// }

// function mouseHover() {
//   addClass2.classList.remove("img-2-hover");
//   addClass2.classList.add("img-2-hover-active");
// }

// function mouseHoverOut() {
//   addClass2.classList.remove("img-2-hover-active");
//   addClass2.classList.add("img-2-hover");
// }

// document
//   .querySelector(".test-before")
//   .addEventListener("mouseenter", mouseEnter);
// document
//   .querySelector(".test-after")
//   .addEventListener("mouseleave", mouseLeave);

// const addClass = document.querySelector(".test-after");

// document
//   .querySelector(".test-before-2")
//   .addEventListener("mouseenter", mouseHover);
// document
//   .querySelector(".test-after-2")
//   .addEventListener("mouseleave", mouseHoverOut);

// const addClass2 = document.querySelector(".test-after-2");

// function mouseEnter() {
//   addClass.classList.remove("img-hover");
//   addClass.classList.add("img-hover-active");
// }

// function mouseLeave() {
//   addClass.classList.remove("img-hover-active");
//   addClass.classList.add("img-hover");
// }

// function mouseHover() {
//   addClass2.classList.remove("img-hover-2");
//   addClass2.classList.add("img-hover-active-2");
// }

// function mouseHoverOut() {
//   addClass2.classList.remove("img-hover-active-2");
//   addClass2.classList.add("img-hover-2");
// }
