"use client"
import { Ruler } from 'lucide-react'
import React, { useState } from 'react'

type Size={
    waist:string,
    bust:string,
    hip:string
}

function SizePicker(props:any) {
    const [size,setSize]=useState<null | Size>(null)
    const [selsctedSize, setSelectedSize]=useState<string>("")
    return (
        <div>
            <div className='flex gap-4 mt-4 flex-wrap'>
                {
                    Object.keys(props?.sizes).map((res, index) => {
                        return <div key={index} className={`cursor-pointer rounded border ${selsctedSize===res ? "border-gray-500":"border-gray-300"}  px-4 py-2`} onClick={()=>{setSize(props?.sizes[res])
                            setSelectedSize(res)
                        }}>
                            {res.toUpperCase()}
                        </div>
                    })
                }
            </div>
            {size && (
                <div className='mt-4 text-sm border-2 border-gray-300 rounded-md p-2 flex gap-4 shadow-xl tracking-wider w-max'>
                    <h1 className=''><Ruler size={20} /></h1>
                    <h1 className=''>Waist : {size?.waist}</h1>
                    <h1 className=''>Bust : {size?.bust}</h1>
                    <h1 className=''>Hip : {size?.hip}</h1>
                </div>
            )}
        </div>
    )
}

export default SizePicker