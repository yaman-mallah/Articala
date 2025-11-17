import React from 'react'

const AppLink = ({ isAppStore }) => {
    return (
        <>
            <a
                className='downloadLink d-flex align-items-center gap-3'
                href="">
                {
                    isAppStore ?
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_11_11)">
                                <path d="M21.9986 0C20.2926 0.117999 18.2986 1.20999 17.1366 2.63198C16.0766 3.92198 15.2046 5.83797 15.5446 7.69995C17.4086 7.75795 19.3346 6.63996 20.4506 5.19397C21.4946 3.84798 22.2846 1.94399 21.9986 0Z" fill="white" />
                                <path d="M28.7406 10.736C27.1026 8.68203 24.8006 7.49004 22.6266 7.49004C19.7566 7.49004 18.5427 8.86403 16.5487 8.86403C14.4927 8.86403 12.9307 7.49404 10.4487 7.49404C8.01071 7.49404 5.41473 8.98403 3.76874 11.532C1.45475 15.12 1.85075 21.866 5.60073 27.6119C6.94272 29.6679 8.73471 31.9799 11.0787 31.9999C13.1647 32.0199 13.7527 30.6619 16.5787 30.6479C19.4046 30.6319 19.9406 32.0179 22.0226 31.9959C24.3686 31.9779 26.2586 29.4159 27.6006 27.3599C28.5626 25.8859 28.9206 25.1439 29.6666 23.4799C24.2406 21.414 23.3706 13.698 28.7406 10.736Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_11_11">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        :
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.8024 9.76833L3.01889 0.123178C2.808 4.82537e-05 2.54267 0.00688879 2.33857 0.130018C2.12767 0.253148 1.99841 0.472045 1.99841 0.718304C1.99841 0.718304 2.00522 1.60757 2.01202 3.07145L14.2374 15.3639L19.8024 9.76833Z" fill="url(#paint0_linear_762_155)" />
                            <path d="M2.01196 3.07129C2.03237 8.35219 2.0936 21.1714 2.12081 27.5536L14.2441 15.3637L2.01196 3.07129Z" fill="url(#paint1_linear_762_155)" />
                            <path d="M29.4086 15.2889L19.8024 9.76855L14.2306 15.3641L20.5168 21.6848L29.4154 16.4723C29.6263 16.3492 29.7555 16.1234 29.7555 15.884C29.7555 15.6377 29.6195 15.412 29.4086 15.2889Z" fill="url(#paint2_linear_762_155)" />
                            <path d="M2.11414 27.5541C2.12774 29.832 2.13455 31.289 2.13455 31.289C2.13455 31.5353 2.26381 31.761 2.47471 31.8773C2.6856 32.0004 2.94413 32.0004 3.15503 31.8773L20.5236 21.6917L14.2374 15.3711L2.11414 27.5541Z" fill="#FEF3C7" />
                            <defs>
                                <linearGradient id="paint0_linear_762_155" x1="1.99841" y1="7.70208" x2="19.8055" y2="7.70208" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#63BE6B" />
                                    <stop offset="0.506" stopColor="#5BBC6A" />
                                    <stop offset="1" stopColor="#4AB96A" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_762_155" x1="2.0087" y1="15.3154" x2="14.237" y2="15.3154" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3EC6F2" />
                                    <stop offset="1" stopColor="#45AFE3" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_762_155" x1="14.2371" y1="15.731" x2="29.7539" y2="15.731" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FAA51A" />
                                    <stop offset="0.387" stopColor="#FAB716" />
                                    <stop offset="0.741" stopColor="#FAC412" />
                                    <stop offset="1" stopColor="#FAC80F" />
                                </linearGradient>
                            </defs>
                        </svg>

                }

                <div className="d-flex flex-column gap-2">

                    <p
                    className='bodyTiny400 textWhite'
                    >Download now</p>
                    <h4 className='textWhite'>
                        {isAppStore ? 'App store' : 'Play Store'}
                    </h4>
                </div>

            </a>
        </>
    )
}

export default AppLink