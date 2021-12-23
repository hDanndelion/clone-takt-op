function start() {
    handleIntroduc();
}

start();

function handleIntroduc() {
    const introTextHighlights = [...document.getElementsByClassName('introTextHighlight')];
    
    document.onscroll = () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        introTextHighlights.map(introTextHighlight => {
            let point = introTextHighlight.offsetTop + 1999;
            
            if (scrollTop < point) {
                if (introTextHighlight.classList.length == 2) {
                    introTextHighlight.classList.remove('came');
                }

                return
            }

            if (scrollTop > introTextHighlight.offsetTop) {
                if (introTextHighlight.classList.length == 2) {
                    return;
                }

                introTextHighlight.classList.add('came');
            }
        })
    }
}