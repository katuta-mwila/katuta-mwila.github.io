import { Box, VertBox } from "../../Components/Box";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faCss, faGit, faGithub, faHtml5, faJs, faLinux, faNode, faNodeJs, faReact, faWindows } from '@fortawesome/free-brands-svg-icons'
import SkillTile from "./SkillTile";

export default function Skills(){
  return <VertBox tag='section' id='skills' className="flex flex-col items-center" gap='20px'>
    <div className="content-width">
      <h2 id="About">Skills</h2>
    </div>
    <div className="content-box content-width section-box skills-box">
      <FontAwesomeIcon icon={faCode} fontSize={'100px'} color='rgb(235, 186, 52)'/>
      <VertBox gap='10px'>
        <h3>I have experience working with the following</h3>
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
          <SkillTile icon={faWindows} text="Windows OS"/>
          <SkillTile icon={faLinux} text='Linux OS'/>
        </Box>
      </VertBox>
    </div>
  </VertBox>
}