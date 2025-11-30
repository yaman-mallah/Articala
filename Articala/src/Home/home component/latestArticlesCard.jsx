import React from 'react'

const LatestArticlesCard = ({ img, cat, title, author }) => {
    return (
        <div className='d-flex flex-column gap-3 latestArtCard'>
            <img src={img} alt="card img" />
            <div className=" majorBox ">
                <p className='titleLargMid'>
                    {cat}
                </p>
            </div>
            <p className='titleLargRegular'>
                {title}
            </p>
            <div className="line"></div>
            <div className="d-flex gap-3 align-items-center">
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.7065 47.8129C46.7065 47.8129 26.6511 36.0983 14.887 14.6074" stroke="#6341AF" stroke-width="1.64583" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M41.1231 44.0163C19.504 49.2048 17.8435 32.5098 17.8435 32.5098" stroke="#6341AF" stroke-width="1.64583" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M32.1726 32.7324C31.618 25.5976 34.2708 22.1428 34.2708 22.1428C43.0323 31.7165 41.842 41.4534 41.1231 44.0173M28.6874 37.6295C23.7455 36.425 19.1921 33.9807 15.4574 30.5274C7.45189 23.1699 7.45752 12.4374 7.29439 8.13763C7.28517 7.85429 7.33989 7.57251 7.45447 7.3132C7.56906 7.0539 7.74058 6.82374 7.95629 6.6398C8.17201 6.45585 8.42638 6.32286 8.70053 6.25068C8.97468 6.17851 9.26157 6.169 9.53989 6.22288C26.3868 9.54613 32.0961 26.8835 32.0961 26.8835" stroke="#6341AF" stroke-width="1.64583" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className='titleLargRegular'>

                    {author}
                </p>
            </div>
        </div>
    )
}

export default LatestArticlesCard