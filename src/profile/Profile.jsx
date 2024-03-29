import React from 'react'
import CLink from '../common/CLink.jsx'
import Block from '../common/Block.jsx'

const Profile = () => {
    return (
        <main className="md:mt-36">
            <Block
                sectionClass="max-md:h-dvh max-md:!pt-20"
                className="max-md:self-center"
            >
                <a
                    className="text-[6.6vw] md:text-[3.3vw]"
                    href="mailto:matrynovxas@gmail.com"
                >
                    MARTYNOVXAS@GMAIL.COM
                </a>
                <br />
                <a href="tel:+46707782279">+46 70-778 22 79</a>
                <br />
                <a
                    href="https://www.instagram.com/martynovxas/"
                    target="_blank"
                >
                    INSTAGRAM
                </a>
                <br />
                <a href="https://t.me/njysx" target="_blank">
                    TELEGRAM
                </a>
                <br />
                <a
                    href="https://linkedin.com/in/antonxmartynov"
                    target="_blank"
                >
                    LINKEDIN
                </a>
            </Block>
        </main>
    )
}

export default Profile
