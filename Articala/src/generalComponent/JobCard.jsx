import React from 'react'
import JobStatus from './jobComponent/JobStatus'
import JobInfo from './jobComponent/JobInfo'

const JobCard = ({ img, salary, isYearly, title, experiance ,isSinor ,isPartTime ,status }) => {

    return (
        <div className="jobCardBox  d-flex ">
            <img src={img} className='' alt="" />
            <div className="d-flex flex-column justify-content-between w-100 px-4 py-3 ">
                <div className="d-flex flex-column gap-2">

                    <div className="d-flex justify-content-between align-items-center w-100">
                        <JobStatus status={status} />
                        <div className="d-flex">
                            ${salary}
                            <p className='textGray500'>
                                /
                                {isYearly ? 'year' : 'month'}
                            </p>
                        </div>
                    </div>
                    <h3 className='headlineLargmid'>
                        {title}
                    </h3>
                    <p>
                        {experiance&&experiance+' Years of experience'} 
                    </p>
                </div>
                <JobInfo isPartTime={isPartTime} isSinor={isSinor}/>
            </div>
        </div>
    )
}

export default JobCard