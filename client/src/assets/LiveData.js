import React , {useState , useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function NFLNews() {
    const [posts , setPosts] = useState();

    useEffect(() => {
        axios.get('http://reliantstats.com/api/v1/live/2022-11-27/NFL?RSC_token=ebde7dc4f5104a36')
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
        {posts && posts.data.NFL.map((post) => (
                    <div className='row card-centered' >
                        <section className="card col-3 m-3 column">
                        <section className="card-header">
                            <h1>Week {post.week} </h1>
                            <h2>{post.away_team_name} vs {post.home_team_name}</h2>
                        </section>
                        <section className="card-body bg-primary">
                            <h4>{post.away_team_name} Team Stats</h4>
                            <h6>Total Yards: {post.full_box.away_team.team_stats.total_yards}</h6>
                            <h6>Passing Yards: {post.full_box.away_team.team_stats.passing_yards}</h6>
                            <h6>Rushing Yards: {post.full_box.away_team.team_stats.rushing_yards}</h6>
                            <h6>First Downs: {post.full_box.away_team.team_stats.first_downs}</h6>
                            <h6>Total Plays: {post.full_box.away_team.team_stats.total_plays}</h6>
                            <h6>Turnovers: {post.full_box.away_team.team_stats.turnovers}</h6>
                            <h6>Sacks: {post.full_box.away_team.team_stats.sacks}</h6>
                            <h6>Penalties: {post.full_box.away_team.team_stats.penalties.total} for {post.full_box.away_team.team_stats.penalties.yards} Yards</h6>
                        </section>
                            <h4>{post.home_team_name} Team Stats</h4>
                            <h6>Total Yards: {post.full_box.home_team.team_stats.total_yards}</h6>
                            <h6>Passing Yards: {post.full_box.home_team.team_stats.passing_yards}</h6>
                            <h6>Rushing Yards: {post.full_box.home_team.team_stats.rushing_yards}</h6>
                            <h6>First Downs: {post.full_box.home_team.team_stats.first_downs}</h6>
                            <h6>Total Plays: {post.full_box.home_team.team_stats.total_plays}</h6>
                            <h6>Turnovers: {post.full_box.home_team.team_stats.turnovers}</h6>
                            <h6>Sacks: {post.full_box.home_team.team_stats.sacks}</h6>
                            <h6>Penalties: {post.full_box.home_team.team_stats.penalties.total} for {post.full_box.away_team.team_stats.penalties.yards} Yards</h6>
                        </section>
                    </div> 
        ))} 
        </div> 
    )
}

export default NFLNews
