const modal = document.querySelector("#modal");
const openModal = document.querySelector("#open-modal");
const closeModal = document.querySelector("#close-modal");

openModal.addEventListener("click", () => {
  modal.showModal();
  stopScrolling.classList.toggle("stop-scrolling");
});

closeModal.addEventListener("click", () => {
  modal.close();
  stopScrolling.classList.toggle("stop-scrolling");
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const stopScrolling = document.querySelector("body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  stopScrolling.classList.toggle("stop-scrolling");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    stopScrolling.classList.toggle("stop-scrolling");
  })
);
