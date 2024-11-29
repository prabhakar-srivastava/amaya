import React from 'react'

function SizePicker(props:any) {
    return (
        <div>
            <div className='flex gap-4 mt-4 flex-wrap'>
                {
                    Object.keys(props?.sizes).map((res, index) => {
                        // to get value of object using key
                        // console.log(size[res]?.bust,"res");

                        return <div key={index} className=' rounded border border-gray-300 px-4 py-2'>
                            {res.toUpperCase()}
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default SizePicker