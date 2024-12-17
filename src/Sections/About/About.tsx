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
        <p className="gp">I am a Full Stack web developer passionate about creating websites that are both practical and impactful. Problem solving is something I enjoy and is often a skill I have needed when developing tools and websites to simplify tasks in my own life. My journey combines a strong self-taught foundation with formal training through Dev Academy NZ. During my self-directed learning, I gained the majority of my technical skills and knowledge in Full Stack development. At Dev Academy, I expanded on this expertise and developed the ability to collaborate in team environments, particularly through group projects during the bootcamp period of the course.</p>
      </VertBox>
    </div>
  </VertBox>
}