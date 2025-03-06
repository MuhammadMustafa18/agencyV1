import { motion, useScroll } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const RecreateNavbar = () => {
    // get scroll data
    const {scrollY} = useScroll(); 
    const [navWidth, setNavwidth] = useState("100%");
    const [navRadius, setNavRadius] = useState(0);
    const [navBg, setNavBg] = useState("bg-black")
    useEffect(() => {
        return scrollY.on("change", (latest) => {
            if(latest > 50){
                // latest is px
            }else{

            }
            // whenever scroll y changes function works and whenever function chnages certain values, their states are changed which were being used at places, the component rerenders, ansynchronous, its scheduled for now
        })
    }, [scrollY])
  return (
    <div>RecreateNavbar</div>
  )
}

export default RecreateNavbar