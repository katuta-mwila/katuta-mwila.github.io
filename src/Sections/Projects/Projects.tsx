import { faCss, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { Box, VertBox } from "../../Components/Box";
import SkillTile from "../Skills/SkillTile";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function Projects(){
  return <VertBox tag='section' className="flex flex-col items-center" gap='20px'>
    <div className="content-width">
      <h2>My Projects</h2>
    </div>
    <div className="content-box content-width projects-box section-box">
      <div className='proj-con'>
        <VertBox className="proj-left" gap='20px'>
          <VertBox className="proj-sec" gap='20px'>
            <p className="font-bold text-[50px]">Performance Logger</p>
            <p>Performance Logger is a website and tool that lets users record, view, and analyise a collection of datapoints.</p>
            <ul className="list-disc list-inside">
              <li>A datapoint consists of a date paired with a value of a particular metric of the following (Length, Weight, Time, Currency, or Unit).</li>
              <li>As datapoints are logged a graph alongside basic analytics is automatically generated giving a clear view of the trend of the datapoints.</li>
              <li>The way the data is viewed can be configured by changing properties such as the unit, graph type, and by optionally grouping the data by week or month and viewing various analytics attributed to each week or month.</li>
            </ul>
          </VertBox>
          <VertBox className="proj-sec" gap='10px'>
            <h4 className="font-bold">Development</h4>
            <p>Performance Logger is a full stack application built using the following key technologies</p>
            <p className="font-bold">Front End Tech</p>
            <Box className="skills-tiles" gap='10px'>
              <SkillTile icon={faCss} text="CSS"/>
              <SkillTile icon={faJs} text="JavaScript"/>
              <SkillTile icon={'/images/typescript-svgrepo-com.svg'} text='TypeScript'/>
              <SkillTile icon={faReact} text="React"/>
              <SkillTile text="React Charts"/>
            </Box>
            <p className="font-bold">Back End Tech</p>
            <Box className="skills-tiles" gap='10px'>
              <SkillTile icon={faNodeJs} text="NodeJS"/>
              <SkillTile icon={faDatabase} text="PostgresSQL"/>
              <SkillTile text="Express"/>
              <SkillTile text="Knex"/>
            </Box>
            <p style={{marginTop: '10px'}}>Performance Logger uses <a target='_blank' className="link" href='https://auth0.com/'>Auth0</a> for use authentication and was deployed using the cloud service <a target='_blank' className="link" href='https://vercel.com/'>Vercel</a>.</p>
          </VertBox>
          <VertBox className="proj-sec" gap='10px'>
            <h4 className="font-bold">What I Learned</h4>
            <ul className="list-disc list-inside">
              <li>How to build charts using React Charts</li>
              <li>How to use Knex and PostgreSQL to store persistent data</li>
              <li>How to deploy a NodeJS application to vercel</li>
              <li>Using Auth0 as the authentication provider</li>
            </ul>
          </VertBox>
          <VertBox className="proj-sec" gap='10px'>
            <h4 className="font-bold">Links</h4>
            <p>The demo contains randomly generated datapoints and gives a good idea for what the website is useful for.</p>
            <ul className="list-disc list-inside">
              <li><a target='_blank' className="link" href='https://performance-logger-demo.vercel.app/'>Demo</a></li>
              <li><a target='_blank' className="link" href='https://performance-logger.vercel.app/'>Main Website</a></li>
              <li><a target='_blank' className="link" href='https://github.com/katuta-mwila/performance-logger'>GitHub</a></li>
            </ul>
          </VertBox>
        </VertBox>
        <VertBox className="proj-right" gap='20px'>
          <VertBox className="proj-img-sec" gap='5px'>
            <p>Data showing amount of steps per day</p>
            <img src="https://i.gyazo.com/4ca88b355189f07e9706e4ab954ee0c6.png"/>
          </VertBox>
          <VertBox className="proj-img-sec" gap='5px'>
            <p>Same data expect grouped by month</p>
            <img src="https://i.gyazo.com/93b7d6b6e4e834ec2f5ae72d3893772d.png"/>
          </VertBox>
        </VertBox>
      </div>
      <div className='proj-con'>
        <VertBox className="proj-left" gap='20px'>
          <VertBox className="proj-sec" gap='20px'>
            <p className="font-bold text-[50px]">Games Center</p>
            <p>A website containing three games, Tic Tac Toe, Connect 4 and Checkers. All games can be played two player locally, singleplayer vs Ai or two player online.</p>
          </VertBox>
          <VertBox className="proj-sec" gap='20px'>
            <h4 className="font-bold">Development</h4>
            <p>Games Center uses .NET 7.0 for the backend API with the front end developed using react as the main framework. The main purpose of using a backend is to facilitate the use of websockets that are required for the online mode to function.
              The backend is also responsible for creating tokens that are associated with the display name a user chooses allowing a user to keep the same name between refreshes.
            </p>
            <p>The website was deployed publicly using a Microsoft Azure app service.</p>
          </VertBox>
          <VertBox className="proj-sec" gap='10px'>
            <h4 className="font-bold">What I Learned</h4>
            <ul className="list-disc list-inside">
              <li>How to create a game Ai using the minimax Algorithm. Every game uses this algorithm to create the Ai, each of the difficulties have some slight adjustments to create separation between the difficulties.</li>
              <li>How to use React context.</li>
              <li>How to use Web Workers in javascript. Because the Ai sometimes takes a non negligible time to calculate the best move this task was better done in the background of the application so that it does not hang the ui.</li>
              <li>How to use Web Sockets. For the online mode web sockets were necessary to allow two way communication between the client and the server.</li>
              <li>How to create an online chat. Example of this in the online mode.</li>
              <li>Using exceptions to short circuit http requests.</li>
              <li>How to deploy a website to Microsoft Azure</li>
            </ul>
          </VertBox>
          <VertBox className="proj-sec" gap='20px'>
            <h4 className="font-bold">Game Modes</h4>

            <VertBox gap='10px'>
              <p className="font-bold">Two Player Local</p>
              <p>This gamemode is for two players playing on the same computer.</p>
            </VertBox>
            
            <VertBox gap='10px'>
              <p className="font-bold">Singleplayer vs Ai</p>
              <p>This gamemode is for playing against an Ai opposition. There are three different difficulties for each game, these are Easy, Medium, and Impossible.</p>
              </VertBox>
            
            <VertBox gap='10px'>
              <p className="font-bold">Two Player Online</p>
              <p>This gamemode is for playing against another human player who is on a different computer. In the games menu click "online" then click "create game" to create a session and share the game code. Alternatively click "online" then click "join game" and enter the game code of the session you want to join.</p>
            </VertBox>
            
          </VertBox>
          <VertBox className="proj-sec" gap='10px'>
            <h4 className="font-bold">Links</h4>
            <p>To play either of the three games first enter a display name then click through the menus for any of the games.</p>
            <ul className="list-disc list-inside">
              <li><a target='_blank' className="link" href='https://games-center.azurewebsites.net/'>Website</a></li>
              <li><a target='_blank' className="link" href='https://github.com/katuta-mwila/GamesCenter'>GitHub</a></li>
            </ul>
          </VertBox>
        </VertBox>
        <VertBox className="proj-right" gap='20px'>
          <VertBox className="proj-img-sec" gap='5px'>
            <p>Game selecting page</p>
            <img src="/images/gamescenter_sh_1.PNG"/>
          </VertBox>
          <VertBox className="proj-img-sec" gap='5px'>
            <p>Connect 4</p>
            <img src="/images/connect4.PNG"/>
          </VertBox>
        </VertBox>
      </div>
      <div className='proj-con'>
        <VertBox className="proj-left" gap='20px'>
        <p className="font-bold text-[50px]">Flag Guesser</p>
          <p>Flag guesser is a group project I contributed during my time in bootcamp at Dev Academy NZ.</p>
          <p>This is a front end single page application of a simple flag guessing game for the flags of all countries and territories.</p>
          <VertBox className="proj-sec" gap='10px'>
            <h4 className="font-bold">Development</h4>
            <p>Flag Guesser was builting using the following tech.</p>
            <Box className="skills-tiles" gap='10px'>
              <SkillTile icon={faCss} text="CSS"/>
              <SkillTile icon={faJs} text="JavaScript"/>
              <SkillTile icon={'/images/typescript-svgrepo-com.svg'} text='TypeScript'/>
              <SkillTile icon={faReact} text="React"/>
            </Box>
          </VertBox>
          <VertBox className="proj-sec" gap='10px'>
            <h4 className="font-bold">Links</h4>
            <ul className="list-disc list-inside">
              <li><a target='_blank' className="link" href='https://github.com/katuta-mwila/Flag-Guesser'>GitHub</a></li>
            </ul>
          </VertBox>
        </VertBox>
        <VertBox className="proj-right" gap='20px'>
          <VertBox className="proj-img-sec items-end" gap='5px'>
            <img src="https://i.gyazo.com/ec5e758ea6dfdfeb8aa7187c5cfa387f.png" style={{width: '500px'}}/>
          </VertBox>
          <VertBox className="proj-img-sec items-end" gap='5px'>
            <img src="https://i.gyazo.com/93cd86c6d0f2d3c6154739842734f7d5.png" style={{width: '500px'}}/>
          </VertBox>
        </VertBox>
      </div>
    </div>
  </VertBox>
}