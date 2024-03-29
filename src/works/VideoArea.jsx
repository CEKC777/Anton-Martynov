import React, { useRef, useState } from 'react'
import { Cross as Hamburger } from 'hamburger-react'
import useScreen from '../useScreen.js'

const VideoArea = ({ preview, src, full, className }) => {
    const [initialState, setInitialState] = useState(true)
    const [open, setOpen] = useState(false)
    const { isTablet } = useScreen()
    const videoRef = useRef()
    return (
        <>
            <div
                onClick={() => setOpen(true)}
                className={'h-fit relative hover:cursor-pointer ' + className}
                onMouseEnter={() => {
                    isTablet && setInitialState(false)
                    videoRef.current && isTablet && videoRef.current.play()
                }}
                onMouseLeave={() => {
                    setInitialState(true)
                    videoRef.current && isTablet && videoRef.current.pause()
                }}
            >
                {isTablet && (
                    <img
                        alt="preview"
                        src={'/previews/' + preview}
                        className="aspect-video absolute top-0 left-0 transition-opacity duration-300"
                        style={{
                            opacity: initialState ? 1 : 0,
                        }}
                    />
                )}
                {isTablet ? (
                    <video ref={videoRef} src={'/videos/' + src} loop={true} />
                ) : (
                    <div className="aspect-video">
                        <iframe
                            src={full}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            className="w-full h-full"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>
            <div
                className="fixed bg-black top-0 left-0 h-dvh w-dvw z-[999] transition-opacity flex items-center justify-center"
                style={{
                    opacity: open ? 1 : 0,
                    pointerEvents: open ? 'all' : 'none',
                }}
            >
                <div className="absolute right-2 top-0">
                    <Hamburger
                        duration={0.25}
                        direction="right"
                        distance="sm"
                        rounded
                        color={open ? '#FFFFFF' : '#000000'}
                        toggled={true}
                        toggle={setOpen}
                    />
                </div>

                <iframe
                    src={full}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    className="w-[90%] h-[90%]"
                    allowFullScreen
                ></iframe>
            </div>
        </>
    )
}

export default VideoArea
