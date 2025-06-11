'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

const Cart = () => {
    const router = useRouter();
    const onClose = () => {
      router.back();
    };
  return (
   <div
   onClick={onClose}
   className='w-screen h-screen overflow-hidden absolute z-10 top-0 left-0 '>
     <div className='absolute   top-14 right-2 bg-amber-200 shadow-lg p-4 rounded-lg flex flex-col w-50 h-50'>
      <h1>Cart</h1>
    </div>
   </div>
  )
}

export default Cart