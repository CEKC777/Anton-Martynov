import useScreen from '../useScreen.js'

const Block = ({ title, children, className, handler, sectionClass }) => {
    const { isTablet } = useScreen()
    return (
        <section
            className={
                'grid max-md:gap-5 md:grid-cols-[1fr_2fr] pt-14 md:pt-40 pb-20 text-white px-3 md:px-7 ' +
                sectionClass
            }
        >
            {(title || isTablet) && <p className="md:text-lg">{title}</p>}
            <div
                onMouseEnter={() => handler && handler()}
                className={
                    'text-[7.4vw] md:pl-5 md:text-[3.5vw] leading-[1] md:leading-[0.9] font-medium md:tracking-[-1.5px] h-fit ' +
                    className
                }
            >
                {children}
            </div>
        </section>
    )
}

export default Block
