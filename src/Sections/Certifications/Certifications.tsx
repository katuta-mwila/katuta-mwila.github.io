import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, VertBox } from "../../Components/Box";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Certifications(){
  return <VertBox tag='section' id='skills' className="flex flex-col items-center" gap='20px'>
    <div className="content-width">
      <h2 id="About">Certifications</h2>
    </div>
    <div className="content-box content-width section-box skills-box">
      <div style={{width: '125px'}} className="flex items-center justify-center">
        <FontAwesomeIcon icon={faAward} fontSize={'100px'} color='rgb(235, 186, 52)'/>
      </div>
      
      <VertBox gap='10px'>
        <CertLink certName="Microsoft Cloud Certification - Azure Fundamentals" link="https://learn.microsoft.com/en-us/users/katutamwila/credentials/181AD39E9FEEF410?ref=https%3a%2f%2fwww.linkedin.com%2f"></CertLink>
        <CertLink certName="New Zealand Level 6 Certificate, Applied Software Development" link='/documents/dev_academy_cert.pdf'></CertLink>
      </VertBox>
    </div>
  </VertBox>
}

function CertLink({certName, link}: {certName: string, link: string}){
  return <Box tag='a' href={link} target='_blank' className="flex items-center cursor-pointer link-on-hover" gap='10px'>
    <h3>{certName}</h3>
    <FontAwesomeIcon icon={faUpRightFromSquare} fontSize='20px'/>
  </Box>
}