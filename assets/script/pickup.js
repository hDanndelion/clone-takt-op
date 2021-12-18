const pickUpPagination = document.getElementsByClassName('pickUpPagination');
const spans = [...pickUpPagination[0].children];
const pickUpItems = [...document.getElementsByClassName('pickUpItem')];
const pickUpList = document.getElementsByClassName('pickUpList')[0];
const pickUpBtns = [...document.getElementsByClassName('pickUpBtn')];

function start() {
    handlePagi();
    handleBtn();
}

start();

function handlePagi() {

    spans.map(span => {
        span.onclick = () => {
            if (span.classList.length == 1) {
                return;
            }

            /* Chỉ chọn 1, thì cứ reset hết đi rồi thêm cái mới, hơi ngu nhưng sửa sau */
            spans.find(span => span.classList.length == 1).classList.remove('active');

            span.classList.add('active');

            handleImg(span.getAttribute('data-pagi'));
        }
    })
}

function handleBtn() {
    pickUpBtns.map(pickUpBtn => {
        pickUpBtn.onclick = () => {
            let _dataImg = pickUpItems.find(pickUpItem => pickUpItem.classList[1] == pickUpBtn.classList[1]).getAttribute('data-img');
            handleImg(_dataImg);
        }
    })
}

function handleImg(dataPagi) {
    dataPagi = parseInt(dataPagi);

    /* reset class */
    pickUpItems.forEach(pickUpItem => {
        pickUpItem.className = "pickUpItem";
    })

    pickUpItems.find(pickUpItem => dataPagi == parseInt(pickUpItem.getAttribute('data-img'))).classList.add('active');

    pickUpItems.find(pickUpItem => {
        if ((dataPagi+1) > pickUpItems.length) {
            return 1 == parseInt(pickUpItem.getAttribute('data-img'));
        }

        return (dataPagi+1) == parseInt(pickUpItem.getAttribute('data-img'));
    }).classList.add('next');

    pickUpItems.find(pickUpItem => {
        if ((dataPagi-1) < 1) {
            return pickUpItems.length == parseInt(pickUpItem.getAttribute('data-img'));
        }

        return (dataPagi-1) == parseInt(pickUpItem.getAttribute('data-img'));
    }).classList.add('prev');

    let widpickUpItem = -(pickUpItems[0].offsetWidth*(dataPagi-1));
    pickUpList.style.transform = `translate(${widpickUpItem}px)`
}