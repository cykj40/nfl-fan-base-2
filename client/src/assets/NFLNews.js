import React , {useState , useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        {posts && posts.articles.map((post) => (
                    <div className='row card-centered' >
                        <section className="card col-3 m-3 column">
                        <section className="card-header">
                            <h2>{post.headline}</h2>
                        </section>
                        <section className="card-body bg-secondary">
                            <img src={post.images[0].url} alt="image" />
                        </section>
                        <h5>{post.description}</h5>
                        <a href={post.links.web.href} target="_blank"><p key={post.key}>Click Here for the entire Article</p></a>
                        <p>Published on: {post.published}</p>
                        </section>
                    </div> 
        ))} 
        </div> 
    )
}

export default NFLNews
