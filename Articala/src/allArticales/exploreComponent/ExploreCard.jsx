import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

const ExploreCard = ({ info }) => {
    let [articaleTitle, setArticaleTitle] = useState(info.title)
    useEffect(() => {

        if (info.title.length > 18) {
            setArticaleTitle('')
            for (let i = 0; i < 18; i++) {
                setArticaleTitle(e => e + info.title[i])
                if (info.title[i] == ' ') {
                    setArticaleTitle(info.title)
                    break;
                }
            }


        }
    }, [])
    return (


        <div className="d-flex flex-column exploreCard position-relative">
            <div className="explreCardLink">
                <Link to={`${info.id}`}>
                </Link>
            </div>


            <img className='exploreCardImg' src={`https://tamkeen-dev.com/${info.field_image}`} alt={info.title + ' articale image'} />

            <div className="d-flex flex-column exploreCardBottom justify-content-between h-100">
                <h3 className='titleLargRegular'>

                    {articaleTitle == info.title ? articaleTitle : articaleTitle + '...'}
                </h3>
                <div className="d-flex justify-content-between ">
                    <p
                        className='titleMid'
                    >
                        {info.author}
                    </p>
                    <p
                        className='textGray500'
                    >
                        {info.created}
                    </p>
                </div>

            </div>
        </div>

    )
}

export default ExploreCard