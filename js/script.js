/*============================ tooogle icon navbar =============================*/
let menuIcon = document.querySelector('#menu-icon');
let naavbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*============================ scroll sections ctive link =============================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });

    /*============================ sticky nvbr =============================*/
        let header = document.querySelector('header')

        header.classList.toggle('sticky', window.scrollY > 100);


/*========================= remove tooogle icon navbar =============================*/   
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};
