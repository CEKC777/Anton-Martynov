import React, { Suspense, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useScreen from '../useScreen.js'
import { Cross as Hamburger } from 'hamburger-react'

const Navbar = () => {
    const { isTablet } = useScreen()
    const [open, setOpen] = useState(false)

    const scroll = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        return scroll
    }, [])

    return (
        <Suspense>
            <>
                <header className="text-white flex md:text-lg justify-between max-md:pr-3 pl-3 pt-1 md:pl-7 fixed top-0 left-0 z-[99] w-full md:w-1/3">
                    {isTablet ? (
                        <>
                            <Link
                                onClick={scroll}
                                className="hover:opacity-70 transition-colors duration-75"
                                to="/"
                            >
                                ABOUT
                            </Link>
                            <Link
                                onClick={scroll}
                                className="hover:opacity-70 transition-colors duration-75"
                                to="/works"
                            >
                                WORKS
                            </Link>
                            <Link
                                onClick={scroll}
                                className="hover:opacity-70 transition-colors duration-75"
                                to="/contact"
                            >
                                CONTACT
                            </Link>
                        </>
                    ) : (
                        <div className="absolute top-0 right-2 z-[999]">
                            <Hamburger
                                duration={0.25}
                                direction="right"
                                distance="sm"
                                rounded
                                color={open ? '#000000' : '#FFFFFF'}
                                toggled={open}
                                toggle={setOpen}
                            />
                        </div>
                    )}
                </header>
                {!isTablet && (
                    <div
                        className={[
                            'h-dvh w-dvw bg-white fixed top-0 z-[9] left-0 transition-all duration-300 grid grid-rows-3 items-start justify-between px-5 py-6 font-medium',
                            open
                                ? 'opacity-100'
                                : 'opacity-0 pointer-events-none',
                        ].join(' ')}
                    >
                        <span></span>
                        <div className="flex self-center flex-col gap-5 text-3xl">
                            <NavLink
                                onClick={() => {
                                    scroll()
                                    setOpen(false)
                                }}
                                className={({ isActive }) =>
                                    'transition-colors duration-75 ' +
                                    (isActive
                                        ? 'max-md:opacity-60'
                                        : 'hover:opacity-70')
                                }
                                to="/"
                            >
                                ABOUT
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scroll()
                                    setOpen(false)
                                }}
                                className={({ isActive }) =>
                                    'transition-colors duration-75 ' +
                                    (isActive
                                        ? 'max-md:opacity-60'
                                        : 'hover:opacity-70')
                                }
                                to="/works"
                            >
                                WORKS
                            </NavLink>
                            <NavLink
                                onClick={() => {
                                    scroll()
                                    setOpen(false)
                                }}
                                className={({ isActive }) =>
                                    'transition-colors duration-75 ' +
                                    (isActive
                                        ? 'max-md:opacity-60'
                                        : 'hover:opacity-70')
                                }
                                to="/contact"
                            >
                                CONTACT
                            </NavLink>
                        </div>
                        <p className=" leading-[0.7] font-primary self-end ">
                            <a href="mailto:matrynovxas@gmail.com">
                                MARTYNOVXAS@GMAIL.COM
                            </a>
                            <br />
                            <br />
                            <a href="tel:+46707782279">+46 70-778 22 79</a>
                            <br /> <br />
                            <a href="https://t.me/njysx" target="_blank">
                                TELEGRAM
                            </a>
                        </p>
                    </div>
                )}
            </>
        </Suspense>
    )
}

export default Navbar
