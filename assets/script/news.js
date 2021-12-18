const newsApi = 'http://localhost:3000/news';

function start() {
    getNewsList(renderList);

    
    ReactDOM.render(<NewsEvent />, document.getElementsByClassName("newsEvent")[0]);
}

start();

function getNewsList(callback) {
    fetch(newsApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function renderList(newsLists) {
    function NewsEvent() {
        console.log(newsLists)
        return (
            <ul>
                {
                    newsLists.map(newsList => (
                        <NewsItem
                            key={newsList.id}
                            newsList={newsList}
                        />
                    ))
                }
            </ul>
        )
    }
}

function NewsItem(newList) {
        return (
            <li>
                <a href="">
                    <div class="newsDate"><span class="y">{newList.year}</span><span class="md">{newList.dayandmonth}</span></div>

                    <div class="newsDateText">
                        <p>{newList.text}</p>
                    </div>
                </a>
            </li>
        )
}

