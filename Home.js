var body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'lightblue';

// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.pageYOffset;
    if (scroll < 700) {
        // green
        body.style.backgroundColor = 'lightblue';
    } else if (scroll >= 700 && scroll < 1500) {
        // yellow
        body.style.backgroundColor = 'lightgreen';
    } else if (scroll >= 1500 && scroll < 2500) {
        // blue
        body.style.backgroundColor = 'pink';
    } else if (scroll >= 2500 && scroll < 3400) {
        // orange
        body.style.backgroundColor = 'orange';
    } else if (scroll >= 3400 && scroll < 4400) {
        // red
        body.style.backgroundColor = 'purple';
    } else {
        // purple
        body.style.backgroundColor = 'darkblue';
    }
}