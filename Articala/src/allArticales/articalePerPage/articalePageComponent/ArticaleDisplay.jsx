import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap'

const ArticaleDisplay = ({ info }) => {
    let ref = useRef()
    useEffect(() => {
        if (ref.current) {
            let children = ref.current.getElementsByTagName('p');
            [...children].forEach(element => {
                element.classList.add('headlineSmall')
            });
        }
    })
    let [time, setTime] = useState('')
    useEffect(()=>{
        let date=''
        for(let i=0;i<10;i++){
            date+=info?.revision_timestamp[0].value[i];
        }
        setTime(date)
    })


    return (
        <div className="py-2 d-flex flex-column gap-3">

            <h2>{info?.title?.[0]?.value}</h2>

            <div
                dangerouslySetInnerHTML={{ __html: info?.body?.[0]?.value }}
                className='articaleText'
                ref={ref}
            ></div>
            <div className="d-flex justify-content-between">
                <p
                    className='textGray500'
                >
                    {time}
                </p>
            </div>
           

        </div>
    )
}

export default ArticaleDisplay