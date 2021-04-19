const navbar = document.querySelector('.nav');

console.log('hello')

window.onscroll = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.style.backgroundColor = "#ffcece";
        navbar.style.transition = "background-color 0.3s";
    } else {
        navbar.style.backgroundColor = "white";
        navbar.style.transition = "background-color 0.3s";
    }
}