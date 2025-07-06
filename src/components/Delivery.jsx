import React from 'react'

function Delivery() {

  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center '>Quick Delivery App</h3>

        <div className=' mx-auto grid md:grid-cols-2'>
            <img className='w-[550px] mx-auto my-4'  src='https://i.postimg.cc/Y9myXCbw/resimage2.jpg'/>
        <div className='flex flex-col justify-center'>

            <p className='text-[#00df9a] font-bold'>Get The App</p>

            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>

            <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Adipisci deleniti, explicabo <br />accusamus magnam, quasi possimus 
            quia commodi hic facilis corrupti dolorum corporis asperiores porro 
            distinctio id eligendi ipsam, nostrum soluta.</p>

        <button className='rounded-md bg-black text-[#00df9a] w-[200px] font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-[#00df9a] hover:text-black'>Get Started</button>
        </div>
        </div>
    </div>
  )
}

export default Delivery
