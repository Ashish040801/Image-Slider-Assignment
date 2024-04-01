import React, { useState } from 'react';
import Slider from './Collection';
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";



const ImageSlider = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? (window.innerWidth > 640 ? Slider.length -3 : Slider.length - 1) : prevIndex - 1));
  };

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex === (window.innerWidth > 640 ? Slider.length -3 : Slider.length - 1) ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-4/5">
      <button className="border-sky-600 border-solid border-2 text-sky-600 absolute top-1/2 left-[-100px] sm:left-[-154px] px-4 py-2 rounded" onClick={prevSlide}>
      <GrLinkPrevious size={28} />
      </button>
      <div className="flex w-full overflow-hidden gap-x-2">
        {Slider.slice(startIndex, startIndex + (window.innerWidth > 640 ? 3 : 1)).map((slide, index) => (
          <div key={index} className="w-full aspect-[5/11] px-2 pt-2 pb-4 border border-gray-400 shadow-lg">
            <img
              src={slide.image}
              alt={`Slide ${startIndex + index}`}
              className="w-full h-full object-cover border-solid border-4 border-orange-500 rounded-sm"
            />
            <div className="flex flex-col text-center items-center border-dashed border-t-2 border-white mt-4">
              <div className="font-bold text-md sm:text-lg">{slide.adsTitle}</div>
              <div className="text-sm">{slide.day}</div>
              <div className="text-sm">{slide.location}</div>
              <button className="mt-2 bg-slate-700 hover:bg-slate-800 text-white font-bold py-1 px-2 sm:px-8">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="border-sky-600 border-solid border-2 text-sky-600  px-4 py-2 absolute top-1/2 right-[-100px] sm:right-[-154px] rounded" onClick={nextSlide}>
        <GrLinkNext size={28}/>
      </button>
    </div>
  );
};

export default ImageSlider;
