import React , {useState , useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function NFLNews() {
    const [posts , setPosts] = useState();

    useEffect(() => {
        axios.get('https://site.api.espn.com/apis/site/v2/sports/football/nfl/news')
        .then(res => {
            // console.log(res)
            console.log(res.data)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    
    return (
        <div>
            <h1 className='HHC'>Latest News and Articles</h1>
        {posts && posts.articles.map((post) => (
                    <div className='row card-centered' >
                        <section className="card col-3 m-3 column w-75">
                        <section className="card-header">
                            <h2>{post.headline}</h2>
                        </section>
                        <section className="bg-secondary photo">
                            <img src={post.images[0].url} alt="image" />
                        </section>
                        <h5 className='description'>{post.description}</h5>
                        <p key={post.key} className="description">Click <a href={post.links.web.href} target="_blank" className='link'>Here</a> for the entire Article</p>
                        <p>Published on: {post.published}</p>
                        </section>
                    </div> 
        ))} 
        </div> 
    )
}

export default NFLNews
