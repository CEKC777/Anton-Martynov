import React, { Suspense } from 'react'
import Block from '../common/Block.jsx'
import useScreen from '../useScreen.js'
import WorkSection from './WorkSection.jsx'

const Works = () => {
    const { isTablet } = useScreen()
    const works = [
        {
            preview1: 'fx2.jpg',
            video1: 'fx2.mp4',
            id1: 803844658,
            name1: 'TRADING IS CONSTANTLY OVERCOMING',
            preview2: 'diver.jpg',
            video2: 'fx1.mp4',
            id2: 795577052,
            name2: 'THIS IS THE NEW YOU',
            title: 'FXPRO',
            text: "A series of videos for the brokerage company FxPro that was entirely assembled from stock footage. The outcome was outstanding with the final videos having been broadcasted on the world's leading financial channel, Bloomberg TV.",
        },
        {
            preview1: 'sber_alp1.jpg',
            video1: 'sber_alp.mp4',
            id1: 934921550,
            name1: 'DMITRY',
            preview2: 'sber_guide1.jpg',
            video2: 'sber_guide.mp4',
            id2: 939040750,
            name2: 'PAVEL',
            title: 'SBERBANK',
            text: "Advertising for Russia's largest bank: The project showcases real individuals who have achieved success while doing what they love. Each video in the project tells a distinct, complete story with its own unique style and presentation, reflecting the protagonist's activities and personality.",
        },
    ]

    return (
        <Suspense>
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
        </Suspense>
    )
}

export default Works
