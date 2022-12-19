const topH = document.querySelector('.top-header');
const hambug = document.querySelector('.hambuger');
function toggleHamburger() {
    if(topH.className === 'top-header') {
        topH.className += ' responsive';
        hambug.innerHTML = '&#10006';
    } else {
        topH.className = 'top-header';
        hambug.innerHTML = '&#9776';
    }
}

hambug.addEventListener('click', toggleHamburger);