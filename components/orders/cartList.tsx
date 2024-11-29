import Image from 'next/image'
import React from 'react'

const img='https://res.cloudinary.com/deaahfa0r/image/upload/v1724394492/zeera-flavour_nny5yq.png'

interface OrderProps{
    sno:number | undefined;
    productImg: string[] | null;
    uid:string ;
    subDescription:string | null;
    details: string | null;
    size : {
        textsize:string;
        numericsize: number;
    }[];
    

}

function CartList() {
    const data:OrderProps={
        sno: undefined,
        productImg: null,
        uid: '',
        subDescription: null,
        details: null,
        size: []
    }

    const getOrders=()=>{
        localStorage.setItem('order', JSON.stringify(data))
    }
    
  return (
    <div>
        <div className=''>
            <Image src={img} alt={'demo'} width={100} height={100}/>
        </div>
        <div className=''>

        </div>
    </div>
  )
}

export default CartList