'use client'
import React, {useRef, useState} from 'react'
import {motion} from 'framer-motion';

function MagneticWrapper({children,classname}) {
    const ref = useRef(null)
    const [position,setPosition] = useState({x:0,y:0})

    const {x,y} = position;

    const handleMove = (e) => {
        const {clientX, clientY} = e;
        const boundingRect = ref.current?.getBoundingClientRect();
        if(boundingRect){
            const {width,height, top, left} = boundingRect;
            const middleX = clientX - (left+width / 2) ;
            const middleY = clientY - (top+height / 2) ;
            setPosition({x:middleX,y:middleY})
        }
    }

    const handleLeave = () => {
        setPosition({x:0,y:0})
    }

    return (
        <div className=' w-fit rounded-full '>
            <motion.div
                className='relative'
                ref={ref}
                animate={{x,y}}
                transition={{type:'spring', stiffness:150, damping:15,mass:0.1}}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default MagneticWrapper