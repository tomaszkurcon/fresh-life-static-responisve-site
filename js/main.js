const nav_bar = document.getElementById("navigation");
const hamburger = document.getElementById("hamburger");
const notifications = document.getElementById("notifications");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const slide_in_elements = document.querySelectorAll(
  ".hidden-left,.hidden-right,.hidden-down,.hidden-hero"
);
const menu_elements = document.querySelectorAll(".menu-element");
const sections = document.querySelectorAll(".section");

const newsletter_form = document.forms.newsletter;
const contact_form = document.forms.contact_form;
//IntersectionObserver for sliding in elements while scrolling
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
//IntersectionObserver to switch active section in menu
const sections_observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
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

//making navigation more transparent while scrolling
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

//creating notification on newsletter form submit
newsletter_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = newsletter_form.elements.email.value;
  createNotification(
    `Your email: ${email} has been succesfully addded to our newsletter!`
  );
  newsletter_form.elements.email.value = "";
});

//extracting data from contact form, saving it to local storage and creating notification 
contact_form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(contact_form.elements);
  const email = contact_form.elements.email.value;
  const phoneNumber = contact_form.elements.phone_number.value;
  const message = contact_form.elements.message.value;
  const user = {
    email: email,
    phoneNumber: phoneNumber,
    message: message,
  };
  localStorage.setItem("user_data", JSON.stringify(user));
  createNotification(`Thank you for writing to us! We will respond ASAP!`);

});
