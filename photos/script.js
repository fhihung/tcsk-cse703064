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
// Lấy danh sách các nút menu và phần nội dung tương ứng
const menuButtons = Array.from(document.querySelectorAll('.menu-sub-title'));
const menuViews = Array.from(document.querySelectorAll('.menu-content'));

// Chỉ mục của nút menu đang được chọn
let activeIndex = 0;

// Gán sự kiện onclick cho mỗi nút menu
menuButtons.forEach((button, index) => {
    button.onclick = (event) => {
        // Xử lý nút menu được nhấp vào
        handleActiveMenu(event.target);
        // Hiển thị phần nội dung tương ứng với nút menu được chọn
        handleActiveMenuView(activeIndex);
        // Cuộn trang web đến phần menu
        scrollToSection();
    };
});

// Xử lý nút menu được nhấp vào
function handleActiveMenu(clickedButton) {
    const clickedButtonName = clickedButton.innerText.toLowerCase();

    menuButtons.forEach((button, index) => {
        const buttonName = button.innerText.toLowerCase();

        if (clickedButtonName === buttonName) {
            // Đánh dấu nút menu là hoạt động
            button.classList.add('active');
            // Cập nhật chỉ mục nút menu đang được chọn
            activeIndex = index;
        } else {
            button.classList.remove('active');
        }
    });
}

// Hiển thị phần nội dung tương ứng với nút menu được chọn
function handleActiveMenuView(activeIndex) {
    menuViews.forEach((menu, index) => {
        if (activeIndex === index) {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
}

// Cuộn trang web đến phần menu
function scrollToSection() {
    const section = document.getElementById('menu');
    section.scrollIntoView({ behavior: 'smooth' });
}
