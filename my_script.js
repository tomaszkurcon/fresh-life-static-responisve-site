const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    })
}, {threshold:0.5})
const nav_bar = document.getElementById("navigation")
const sections = document.querySelectorAll(".hidden")
sections.forEach(el=>observer.observe(el))
document.addEventListener("scroll", (event)=> {
    nav_bar.classList.add("transparency")
})
document.addEventListener("scrollend", (event) => {

    nav_bar.classList.remove("transparency")
})