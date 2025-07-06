import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopPicks = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

  <div  className="slider-container -mt-20">

    <h2 className='font-bold text-orange-700 text-center mb-5'>Top Picks</h2>

    <Slider {...settings}>
    <div className='box'>
      <img src="https://i.postimg.cc/gJ81h4Tv/burger.jpg" alt="burger" className='hover:scale-105 ease-in-out duration-500 rounded-2xl'/>
    </div>

    <div className='box'>
      <img src="https://i.postimg.cc/FFb2sWcv/pizza.jpg" alt="pizza" className='hover:scale-105 ease-in-out duration-500 rounded-2xl'/>
    </div>

    <div className='box'>
      <img src="https://i.postimg.cc/nr15RrZr/shawarma.jpg" alt="shawarma" className='hover:scale-105 ease-in-out duration-500 rounded-2xl'/>
    </div>

    <div className='box'>
      <img src="https://i.postimg.cc/g0wCzGyt/fruitjuice.jpg" alt="juice" className='hover:scale-105 ease-in-out duration-500 rounded-2xl'/>
    </div>
    
    <div className='box'>
      <img src="https://i.postimg.cc/4xFCRYch/Coffee.jpg" alt="coffee" className='hover:scale-105 ease-in-out duration-500 rounded-2xl'/>
    </div>

    <div>
      <img src="https://i.postimg.cc/5tZZjDn4/fried-rice.jpg" alt="rice" className='hover:scale-105 ease-in-out duration-500 rounded-2xl'/>
    </div>
  </Slider>

  </div>
  );

}

export default TopPicks
