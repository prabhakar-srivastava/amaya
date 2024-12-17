"use server"

import { db } from "../config/firebase";
import { addDoc,collection, doc, getDocs, serverTimestamp, writeBatch } from "firebase/firestore";
import items from "@/utils/JSON/lasha.json"

const addPost=async ()=>{
    const batch= writeBatch(db)
    items.lasha.forEach(item=>{
        const data={
            ...item,
            createdBy:serverTimestamp(),
            updatedBy:serverTimestamp()

        }

        const docRef=doc(collection(db,'products'))
        batch.set(docRef,data)
    })
 await batch.commit()
}

const getProductList=async ()=>{
    const collectionRef=collection(db,'products')
      const collectionSnapshot= await getDocs(collectionRef)
      // console.log(collectionSnapshot,'ss');
      const productList = collectionSnapshot?.docs?.map(doc=>({
        ... doc.data(), id:doc.id
      }))
      return productList
}

export {addPost,getProductList}