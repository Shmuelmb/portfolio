function scrollToProjects() {
  const height = window.innerHeight;
  window.scrollTo(0, height);
}
function scrollToAbout() {
  window.scrollTo(0, document.body.scrollHeight);
}

const projectsScrollBtns = document.querySelectorAll(".scroll-to-projects");
projectsScrollBtns.forEach((button) =>
  button.addEventListener("click", scrollToProjects)
);

const aboutScrollBtn = document.querySelector(".scroll-to-about");
aboutScrollBtn.addEventListener("click", scrollToAbout);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
