import React, { useState } from 'react';
import axios from 'axios';
import DropDown from '../components/DropDownAbbrComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Table,
} from 'react-bootstrap';



const SearchWeek = () => {
  const [searchInput, setSearchInput] = useState('');
  var [teamInput, setTeamInput] = useState('');

  const [posts, setPosts] = useState();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      var teamChange = "";
      if (teamInput === 'BUF') {
        teamChange = '1'
      } else if (teamInput === 'NYJ') {
        teamChange = '2'
      } else if (teamInput === 'DET') {
        teamChange = '3'
      } else if (teamInput === 'GB') {
        teamChange = '4'
      } else if (teamInput === 'CAR') {
        teamChange = '5'
      } else if (teamInput === 'TEN') {
        teamChange = '6'
      } else if (teamInput === 'CHI') {
        teamChange = '7'
      } else if (teamInput === 'LAR') {
        teamChange = '8'
      } else if (teamInput === 'MIA') {
        teamChange = '9'
      } else if (teamInput === 'NO') {
        teamChange = '10'
      } else if (teamInput === 'WSH') {
        teamChange = '11'
      } else if (teamInput === 'TB') {
        teamChange = '12'
      } else if (teamInput === 'JAX') {
        teamChange = '13'
      } else if (teamInput === 'BAL') {
        teamChange = '14'
      } else if (teamInput === 'MIN') {
        teamChange = '15'
      } else if (teamInput === 'DAL') {
        teamChange = '16'
      } else if (teamInput === 'LV') {
        teamChange = '17'
      } else if (teamInput === 'KC') {
        teamChange = '18'
      } else if (teamInput === 'DEN') {
        teamChange = '19'
      } else if (teamInput === 'NE') {
        teamChange = '20'
      } else if (teamInput === 'NYG') {
        teamChange = '21'
      } else if (teamInput === 'PIT') {
        teamChange = '22'
      } else if (teamInput === 'ARI') {
        teamChange = '23'
      } else if (teamInput === 'SEA') {
        teamChange = '24'
      } else if (teamInput === 'HOU') {
        teamChange = '25'
      } else if (teamInput === 'CLE') {
        teamChange = '26'
      } else if (teamInput === 'CIN') {
        teamChange = '27'
      } else if (teamInput === 'IND') {
        teamChange = '28'
      } else if (teamInput === 'ATL') {
        teamChange = '29'
      } else if (teamInput === 'SF') {
        teamChange = '30'
      } else if (teamInput === 'DET') {
        teamChange = '31'
      } else if (teamInput === 'PHI') {
        teamChange = '32'
      } else {
        setTeamInput('')
      }
      const response = await axios.get(`http://reliantstats.com/api/v1/live/${searchInput}/NFL?RSC_token=ebde7dc4f5104a36&team_id=${teamChange}`)
        .then(res => {
          console.log(res.data)
          setPosts(res.data)
        })
      if (!response.ok) {
        throw new Error('No game that day or no data for that game!');
      }

      setSearchInput('');;
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <div fluid className='text-light bg-dark SB-style'>
        <Container>
          <h1 className='gfont'>Search the Weeks!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row className=''>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='YYYY-MM-DD'
                />
                <Form.Control
                className="form-m"
                  name='searchInput'
                  value={teamInput}
                  onChange={(e) => setTeamInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='All caps Team Abbreviation, if empty will search all games'
                />
              </Col>
              <Col xs={12} md={4} className="gfont">
                <Button type='submit' variant='success' size='lg'>
                  Search
                </Button>
                <DropDown />
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </div>
      <section>
        <section className='text-center data-table'>
          {posts && posts.data.NFL.map((post) => {
            return (
              <section className='card data-table'>
                <Card.Body>
                  <Card.Title className='gfont'><h2>Week {post.week}</h2></Card.Title>
                  <Table>
                    <tbody>
                      <td style={{ width: "33%" }} className="final-score gfont"><h3>{post.away_team_name}</h3></td>
                      <td style={{ width: "33%" }} className="final-score gfont">VS</td>
                      <td style={{ width: "33%" }} className="final-score gfont"><h3>{post.home_team_name}</h3></td>
                    </tbody>
                    <tbody>
                      <td style={{ width: "33%" }}>{post.full_box.away_team.record}</td>
                      <td style={{ width: "33%" }}><strong>Team Record</strong></td>
                      <td style={{ width: "33%" }}>{post.full_box.home_team.record}</td>
                    </tbody>
                    <tbody>
                      <td style={{ width: "33%" }} className="final-score">{post.full_box.away_team.score}</td>
                      <td style={{ width: "33%" }} className="final-score"><strong>FINAL SCORE</strong></td>
                      <td style={{ width: "33%" }} className="final-score">{post.full_box.home_team.score}</td>
                    </tbody>
                    <tbody>
                      <td style={{ width: "33%" }}>{post.full_box.away_team.team_stats.total_yards}</td>
                      <td style={{ width: "33%" }}><strong>Total Yards</strong></td>
                      <td style={{ width: "33%" }}>{post.full_box.home_team.team_stats.total_yards}</td>
                    </tbody>
                    <tbody>
                      <td style={{ width: "33%" }}>{post.full_box.away_team.team_stats.passing_yards}</td>
                      <td style={{ width: "33%" }}><strong>Passing Yards</strong></td>
                      <td style={{ width: "33%" }}>{post.full_box.home_team.team_stats.passing_yards}</td>
                    </tbody>
                    <tbody>
                      <td style={{ width: "33%" }}>{post.full_box.away_team.team_stats.rushing_yards}</td>
                      <td style={{ width: "33%" }}><strong>Rushing Yards</strong></td>
                      <td style={{ width: "33%" }}>{post.full_box.home_team.team_stats.rushing_yards}</td>
                    </tbody>
                    <tbody>
                      <td style={{ width: "33%" }}>{post.full_box.away_team.team_stats.first_downs}</td>
                      <td style={{ width: "33%" }}><strong>First Down</strong>s</td>
                      <td style={{ width: "33%" }}>{post.full_box.home_team.team_stats.first_downs}</td>
                    </tbody>
                    <tbody>
                      <td style={{ width: "33%" }}>{post.full_box.away_team.team_stats.total_plays}</td>
                      <td style={{ width: "33%" }}><strong>Total Plays</strong></td>
                      <td style={{ width: "33%" }}>{post.full_box.home_team.team_stats.total_plays}</td>
                    </tbody>
                    <tbody>
                      <td style={{ width: "33%" }}>{post.full_box.away_team.team_stats.turnovers}</td>
                      <td style={{ width: "33%" }}><strong>Turnovers</strong></td>
                      <td style={{ width: "33%" }}>{post.full_box.home_team.team_stats.turnovers}</td>
                    </tbody>
                    <tbody>
                      <td style={{ width: "33%" }}>{post.full_box.away_team.team_stats.sacks}</td>
                      <td style={{ width: "33%" }}><strong>Sacks</strong></td>
                      <td style={{ width: "33%" }}>{post.full_box.home_team.team_stats.sacks}</td>
                    </tbody>
                    <tbody>
                      <td style={{ width: "33%" }}>{post.full_box.away_team.team_stats.penalties.total} for {post.full_box.away_team.team_stats.penalties.yards} Yards</td>
                      <td style={{ width: "33%" }}><strong>Penalities</strong></td>
                      <td style={{ width: "33%" }}>{post.full_box.home_team.team_stats.penalties.total} for {post.full_box.home_team.team_stats.penalties.yards} Yards</td>
                    </tbody>
                  </Table>
                </Card.Body>
              </section>
            );
          })}
        </section>
      </section>
    </div>
  )
}


export default SearchWeek