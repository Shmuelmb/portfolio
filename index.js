function scrollToProjects() {
  const height = window.innerHeight;
  window.scrollTo(0, height);
}
function scrollToAbout() {
  const height = window.innerHeight;
  window.scrollTo(0, height * 2);
}

const projectsScrollBtns = document.querySelectorAll(".scroll-to-projects");
projectsScrollBtns.forEach((button) =>
  button.addEventListener("click", scrollToProjects)
);

const aboutScrollBtn = document.querySelector(".scroll-to-about");
aboutScrollBtn.addEventListener("click", scrollToAbout);
