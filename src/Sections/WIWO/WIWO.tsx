import { VertBox } from "../../Components/Box";

export default function WIWO(){
  return <VertBox tag="section" id="Contact" className="flex flex-col items-center" gap="20px">
    <div className="content-width">
      <h2>What I'm Working On</h2>
    </div>
    <VertBox className="content-box content-width contact-box items-start" gap='15px'>
      <p>I am currently in the process of acquiring cloud certifications for Microsoft Azure as cloud computing is an area I am
        developing my expertise in. Besides this I am investigating how to use AI text to speech models
        for the purpose of translating text into realistic sounding speech across a variety of languages.
      </p>
    </VertBox>
  </VertBox>
}