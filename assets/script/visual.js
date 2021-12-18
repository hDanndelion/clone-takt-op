const visualLis = [...document.getElementsByClassName('visualLi')];
const coverImages = [...document.getElementsByClassName('coverImage')];

function start() {
    handleVisual(visualLis);
}

start();

function handleVisual(visualLis) {
    visualLis.map(visualLi => {
        visualLi.onclick = () => {

            if ( visualLi.classList.length == 2) {
                return;
            }

            visualLis.find(visualLi => visualLi.classList.length == 2).classList.remove('active');
            let _coverImage = coverImages.find(coverImage => coverImage.classList.length == 3);
            coverImages.find(coverImage => coverImage.classList.length == 2).classList.add('active');
            _coverImage.classList.remove('active');
            visualLi.classList.add('active');
        }
    })
}