"use client"

import ReactImageMagnify from 'react-image-magnify';

function Slider3D() {
    const img='/size.png'
    return (
        <div>Slider<br />
        <div className='w-[40rem] h-[40rem]'>
        <ReactImageMagnify {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    isFluidWidth: true,
                    src: img
                },
                largeImage: {
                    src: img,
                    width: 1200,
                    height: 1800
                }
            }} />
        </div>
           
        </div>
    )
}

export default Slider3D