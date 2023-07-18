const brandName = document.querySelector(".brand");

document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 160) {
        brandName.style.display = "none";

    } else {
        brandName.style.display = "block";
    }
});
// menu click
const menuButtons = Array.from(document.querySelectorAll('.menu-sub-title'));
const menuViews = Array.from(document.querySelectorAll('.menu-content'));
let activeIndex = 0;

menuButtons.forEach((button, _, arr) => {
    button.onclick = (event) => {
        handleActiveMenu(event.target);
        handleActiveMenuView(activeIndex);
        scrollToSection();
    }
})

function handleActiveMenu(el) {
    const name = el.innerText.toLowerCase();
    menuButtons.forEach((target, index) => {
        if (name === target.innerText.toLowerCase()) {
            target.classList.add('active');
            activeIndex = index;
        }
        else {
            target.classList.remove('active');
        }
    })
}

function handleActiveMenuView(activeIndex) {
    menuViews.forEach((menu, index) => {
        if (activeIndex === index) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    })
}

function scrollToSection() {
    const section = document.getElementById('menu');
    section.scrollIntoView({ behavior: 'smooth' });
}
