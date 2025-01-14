"use client"

import ReactImageMagnify from 'react-image-magnify';

function Slider3D() {
    const img = '/size.png'
    return (
        <div>Slider<br />
            <div className='w-[40rem] h-[40rem] z-30'>
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
                    },
                    enlargedImagePosition: 'beside',
                    lensstyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                }} />
            </div>

        </div>
    )
}

export default Slider3D