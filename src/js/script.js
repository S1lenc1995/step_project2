const btnHamburger=document.querySelector("#btnHamburger");
const firstSpan = btnHamburger.firstElementChild;
const menu = document.getElementById("overlay");
btnHamburger.addEventListener('click', function () {
    if (btnHamburger.classList.contains('open')) {
        firstSpan.style.width = '15px'
        btnHamburger.classList.remove("open");
        menu.classList.remove("menu");
    } else {
        firstSpan.style.width = '26px';
        btnHamburger.classList.add('open');
        // menu.style.display = 'flex';
        menu.classList.add("menu");

    }
})
menu.addEventListener('click', (event) => {
    for(let i of menu.children) {
        i.classList.remove('active-menu');
        i.classList.remove ('active-line');
    }
    event.target.classList.add('active-menu');
    event.target.classList.add('active-line');
})