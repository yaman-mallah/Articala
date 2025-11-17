import React from 'react'

const JobStatus = ({ status }) => {
    return (
        <div className="p-1 jobStatus"
            style={status == 'Featured' ? { backgroundColor: '#E1F7E3',color: '#15711F'} : { backgroundColor: '#f7e1e1',color:'#711515ff' }}
        >
            <p className='labalSmall'>
                {status}
            </p>
        </div>
    )
}

export default JobStatus