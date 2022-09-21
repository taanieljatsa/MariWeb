const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    // else {
    //   entry.target.classList.remove("show");
    // }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const observerOne = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-btn-1");
    }
    // else {
    //   entry.target.classList.remove("show-btn-1");
    // }
  });
});

const hiddenElementsOne = document.querySelectorAll(".hidden-btn-1");
hiddenElementsOne.forEach((el) => observerOne.observe(el));

const observerTwo = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-btn-2");
    }
    // else {
    //   entry.target.classList.remove("show-btn-2");
    // }
  });
});

const hiddenElementsTwo = document.querySelectorAll(".hidden-btn-2");
hiddenElementsTwo.forEach((el) => observerTwo.observe(el));

const observerTwoBorder = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-btn-2-border");
    }
    // else {
    //   entry.target.classList.remove("show-btn-2-border");
    // }
  });
});

const hiddenElementsTwoBorder = document.querySelectorAll(
  ".hidden-btn-2-border"
);
hiddenElementsTwoBorder.forEach((el) => observerTwoBorder.observe(el));

const observerThree = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-btn-3");
    }
    // else {
    //   entry.target.classList.remove("show-btn-3");
    // }
  });
});

const hiddenElementsThree = document.querySelectorAll(".hidden-btn-3");
hiddenElementsThree.forEach((el) => observerThree.observe(el));

const observerThreeBorder = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-btn-3-border");
    }
    // else {
    //   entry.target.classList.remove("show-btn-3-border");
    // }
  });
});

const hiddenElementsThreeBorder = document.querySelectorAll(
  ".hidden-btn-3-border"
);
hiddenElementsThreeBorder.forEach((el) => observerThreeBorder.observe(el));

const observerFour = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-btn-4");
    }
    // else {
    //   entry.target.classList.remove("show-btn-4");
    // }
  });
});

const hiddenElementsFour = document.querySelectorAll(".hidden-btn-4");
hiddenElementsFour.forEach((el) => observerFour.observe(el));

const observerFourBorder = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-btn-4-border");
    }
    // else {
    //   entry.target.classList.remove("show-btn-4-border");
    // }
  });
});

const hiddenElementsFourBorder = document.querySelectorAll(
  ".hidden-btn-4-border"
);
hiddenElementsFourBorder.forEach((el) => observerFourBorder.observe(el));
