import React, { useEffect, useState, useContext } from 'react'
import { blogServices } from '../services/blogServices'
import { FilterContext } from '../context/filterContext'


const ExploreFilter = () => {
    let { globalCurrentCat, setGlobalCurrentCat } = useContext(FilterContext)
    
    console.log(globalCurrentCat)
    let [isLoading, setIsLoading] = useState(true)
    let [cats, setCats] = useState([])


    useEffect(() => {
        blogServices.getCats()
            .then((data) => {
                setCats(data)
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false))
    }, [])

    let [currentCat, setCurrentCat] = useState(null)

    useEffect(() => {
        console.log(currentCat)
    }, [currentCat])
    if (isLoading) {
        return (
            <div className="galleryLoadingScreen d-flex justify-content-center align-items-center">
                <div className="loadingCircle purpleBorder"></div>
            </div>
        )
    }

    return (
        <>
            <div className="d-flex flex-column py-5 gap-4">
                <h2>
                    filter
                </h2>
                <div className="d-flex flex-column gap-3">
                    {
                        cats.map((e, index) =>
                            <label
                                htmlFor={`cat-${e.name}`}
                                className='d-flex justify-content-between w-100 position-relative'
                                key={e.id}
                            >
                                {e.name}
                                <input
                                    id={`cat-${e.name}`}

                                    type="radio"
                                    style={{ position: 'absolute', opacity: 0 }}
                                    onChange={() => {
                                        setCurrentCat(e.id)
                                        console.log('changed')
                                        setGlobalCurrentCat(e.id)
                                    }}
                                    name="category"
                                    htmlFor={`cat-${e.name}`}


                                />
                                <span
                                    className={currentCat === e.id ?
                                        'filterRadio activeRadio' :
                                        'filterRadio '}
                                ></span>
                            </label>
                        )
                    }
                    <button
                        onClick={() => {
                            setCurrentCat(null)
                            setGlobalCurrentCat(null)
                            }}
                        className='mainBtn textWhite'
                    >
                        remove filter
                    </button>
                </div>
            </div>
        </>
    )
}

export default ExploreFilter