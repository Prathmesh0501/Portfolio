const navLinks = document.getElementById('navList');
const ham = document.getElementById('ham');
const hamInner = document.getElementById('hamInner');

ham.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamInner.classList.toggle('fa-times');
});