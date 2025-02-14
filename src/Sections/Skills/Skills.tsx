import { Box, VertBox } from "../../Components/Box";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faCss, faGithub, faHtml5, faJs, faLinux, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import SkillTile from "./SkillTile";

export default function Skills(){
  return <VertBox tag='section' id='Skills' className="flex flex-col items-center" gap='20px'>
    <div className="content-width">
      <h2 id="About">Skills</h2>
    </div>
    <div className="content-box content-width section-box skills-box">
      <FontAwesomeIcon icon={faCode} fontSize={'100px'} color='rgb(235, 186, 52)'/>
      <VertBox gap='10px'>
        <h3>I have a strong understanding of the following</h3>
        <Box className="skills-tiles" gap='10px'>
          <SkillTile icon={faHtml5} text="HTML"/>
          <SkillTile icon={faCss} text="CSS"/>
          <SkillTile icon={faJs} text="JavaScript"/>
          <SkillTile icon={'/images/typescript-svgrepo-com.svg'} text='TypeScript'/>
          <SkillTile icon={faReact} text="React"/>
          <SkillTile icon={faNodeJs} text="NodeJS"/>
          <SkillTile icon={'/images/c--4.svg'} text='C#'/>
          <SkillTile icon={'/images/dot-net-core-7.svg'} text='.NET'/>
          <SkillTile icon={faDatabase} text="SQL"/>
          <SkillTile text="Git"/>
          <SkillTile icon={faGithub} text="GitHub"/>
          {/*<SkillTile icon={faWindows} text="Windows OS"/>*/}
          <SkillTile icon={faLinux} text='Linux'/>
        </Box>
        <h4>Other skills</h4>
        <ul className="list-disc list-inside">
          <li>Problem Solving</li>
          <li>Troubleshooting and debugging errors</li>
          <li>Ability to learn and grow from feedback</li>
          <li>Ability and eagerness to learn and adapt to new technologies quickly</li>
          <li>Working in a dynamic team environment</li>
        </ul>
      </VertBox>
    </div>
  </VertBox>
}