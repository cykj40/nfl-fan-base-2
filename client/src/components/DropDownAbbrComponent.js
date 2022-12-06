import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function DropDown() {
  return (
    <div>
           <Dropdown className="drop-m gfont">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                 Check Team Abbreviations
                </Dropdown.Toggle>
                <Dropdown.Menu className="drop-style">
                  <Dropdown.Item>Arizona Cardinals: ARI</Dropdown.Item>
                  <Dropdown.Item>Atlanta Falcons: ATL</Dropdown.Item>
                  <Dropdown.Item>Baltimore Ravens: BAL</Dropdown.Item>
                  <Dropdown.Item>Buffalo Bills:	BUF	</Dropdown.Item>
                  <Dropdown.Item>Carolina Panthers: CAR	</Dropdown.Item>
                  <Dropdown.Item>Chicago Bears:	CHI	</Dropdown.Item>
                  <Dropdown.Item>Cincinnati Bengals: CIN</Dropdown.Item>
                  <Dropdown.Item>Cleveland Browns: CLE</Dropdown.Item>
                  <Dropdown.Item>Dallas Cowboys: DAL</Dropdown.Item>
                  <Dropdown.Item>Denver Broncos: DEN</Dropdown.Item>
                  <Dropdown.Item>Detroit Lions:	DET</Dropdown.Item>
                  <Dropdown.Item>Green Bay Packers: GB</Dropdown.Item>
                  <Dropdown.Item>Houston Texans: HOU</Dropdown.Item>
                  <Dropdown.Item>Indianapolis Colts: IND</Dropdown.Item>
                  <Dropdown.Item>Jacksonville Jaguars: JAX</Dropdown.Item>
                  <Dropdown.Item>Kansas City Chiefs: KC</Dropdown.Item>
                  <Dropdown.Item>Miami Dolphins: MIA</Dropdown.Item>
                  <Dropdown.Item>Minnesota Vikings:	MIN</Dropdown.Item>
                  <Dropdown.Item>New England Patriots: NE</Dropdown.Item>
                  <Dropdown.Item>New Orleans Saints: NO</Dropdown.Item>
                  <Dropdown.Item>New York Giants: NYG</Dropdown.Item>
                  <Dropdown.Item>New York Jets:	NYJ</Dropdown.Item>
                  <Dropdown.Item>Las Vegas Raiders:	LV</Dropdown.Item>
                  <Dropdown.Item>Philadelphia Eagles: PHI</Dropdown.Item>
                  <Dropdown.Item>Pittsburgh Steelers: PIT</Dropdown.Item>
                  <Dropdown.Item>Los Angeles Chargers: LAC</Dropdown.Item>
                  <Dropdown.Item>San Francisco 49ers: SF</Dropdown.Item>
                  <Dropdown.Item>Seattle Seahawks: SEA</Dropdown.Item>
                  <Dropdown.Item>Los Angeles Rams: LAR</Dropdown.Item>
                  <Dropdown.Item>Tampa Bay Buccaneers: TB</Dropdown.Item>
                  <Dropdown.Item>Tennessee Titans: TEN</Dropdown.Item>
                  <Dropdown.Item>Washington Commanders: WAS</Dropdown.Item>
                  <Dropdown.Item></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
    </div>
  )
}