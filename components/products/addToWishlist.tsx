"use client"
import React, { useState } from 'react'
import { ProductCardStyleProps } from './productCardStyle2'
import { Heart } from 'lucide-react'
import { addItem, setItem } from '@/lib/actions/setItem'

function AddToWishlist(props: ProductCardStyleProps) {
    const [wishlist, setWishlist] = useState<boolean>(false)
    const addWishlist=(e:any)=>{
        e.preventDefault()
        if(!wishlist){
            setWishlist(true)
            addItem('wishlist',props)
        }else{
            setWishlist(false)
        }
    }
    return (
        <div onClick={(e)=> addWishlist(e)}>
            <Heart size={20} fill={`${wishlist?'#b91c1c':'rgb(255 255 255 / 0.1)'}`}  strokeWidth={wishlist?0:1}/>
        </div>
    )
}

export default AddToWishlist