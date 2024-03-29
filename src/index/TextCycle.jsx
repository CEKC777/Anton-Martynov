import { useEffect, useState } from 'react'
const TextCycle = ({ words }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
        }, 300)

        return () => clearInterval(intervalId)
    }, [words])

    return (
        <div className="text-[16.9vw] md:text-[11vw]">
            {words[currentWordIndex]}
        </div>
    )
}

export default TextCycle
