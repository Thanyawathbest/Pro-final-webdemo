import React, { useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import temple2 from '../image/temple2.jpg'
import Buddha from '../image/Buddha_statue.png'
import map from '../image/map.png'
import Upload from './Upload';
// import ''
function Home() {
  const slides = [
    {
      url: require('../image/temple.jpg'),
    },
    {
      url: require('../image/temple1.jpg'),
    },
    {
      url: require('../image/temple2.jpg'),
    },
    {
      url: require('../image/Buddha-statue.jpg'),
    },
    {
      url: require('../image/tree-in-temple.jpg'),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
      <Upload/>
      <div className='max-w-[1000px] h-[780px] w-full m-auto py-16 px-4 relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>

      <div className=' pb-10 bg-slate-300'>
        <div className='flex justify-center mb-10 pt-10'>
          <img className=' h-60 ' src={temple2} />
          <div className=' ml-16 flex flex-col justify-around'>
            <p className=' text-2xl'>พระเจดีย์มุเตา เจดีย์เอียง เกาะเกร็ด จังหวัด นนทบุรี</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>ดูเพิ่มเติม</button>
          </div>


        </div>

        <div className='flex justify-center '>
          <div className=' flex flex-col justify-around mr-48 w-96'>
            <p className=' text-2xl text-center'>พระอุโบสถ</p>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>ดูเพิ่มเติม</button>
          </div>
          <img className=' h-60 ' src={Buddha} />

        </div>
      </div>

     

      <div className='flex justify-center items-center pb-2'>
        <div className=''>
        <p className=' text-2xl pt-3 pb-2 ' >แผนที่</p>
          <div className='flex'>
          <div className=' bg-red-50 border-2 border-black h-80 '>
          <p className=' ml-8 text-xl mt-2 mb-2'>วัดปรมัยยิกาวาส</p>
          <div className='border-t-2 border-black flex justify-center h-80'>
            <p className=' mt-7 ml-3'>51 หมู่ 7 ถนนแจ้งวัฒนะ เกาะเกร็ด ปากเกร็ด นนทบุรี 11120</p>
            <img className='h-60 mt-5 ml-5' src={map} />
          </div>
        </div>
          </div>
        
        </div>
        
      </div>


    {/* ติดต่อ */}
      <div className='  bg-slate-400 '>
        <div className='flex'>
          <div>
            <p className='text-white text-3xl font-bold'>Travel</p>
            <p className='text-white text-l font-bold'>วัดปรมัยยิกาวาส</p>
            <p className='text-white text-l font-bold'>51 หมู่ 7 ถนนแจ้งวัฒนะ ปากเกร็ด, นนทบุรี</p>
            <p className='text-white text-l font-bold'>02-584-5120</p>
          </div>

          <div>
          <p className='text-white text-3xl font-bold'>เครื่องอำนวยความสะดวก</p>
          <svg 
              data-v-229087d8="" 
              aria-hidden="true" 
              focusable="false" 
              data-prefix="fas" 
              data-icon="check" 
              role="img" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512" 
              class=" w-5">
          <path data-v-229087d8="" fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" class=""></path></svg>
          <span className='text-white text-l font-bold'>ห้องน้ำ</span>
        </div>

        </div>
      </div>

    </>
  )
}

export default Home