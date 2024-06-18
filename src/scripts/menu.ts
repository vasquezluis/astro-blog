const hambur = document.querySelector(".hamburger");
const nav_links = document.querySelector(".nav-links");

if (hambur !== null && nav_links !== null) {
  hambur.addEventListener("click", () => {
    nav_links.classList.toggle("expanded");
  });
}
