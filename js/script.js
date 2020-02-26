function toggleMenu() {
    const nav = document.getElementById('nav-list');
    nav.classList.toggle('nav-list-expand');
}

function toggle(elemName, className) {
    console.log('toggle', document.getElementById(elemName))
    document.getElementById(elemName).classList.toggle(className);
    console.log('toggle', document.getElementById(elemName))
}

function scrollToSection(elem) {
    const html = getByTag('html')[0]
    const body = getByTag('body')[0]
    const bodyRect = body.getBoundingClientRect()
    const elemRect = elem.getBoundingClientRect()
    const offset   = elemRect.top - bodyRect.top;
    move(offset)
}

function move(offset) {
    const html = getByTag('html')[0]
    const body = getByTag('body')[0]
    const totalInterval = offset / 10
    let offsetMovement = 0 //= html.scrollTop;
    function frame() {
        offsetMovement += totalInterval
        html.scrollTop = offsetMovement
        html.scrollTop = offsetMovement
        if (offsetMovement > offset)  // check finish condition
            clearInterval(id)
    }
    var id = setInterval(frame, 10) // draw every 10ms
}


function getById(id){
    return document.getElementById(id)
}

function getByTag(tag){
    return document.getElementsByTagName(tag)
}


