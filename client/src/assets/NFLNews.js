import React , {useState , useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {  Col, Row } from 'react-bootstrap';

function NFLNews() {
    const [posts , setPosts] = useState();

    useEffect(() => {
        axios.get('https://site.api.espn.com/apis/site/v2/sports/football/nfl/news')
        .then(res => {
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
          <Row>
            {posts && posts.articles.map((post) => (
              <Col md={4} key={post.key} className="mb-4">
                <section className="card">
                  <section className="card-header">
                    <h2 className='HHC'>{post.headline}</h2>
                  </section>
                  <section className="bg-secondary photo">
                    <img src={post.images[0].url} alt="image" />
                  </section>
                  <h5 className='description HHC'>{post.description}</h5>
                  <p key={post.key} className="description C-T">
                    Click <a href={post.links.web.href} target="_blank" className='link'><strong>Here</strong></a> for the entire Article
                  </p>
                  <p className='C-T'>Published on: {post.published}</p>
                </section>
              </Col>
            ))}
          </Row>
        </div>
      );
}

export default NFLNews