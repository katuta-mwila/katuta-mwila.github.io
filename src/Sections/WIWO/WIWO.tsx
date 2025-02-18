import { VertBox } from "../../Components/Box";

export default function WIWO(){
  return <VertBox tag="section" id="Contact" className="flex flex-col items-center" gap="20px">
    <div className="content-width">
      <h2>What I'm Working On</h2>
    </div>
    <VertBox className="content-box content-width contact-box items-start" gap='15px'>
      <p>I have recently completed the Microsoft Azure Fundamentals certificate and am in the process of completing more cloud certifications as deploying software publicly is just as important as developing the software. Besides this I am investigating how to use AI text to speech models
        for the purpose of translating text into realistic sounding speech across a variety of languages.
      </p>
    </VertBox>
  </VertBox>
}