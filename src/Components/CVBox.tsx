import { Box } from "./Box";

export default function CVBox(){
  return <a href='/documents/katuta_mwila_cv.pdf'>
      <Box className='cv-box items-center' gap='10px'>
        <img src='/images/curriculum-resume-svgrepo-com.svg' width={'20px'}/>
        <div className="text-[20px]">View My CV</div>
      </Box>
    </a>
}