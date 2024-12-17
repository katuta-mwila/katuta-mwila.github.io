import { Box } from "../Box";
import NavTab from "./NavTab";

export default function Navigation(){
  return <Box tag='nav' className="justify-center">
    <NavTab text="Home" hashId="/"/>
    <NavTab text="About" hashId="/"/>
    <NavTab text="Skills" hashId="/"/>
    <NavTab text="Projects" hashId="/"/>
  </Box>
}