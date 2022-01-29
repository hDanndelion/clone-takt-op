function start() {
    handleIntroduc();
}

start();

function handleIntroduc() {
    const introTextHighlights = [...document.getElementsByClassName('introTextHighlight')];

    
    document.onscroll = () => {
        let height = window.innerHeight;
        
        introTextHighlights.map(introTextHighlight => {
            let located = introTextHighlight.getBoundingClientRect().y;

            if (located < height) {
                introTextHighlight.classList.add('came')
            } else {
                introTextHighlight.classList.remove('came');
            }
        })
    }
}