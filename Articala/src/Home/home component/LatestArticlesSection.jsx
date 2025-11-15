import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap'

const LatestArticlesSection = () => {
    let [containerWidth, setContainerWidth] = useState()
    let [windowWidth,setWindowWidth]=useState()
    let ref = useRef()
    useEffect(() => {
        let getwidth = () => {
            setWindowWidth(window.innerWidth)
            if (ref.current.offsetWidth)
                setContainerWidth(ref.current.offsetWidth)
            // console.log(containerWidth)
        }
        window.addEventListener('resize', getwidth)
        return () => window.removeEventListener('resize', getwidth)
    }, [])
    // useEffect(() => {
    //     console.log("Container width:", containerWidth);
    // }, [containerWidth]);
    return (
        <>
            <div className="latestArticlesBox position-relative">
                <div className="latestTitleBox"
                style={{paddingInlineStart:(windowWidth-containerWidth)/2}}
                >
                    <h2 className='DisplayMid'>
                        Latest Articles
                    </h2>
                </div>
                <Container ref={ref}>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
                </Container>
            </div>
        </>
    )
}

export default LatestArticlesSection