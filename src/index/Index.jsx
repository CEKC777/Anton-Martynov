import Block from '../common/Block.jsx'
import TextCycle from './TextCycle.jsx'
import useScreen from '../useScreen.js'
import Introduction from './Introduction.jsx'
import ProjectsCounter from './ProjectsCounter.jsx'
import { useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

function Index() {
    const { isTablet } = useScreen()

    return (
        <main>
            <Introduction />

            <div className="girl pt-[23vw] md:pt-3">
                <Block title={'VISION'} sectionClass="max-md:!pt-0">
                    EMOTIONS ARE WHAT {!isTablet && <br />} I AIM{' '}
                    {isTablet && <br />}
                    TO EVOKE IN PEOPLE THROUGH {isTablet && <br />}
                    MY WORK.
                    <br />
                    <br />I BELIEVE EDIT CAN NOT BE {isTablet && <br />}
                    BASED ONLY ON KNOWLEDGE.
                    <br />
                    <br />I STRIVE TO FEEL THE RHYTHM OF {isTablet && <br />}
                    THE SCENE AND THE CONNECTION {isTablet && <br />}
                    WITH THE HEROES.
                </Block>
            </div>

            <Block title={'STYLE'}>
                I AM A MINIMALIST IN {!isTablet && <br />}MY WORK,{' '}
                {isTablet && <br />}
                AND MY FAVOURITE TOOL IS A {isTablet && <br />}SIMPLE CUT.
            </Block>

            <Block title={'CLIENTS'}>
                <TextCycle
                    words={[
                        'AUDI',
                        'GENESIS',
                        'BACARDI',
                        'MARTINI',
                        'FXPRO',
                        'SBERBANK',
                        'CIAN',
                    ]}
                />
            </Block>

            <ProjectsCounter />
            <div className="cs max-md:pt-[28vw] mt-5 md:mb-10">
                <Block
                    title={'FUN FACT'}
                    sectionClass="max-md:pb-3 max-md:!pt-0 md:!py-32 md:py-auto"
                >
                    MY INTEREST IN EDITING AROSE IN 2010 WHILE I WAS ACTIVELY
                    PLAYING COUNTER-STRIKE TRYING TO CREATE EDITS OF THE MOST
                    VIVID MOMENTS THAT WE CALLED "FRAG MOVIES".
                </Block>
            </div>
        </main>
    )
}

export default Index
