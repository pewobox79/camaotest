import React, {useState, useEffect} from 'react';
import Articles from './Articles'
import SearchField from './SearchField';
import ProgressBar from './ProgressBar';
import Box from '@mui/material/Box';
import Paginition from './Paginition';
import Weather from '../components/buttons/Weather'

export default function FetchMovieData() {

    const [newsData, setNewsData] = useState();
    const [searchTerm, setSearchTerm] = useState();
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        fetch(`https://free-news.p.rapidapi.com/v1/search?q=${searchTerm}&lang=en&page=${pageNumber}`, {
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
    }, [searchTerm, pageNumber]);

    console.log(newsData)
    if (!newsData) {

        return (<ProgressBar/>)

    }
    // @ts-ignore
    const ListOfArticle = newsData.map((article) => <Articles title={article.title} key={article.id} source={article.clean_url} summary={article.summary} date={article.published_date} author={article.author}/>)
    // @ts-ignore
    return (
        <>

        <Box sx={{display: "flex", justifyContent: "center", alignItems: 'center'}}>
            <section style={{marginLeft: "auto", marginRight: "auto"}}>
                <SearchField setSearchTerm={setSearchTerm}/>
                <Paginition setPageNumber={setPageNumber} pageNumber={pageNumber}/>
                <ul>
                    {ListOfArticle}
                </ul>
            </section>

            <section>

            </section>
        </Box>
            </>
    )
}