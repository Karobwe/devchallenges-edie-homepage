export default function() {
    let menuToggle = document.querySelector('.menu__toggle');
    let menuCollapse = document.querySelector('.menu__collapse');
    let menuIcon = document.querySelector('.menu__toggle .material-icons');
    let menuLinks = document.querySelectorAll('.menu-collapse .menu__item');

    menuToggle.addEventListener('click', (e) => {
        menuCollapse.classList.toggle('opened');

        if(!menuCollapse.classList.contains('opened')) {
            // show opened icon
            menuIcon.innerHTML = 'menu';
            // Reset icon color from white to actual menu item's color
            menuIcon.style.color = 'inherit';
        } else {
            // show closed icon
            menuIcon.innerHTML = 'close';
            menuIcon.style.color = '#FFF';
        }
    });
}
