const movie = document.querySelector('.movie');
const vidLayout = document.querySelector('.vidLayout');
const span = vidLayout.querySelector('span');

movie.onclick = () => {
    vidLayout.classList.remove('hidden');
}

span.onclick = () => {
    vidLayout.classList.add('hidden');
}