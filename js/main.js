const nav_bar = document.getElementById("navigation");
const hamburger = document.getElementById("hamburger");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay")
const slide_in_elements = document.querySelectorAll(
  ".hidden-left,.hidden-right,.hidden-down,.hidden-hero"
);
const menu_elements = document.querySelectorAll(".menu-element");
const sections = document.querySelectorAll(".section");

const infinite_scroll_observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.5 }
);
const sections_observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target.id);
        console.log(menu_elements);
        menu_elements.forEach((el) => el.classList.remove("active"));
        menu_elements[id_section_to_number(entry.target.id)].classList.add(
          "active"
        );
      }
    });
  },
  { threshold: 0.5 }
);

slide_in_elements.forEach((el) => infinite_scroll_observer.observe(el));
sections.forEach((el) => sections_observer.observe(el));
document.addEventListener("scroll", (event) => {
  nav_bar.classList.add("transparency");
});
document.addEventListener("scrollend", (event) => {
  nav_bar.classList.remove("transparency");
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sidebar.classList.toggle("sidebar-active");
  overlay.classList.toggle("overlay-active");
});
