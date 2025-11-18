import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap'

const TestimonialsSection = () => {
    let [containerWidth, setContainerWidth] = useState()
    let [windowWidth, setWindowWidth] = useState()
    let ref = useRef()

    useEffect(() => {
        let getwidth = () => {
            setWindowWidth(window.innerWidth)
            if (ref.current.offsetWidth)
                setContainerWidth(ref.current.offsetWidth)
            // console.log(containerWidth)
        }
        getwidth()
        window.addEventListener('resize', getwidth)
        return () => window.removeEventListener('resize', getwidth)
    }, [])
    useEffect(() => {
        console.log("Container width:", containerWidth);
    }, [containerWidth]);
    return (
        <>
            <div >
                    <div className="testimonialsTitle"
                        style={{ paddingInlineStart: (windowWidth - containerWidth) / 2 }}
                    >
                        <h2 className='DisplayMid'>
                            Top Testimonials
                        </h2>
                    </div>
                <Container ref={ref}>

                </Container>
            </div>

        </>
    )
}

export default TestimonialsSection