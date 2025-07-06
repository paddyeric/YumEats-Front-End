import React, {useState} from 'react'
import {BsChevronCompactLeft} from 'react-icons/bs'
import {BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'


function Featured() {

    const sliders = [
        {
            url: 'https://i.postimg.cc/bvf9gvXb/pexels-chanwalrus-958545.jpg'
        },
        {
            url: 'https://i.postimg.cc/vmQfgBLb/pexels-farhad-8696470.jpg'
        },
        {
            url: 'https://i.postimg.cc/v84tM4ZV/pexels-pixabay-262918.jpg'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlider = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex -1
        setCurrentIndex(newIndex)
    }

    const nextSlider = () => {
        const isLastSlide = currentIndex === sliders.length -1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const moveToNextSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

  return (

    <div className='max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
        <div className='w-full h-full rounded-2xl duration-500 bg-center bg-no-repeat' 
             style={{background: `url(${sliders[currentIndex].url})`}}
        ></div>
        <div className='hidden group-hover:block absolute top-[50%] text-2xl rounded-full bg-red-700 text-white cursor-pointer left-5 -translate-x-0 translate-y-[50%]'>
            <BsChevronCompactLeft onClick={prevSlider}/>
        </div>
        <div className='hidden group-hover:block absolute top-[50%] text-2xl rounded-full bg-red-700 text-white cursor-pointer right-5 -translate-x-0 translate-y-[50%]'>
            <BsChevronCompactRight onClick={nextSlider}/>
        </div>
        <div className='flex top-4 justify-center py-2'>
            {
                sliders.map((slidersItems, slideIndex)=>(
                    <div 
                        key={slideIndex}
                        onClick={() => moveToNextSlide(slideIndex)}
                        className='text-2xl cursor-pointer'>
                        <RxDotFilled/>
                    </div>
                )) 
            }
        </div>
    </div>
  )
}

export default Featured
