import { VertBox } from "../../Components/Box";

export default function About(){
  return <VertBox tag='section' id='About' className="flex flex-col items-center" gap='20px'>
    <div className="content-width">
      <h2>About Me</h2>
    </div>
    <div className="content-box content-width about-box section-box">
      <div className="profile-img-box">
        <img src="/images/port-profile.jpg"/>
      </div>
      <VertBox>
        <h3>Katuta Mwila</h3>
        <p className="gp">
          I am a software developer with a passion for building practical and user-friendly websites. 
          Problem solving is what I do best, and I have used this skill many times when creating websites that simplify complex tasks for everyday use. 
          My expertise in Full Stack development has been shaped through hands-on experience, continuous learning, and formal training at Dev Academy NZ, where I refined my skills and collaborated on team-based projects. 
          On top of my experience in developing websites I have experience in using the cloud to deploy my website as demonstrated in this portfolio. 
          This portfolio features a selection of projects, each demonstrating my skills through live, publicly deployed websites.</p>
      </VertBox>
    </div>
  </VertBox>
}