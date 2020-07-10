function toggleCustomizedClass(arrowId, descId) {
    toggle(arrowId, 'lni-arrow-down-circle');
    toggle(arrowId, 'lni-arrow-up-circle');
    toggle(descId, 'course-desc-expand');
}

function toggleMenu() {
    toggle('nav-list', 'nav-list-expand')
}

function closeMenu() {
    document.getElementById('nav-list').classList.remove('nav-list-expand')
}

function toggle(elemName, className) {
    document.getElementById(elemName).classList.toggle(className);
}

function navbarButton(elemName) {
    closeMenu();
    scrollToSection(getById(elemName));
}

function scrollToSection(elem) {
    const html = getByTag('html')[0]
    const body = getByTag('body')[0]
    const section = 50000;
    const bodyRect = body.getBoundingClientRect()
    const elemRect = elem.getBoundingClientRect()
    const elemOffset = elemRect.top - bodyRect.top;
    const htmlOffset = html.scrollTop;
    const offset = elemOffset - htmlOffset;
    console.log(htmlOffset, elemOffset, offset)
    let offsetMovement = offset / section;
    let total = 0;

    function frame() {
        if (Math.abs(total) >= Math.abs(offset)) {
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

function getById(id) {
    return document.getElementById(id)
}

function getByTag(tag) {
    return document.getElementsByTagName(tag)
}

function sendForm() {
    var elements = document.getElementsByClassName("contact-form");
    var formData = new FormData();
    for (var i = 0; i < elements.length; i++) {
        formData.append(elements[i].name, elements[i].value);
    }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            alert(xmlHttp.responseText);
        }
        if (xmlHttp.status == 500) {
            alert(xmlHttp.responseText);
        }
    }
    xmlHttp.open("post", "mail/contact_me.php");
    xmlHttp.send(formData);
}