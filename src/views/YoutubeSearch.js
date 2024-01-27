import '../views/YoutubeSearch.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'
import moment from 'moment'
const YoutubeSearch = () => {

    const [videos, setVideos] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {

    }, [])

    const handleSearch = async () => {
        let res = await axios({

            'method': 'GET',
            'url': 'https://www.googleapis.com/youtube/v3/search',
            'params': {
                'part': 'snippet',
                'maxResults': '10',
                'key': 'AIzaSyAUDdg5VyOwENPbSMfzEAOKy05N_9ftZ0A',
                'type': 'video',
                'q': query
            }
        })

        if (res && res.data && res.data.items) {
            let raw = res.data.items;
            let result = [];
            if (raw && raw.length > 0) {

                raw.map(item => {
                    let object = {};
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.createdAt = item.snippet.publishedAt;
                    object.author = item.snippet.channelTitle
                    object.description = item.snippet.description;

                    result.push(object);
                })


            }

            // console.log(result);
            setVideos(result)

        }

        // console.log("response: ", res)
    }
    return (
        <div className="youtube-search-container">
            <h1>Youtube Search</h1>
            <div className="yt-search">
                <input type="text" placeholder='Search' value={query} onChange={(event) => setQuery(event.target.value)} />
                <button type="button" onClick={handleSearch}>Search</button>

            </div>

            {videos && videos.length > 0 &&
                videos.map(item => {
                    return (

                        <div className='yt-result' key={item.id}>

                            <div className='left'>
                                <iframe className="yt-frame" src={`https://www.youtube.com/embed/${item.id}`}
                                    title={item.title}
                                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen></iframe>
                            </div>

                            <div className='right'>
                                <div className='title'>
                                    {item.title}
                                </div>

                                <div className='created-at'>
                                    Created at : {moment(item.createdAt).format('DD/MM/YYYY HH:mm:ss A')}
                                </div>
                                <div className='author'>
                                    {item.author}
                                </div>
                                <div className='description'>
                                    {item.description}
                                </div>

                            </div>


                        </div>

                    )
                })
            }





        </div >
    )
}

export default YoutubeSearch