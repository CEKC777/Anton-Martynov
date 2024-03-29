import React from 'react'
import Block from '../common/Block.jsx'
import useScreen from '../useScreen.js'
import WorkSection from './WorkSection.jsx'

const Works = () => {
    const { isTablet } = useScreen()
    const works = [
        {
            preview1: 'fx2.jpg',
            video1: 'fx2.mp4',
            full1: 'https://player.vimeo.com/video/803844658?h=486eb66fc2&title=0&byline=0&portrait=0',
            preview2: 'fx1.jpg',
            video2: 'fx1.mp4',
            full2: 'https://player.vimeo.com/video/795577052?h=a7c8c86b0c&title=0&byline=0&portrait=0',
            title: 'FXPRO',
            text: "A series of videos for the brokerage company FxPro that was entirely assembled from stock footage. The outcome was outstanding with the final videos having been broadcasted on the world's leading financial channel, Bloomberg TV.",
        },
        {
            preview1: 'sber_alp.jpg',
            video1: 'sber_alp.mp4',
            full1: 'https://player.vimeo.com/video/799845430?h=3ae88ce805&title=0&byline=0&portrait=0',
            preview2: 'sber_guide.jpg',
            video2: 'sber_guide.mp4',
            full2: 'https://player.vimeo.com/video/797666557?h=593970c49e&title=0&byline=0&portrait=0',
            title: 'SBERBANK',
            text: "Advertising for Russia's largest bank: The project showcases real individuals who have achieved success while doing what they love. Each video in the project tells a distinct, complete story with its own unique style and presentation, reflecting the protagonist's activities and personality.",
        },
    ]

    return (
        <main className="text-white mt-20 md:mt-36">
            <Block>
                I SPECIALIZE IN COMMERCIAL{isTablet && <br />} VIDEOS,
                DOCUMENTARY FILMS, {isTablet && <br />} AND SOCIAL MEDIA
                CONTENT.
            </Block>
            <ul>
                {works.map((work, key) => (
                    <WorkSection work={work} key={key} />
                ))}
            </ul>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </main>
    )
}

export default Works
