import React, { useState } from 'react';
import Player from './Player'; // Assuming this is the file where you have defined your Player data
import ImageSlider from './ImageSlider';

const SportsSlider = () => {
  const [showMore, setShowMore] = useState(false);
  const displayCount = showMore ? Player.length : Math.ceil(Player.length / 2);

  return (
    <section className='w-full h-max p-3 sm:p-20 flex flex-col gap-y-16'>
      <div className='w-full gap-4 flex flex-col justify-start '>
        <h2 className='border-b-2 border-solid border-blue-600 font-semibold text-xl sm:text-2xl w-max p-2'>Sports</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {Player.slice(0, displayCount).map((item) => (
            <div key={item.id} className="p-4 border-solid border-2 border-blue-500 rounded-md shadow-md">
              <img
                src={item.image}
                alt={item.id === 5 ? item.AdsTitle : item.playerTitle}
                className={`w-full mb-2  ${item.id === 5 ? 'aspect-w-1 aspect-h-1' : ''}`}
              />
              <div className="font-bold">{item.id === 5 ? item.AdsTitle : item.playerTitle}</div>
              {item.id === 5 ? (
                <div className=''>
                  {item.description}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div><strong>Sports:</strong> {item.sports}</div>
                  <div><strong>Total Events:</strong> {item.totalEvent}</div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='w-full flex justify-center'>
          {Player.length > 3 && (
            <button
              className=" bg-slate-700 hover:bg-slate-800 w-max text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>
      </div>
      <div className='w-full flex-col flex'>
      <div className='w-full flex flex-col items-center'>
        <h2 className='text-3xl font-bold '>Colllection Spotlight</h2>
        <p className='text-md w-5/6 text-center'>
          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy
        </p>
      </div>
      <div className='w-full flex justify-center p-6'>
        <ImageSlider />
      </div>
      </div>
    </section>
  );
};

export default SportsSlider;
