const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  );
};

const links = getElement(".nav-links");
const navBtnDOM = getElement(".nav-btn");

navBtnDOM.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

const bars = document.querySelector(".fa-bars");

bars.addEventListener("click", function () {
  if (bars.classList.contains("fa-bars")) {
    bars.classList.toggle("fa-rotate-270");
  } else {
  }
});
