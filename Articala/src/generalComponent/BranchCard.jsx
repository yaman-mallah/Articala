import React from 'react'

const BranchCard = ({ place, text, img }) => {
    return (
        <>
            <div className="BranchCard position-relative">
                <div className="placeBox">
                    <p className='headlineLargmid'>
                        {place}
                    </p>
                </div>
                <img src={img} alt="" />
                <div className="p-3 BranchTextBox">
                    {
                        !text ?
                            <p className='HeadlineBold'>
                                Lorem Ipsum doller
                                Duis aute irure, No. 6548
                            </p>
                            : text
                    }
                </div>
            </div>

        </>
    )
}

export default BranchCard