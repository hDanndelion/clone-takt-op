function start() {
    handleIntroduc();
}

start();

function handleIntroduc() {
    const introTextHighlights = [...document.getElementsByClassName('introTextHighlight')];
    console.log(introTextHighlights[0].getBoundingClientRect().y)
    console.log(window.innerHeight)
    
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
        // let scrollTop = window.scrollY || document.documentElement.scrollTop;
        // console.log(scrollTop)

        // introTextHighlights.map(introTextHighlight => {
        //     if (window.innerWidth >= 1900) {
        //         var wdWidth = 2600;
        //     } else if (window.innerWidth >= 1600) {
        //         var wdWidth = 2250;
        //     } else if (window.innerWidth >= 1500) {
        //         var wdWidth = 2150;
        //     } else if (window.innerWidth >= 1200) {
        //         var wdWidth = 1870;
        //     } else if (window.innerWidth >= 1024) {
        //         var wdWidth = 1730;
        //     } else if (window.innerWidth >= 768){
        //         var wdWidth = 3700;
        //     } else if (window.innerWidth >= 540){
        //         var wdWidth = 2630;
        //     } else if (window.innerWidth > 320) {
        //         var wdWidth = 2030;
        //     } else {
        //         var wdWidth = 1760;
        //     }
            
        //     let point = introTextHighlight.offsetTop + wdWidth;
            
        //     if (scrollTop < point) {
        //         if (introTextHighlight.classList.length >= 2) {
        //             introTextHighlight.classList.remove('came');
        //         }

        //         return
        //     }

        //     if (scrollTop > point) {
        //         if (introTextHighlight.classList.length == 2) {
        //             return;
        //         }

        //         introTextHighlight.classList.add('came');
        //     }
        // })



    }
}