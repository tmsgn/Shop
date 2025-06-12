'use client';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useCart } from '@/app/components/cartContext';

const Cart = () => {
    const router = useRouter();
    const onClose = () => {
      router.back();
    };
    const { items } = useCart();
  return (
   <div
   onClick={onClose}
   className='w-screen h-screen overflow-hidden absolute z-10 top-0 left-0 '>
     <div className='absolute   top-14 right-2 bg-amber-200 shadow-lg p-4 rounded-lg flex flex-col w-50 h-50'>
      <h1>Cart</h1>
      <ul className='flex flex-col gap-2'>
        {items.map((item, index) => (
          <li key={index} className='flex justify-between items-center'>
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
   </div>
  )
}

export default Cart