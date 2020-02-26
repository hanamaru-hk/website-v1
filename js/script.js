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
    const section = 50000;
    const bodyRect = body.getBoundingClientRect()
    const elemRect = elem.getBoundingClientRect()
    const elemOffset   = elemRect.top - bodyRect.top;
    const htmlOffset =  html.scrollTop;
    const offset = elemOffset - htmlOffset;
    console.log(htmlOffset, elemOffset, offset)
    let offsetMovement = offset / section;
    let total = 0;
    function frame(){
        if (Math.abs(total) >= Math.abs(offset)){
            html.scrollTop = elemOffset;
            clearInterval(id)
            return
        }
        html.scrollTop += offsetMovement;
        offsetMovement *= 1.15;
        total += Math.abs(offsetMovement)
    }
    var id = setInterval(frame, 10)
}

function getById(id){
    return document.getElementById(id)
}

function getByTag(tag){
    return document.getElementsByTagName(tag)
}



