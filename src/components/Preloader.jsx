import { useEffect, useState } from 'react';
import LoaderVideo from '../assets/pc_loader.mp4'
import { motion } from "framer-motion";

const Preloader = () => {
    const[isVisible,setIsVisible] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{setIsVisible(false)},2000)
    },)
    return(
        isVisible===true ? (
            <video className=' w-screen object-cover h-screen z-40 fixed' muted autoPlay >
                <source className='w-full h-screen' src={LoaderVideo} type="video/mp4" />
            </video>
        ) : null
        
        
    )
}

export default Preloader