interface Props{
  text: string
  hashId: string
}

export default function NavTab(props: Props){
  return <a href={props.hashId} className="nav-tab flex items-center">
    <div className="flex flex-col items-center">
      <div style={{borderBottom: '1px solid #00000000', width: '100%'}}></div>
      <p className="text-[22px]">{props.text}</p>
      <div className="nav-line"></div>
    </div>
    
  </a>
}