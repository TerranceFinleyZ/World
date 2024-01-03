const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("menu-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEnventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})