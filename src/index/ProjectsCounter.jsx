import { animate, useMotionValue, useTransform, motion } from 'framer-motion'
import { useEffect } from 'react'
import useScreen from '../useScreen.js'

const ProjectsCounter = () => {
    // const count = useMotionValue(0)
    // const rounded = useTransform(count, (latest) => Math.round(latest))
    const { isTablet } = useScreen()
    //
    // useEffect(() => {
    //     const controls = animate(count, 31)
    //
    //     // return controls.stop
    // }, [])
    // console.log(rounded)
    return (
        <div className="text-white pl-3 md:pl-7 flex max-md:items-baseline flex-col mt-16 max-md:mb-20 md:mt-24">
            <p className="font-medium text-[210px] md:text-[277px] leading-[0.7] md:leading-[1] tracking-[-10px]">
                <motion.div>{31}</motion.div>
            </p>
            <p className="max-md:pt-5 leading-[1]">
                COMPLETED PROJECTS {!isTablet && <br />} IN 2023
            </p>
        </div>
    )
}

export default ProjectsCounter
