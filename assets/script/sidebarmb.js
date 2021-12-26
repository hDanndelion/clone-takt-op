const sideBarMbSymb = document.getElementsByClassName('sideBarMbSymb')[0];
const sideBarMbLayout = document.getElementsByClassName('sideBarMbLayout')[0];

sideBarMbSymb.onclick = () => {
    if (sideBarMbSymb.classList.length == 1) {
        sideBarMbSymb.classList.add('open');
        sideBarMbLayout.classList.add('open');
    } else {
        sideBarMbSymb.classList.remove('open');
        sideBarMbLayout.classList.remove('open');
    }
}