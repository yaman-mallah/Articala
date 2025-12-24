import React, { useEffect, useState, useContext } from 'react'
import { blogServices } from '../services/blogServices'
import { FilterContext } from '../context/filterContext'
import { CRUDServices } from '../services/CRUDServices'
import { data } from 'react-router'


const ExploreFilter = () => {
    let { globalCurrentCat, setGlobalCurrentCat, globalCurrentTage, setGlogbalCurrentTage } = useContext(FilterContext)


    let [isLoading, setIsLoading] = useState({
        cat: true,
        tag: true
    })
    let [cats, setCats] = useState([])
    let [tags, setTags] = useState([])


    useEffect(() => {
        blogServices.getCats()
            .then((data) => {
                setCats(data)
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading({
                ...isLoading,
                cat: false
            }))
    }, [])

    useEffect(() => {
        blogServices.getTags()
            .then((data) => {
                setTags(data)
                console.log(data)
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading({
                ...isLoading,
                tag: false
            }))
    }, [])

    let [currentCat, setCurrentCat] = useState(null)
    let [currentTag, setCurrentTag] = useState([])

    useEffect(() => {
        console.log(currentCat)
    }, [currentCat])

    if (isLoading.cat && isLoading.tag) {
        return (
            <div className="galleryLoadingScreen d-flex justify-content-center align-items-center">
                <div className="loadingCircle purpleBorder"></div>
            </div>
        )
    }

    return (
        <>
            <div className="d-flex flex-column pt-5 gap-4">
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
            <div className="d-flex flex-column py-5 gap-4">
                <h2>
                    Tags
                </h2>
                <div className="d-flex flex-column gap-3">
                    {
                        tags.map((e) =>
                            <label
                                htmlFor={`tag-${e.name}`}
                                className='d-flex justify-content-between w-100 position-relative'
                                key={e.id}
                            >
                                {e.name}
                                <input
                                    id={`tag-${e.name}`}

                                    type='checkbox'
                                    style={{ position: 'absolute', opacity: 0 }}
                                    onChange={(box) => {
                                        if (box.target.checked) {
                                            setCurrentTag([
                                                ...currentTag,
                                                e.id
                                            ])
                                            setGlogbalCurrentTage([
                                                ...globalCurrentTage,
                                                e.id
                                            ])
                                        }
                                        else {
                                            setCurrentTag([
                                                ...currentTag.filter(prev => prev != e.id)
                                            ])

                                            setGlogbalCurrentTage([
                                                ...globalCurrentTage.filter(prev => prev != e.id)
                                            ])

                                        }
                                    }}
                                    name="Tags"
                                    htmlFor={`tag-${e.name}`}


                                />
                                <span
                                    className={
                                        currentTag.includes(e.id) ?

                                            'filterCheckBox activeRadio' : 'filterCheckBox'
                                    }
                                ></span>
                            </label>
                        )
                    }
                    <button
                        onClick={() => {
                            setCurrentTag([])
                            setGlogbalCurrentTage([])
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