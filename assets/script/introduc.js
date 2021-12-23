function start() {
    handleIntroduc();
}

start();

function handleIntroduc() {
    const introTextHighlights = [...document.getElementsByClassName('introTextHighlight')];
    
    document.onscroll = () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;

        introTextHighlights.map(introTextHighlight => {
            if (window.innerWidth >= 1900) {
                var wdWidth = 2580;
            } else if (window.innerWidth >= 1500) {
                var wdWidth = 2330;
            } else {
                var wdWidth = 2130;
            }
            
            let point = introTextHighlight.offsetTop + wdWidth;
            
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