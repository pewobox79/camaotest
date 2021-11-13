import React, {useState, useEffect} from 'react';
import Articles from'./Articles'

export default function FetchMovieData() {

    const [newsData, setNewsData] = useState();

    useEffect(() => {
        fetch("https://free-news.p.rapidapi.com/v1/search?q=Elon%20Musk&lang=en&page=1", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-news.p.rapidapi.com",
                "x-rapidapi-key": "f2f2dfce82mshcb64156556ea80ap1968b8jsn5e6669fe879d"
            }
        })
            .then(response => response.json())
            .then(data => {

                setNewsData(data.articles)
                console.log(newsData)

            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    // @ts-ignore
    const ListOfArticle = newsData.map((article)=> <Articles title={article.title} key={article.id}/>)

    return (
        <section>
        <div>


        </div>
        <ul>
        {ListOfArticle}
        </ul>
        </section>
    )
}