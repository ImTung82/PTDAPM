import React from 'react';
import { Link } from 'react-router-dom';

function ArticleOther({ link }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:space-x-6 md:space-x-10">
      <div className="overflow-hidden w-full sm:w-1/3 md:w-1/4 aspect-video sm:aspect-square">
        <Link to={link}>
          <img
            src="/assets/article_image_sample.png"
            alt="Article"
            className="object-cover w-full h-full transition-transform duration-300 ease-out hover:scale-125 hover:opacity-70"
          />
        </Link>
      </div>

      <div className='flex flex-col space-y-2 sm:space-y-3 w-full sm:w-2/3 md:w-3/4'>
        <div>
          <Link to={link}>
            <p className="font-semibold text-[#192F59] text-base sm:text-lg md:text-xl hover:underline transition-all duration-500 ease-out line-clamp-3">
              Anh nói hơi bị nhiều so với một người không có bảo hiểm y tế đấy
            </p>
          </Link>
        </div>

        <div className="flex flex-row space-x-2 items-center text-xs sm:text-sm opacity-60">
          <div className='border-b-2 border-[#D9D9D9] flex flex-row space-x-2 pb-1'>
            <p>01/01/2025</p>
            <p>|</p>
            <p>09:25:01AM</p>
          </div>
        </div>

        <div className="hidden sm:block">
          <p className="text-[#192F59] text-xs sm:text-sm md:text-base line-clamp-2 md:line-clamp-3">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArticleOther;