const newsApi = 'http://localhost:3000/news';

function start() {
    getNewsList(renderList);
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
                    
    function NewsItem({newsList}) {
        return (
                <li>
                    <a href="">
                        <div className="newsDate"><span className="y">{newsList.year}</span><span className="md">{newsList.daynmonth}</span></div>
    
                        <div className="newsDateText">
                            <p>{newsList.text}</p>
                        </div>
                    </a>
                </li>
            )
    }
                            
                            
    ReactDOM.render(<NewsEvent />, document.getElementsByClassName("newsEvent")[0]);
}

