// import { animate, useMotionValue, useTransform, motion } from 'framer-motion'
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
            <p className="font-medium text-[220px] md:text-[19.5vw] leading-[0.7] md:leading-[0.9] tracking-[-10px]">
                <div>{31}</div>
            </p>
            <p className="max-md:pt-5 leading-[1] md:text-[1.1vw] pl-1.5">
                COMPLETED PROJECTS {!isTablet && <br />} IN 2023
            </p>
        </div>
    )
}

export default ProjectsCounter
