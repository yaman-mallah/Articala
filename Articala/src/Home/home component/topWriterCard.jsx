import React from 'react'

const TopWriterCard = ({ img, name, title, rating, articlesNumber, height }) => {
    return (
        <>
            <div
                className="d-flex flex-column topWriterBox gap-3 "
                style={{ height: height }}
            >
                <img
                    src={img} alt="no image"
                    // className='h-100'
                />
                <div className="d-flex justify-content-center align-items-center gap-3">
                    <svg width="36" height="38" viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.397 36.2813C34.397 36.2813 17.3128 26.3022 7.29153 7.99512" stroke="#6341AF" stroke-width="1.64583" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M29.6408 33.047C11.2245 37.4668 9.81003 23.2451 9.81003 23.2451" stroke="#6341AF" stroke-width="1.64583" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22.0163 23.4347C21.5439 17.357 23.8036 14.4139 23.8036 14.4139C31.2671 22.5693 30.2532 30.8637 29.6408 33.0478M19.0474 27.6063C14.8376 26.5803 10.9589 24.4981 7.77742 21.5564C0.957923 15.2889 0.962716 6.14638 0.823757 2.48363C0.815903 2.24227 0.86251 2.00223 0.960121 1.78134C1.05773 1.56046 1.20384 1.36439 1.3876 1.2077C1.57135 1.05101 1.78804 0.937715 2.02158 0.876232C2.25511 0.814749 2.4995 0.806654 2.73659 0.852548C17.0876 3.68346 21.9512 18.4523 21.9512 18.4523" stroke="#6341AF" stroke-width="1.64583" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p>
                        {name}
                    </p>
                </div>
                <p>
                    {title}
                </p>
                <div className="line"></div>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6548 28.3119L27.1413 33.055C28.0982 33.6613 29.2864 32.7596 29.0024 31.6425L26.8394 23.1337C26.7785 22.8967 26.7857 22.6474 26.8602 22.4143C26.9347 22.1812 27.0735 21.9739 27.2606 21.8162L33.974 16.2285C34.8561 15.4943 34.4008 14.0303 33.2675 13.9568L24.5002 13.3878C24.2641 13.3709 24.0376 13.2873 23.8471 13.1467C23.6566 13.0061 23.51 12.8143 23.4244 12.5936L20.1545 4.35928C20.0656 4.12502 19.9076 3.92335 19.7014 3.78103C19.4952 3.63872 19.2506 3.5625 19 3.5625C18.7495 3.5625 18.5048 3.63872 18.2986 3.78103C18.0924 3.92335 17.9344 4.12502 17.8455 4.35928L14.5757 12.5936C14.49 12.8143 14.3434 13.0061 14.1529 13.1467C13.9624 13.2873 13.7359 13.3709 13.4998 13.3878L4.73249 13.9568C3.59916 14.0303 3.14386 15.4943 4.02598 16.2285L10.7394 21.8162C10.9265 21.9739 11.0653 22.1812 11.1398 22.4143C11.2143 22.6474 11.2215 22.8967 11.1606 23.1337L9.15465 31.0247C8.81389 32.3652 10.2397 33.4472 11.388 32.7197L18.3452 28.3119C18.5409 28.1873 18.7681 28.1211 19 28.1211C19.232 28.1211 19.4591 28.1873 19.6548 28.3119Z" fill="#FD8E1F" />
                        </svg>
                        {rating}
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        {articlesNumber}
                        <p>Articles</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TopWriterCard