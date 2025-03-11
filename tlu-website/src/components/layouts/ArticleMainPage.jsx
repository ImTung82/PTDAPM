import React from 'react';
import { Link } from 'react-router-dom';

function ArticleMainPage({ title, time, link }) {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <div className="overflow-hidden w-full h-auto aspect-video">
        <Link to={link}>
          <img
            src="/assets/article_image_sample.png"
            alt=""
            className="object-cover w-full h-full transition-transform duration-300 ease-out hover:scale-125 hover:opacity-70"
          />
        </Link>
      </div>

      <div className="flex flex-row space-x-2 items-center text-xs sm:text-sm opacity-60 mt-2">
        <p>{ time }</p>
      </div>

      <div>
        <Link to={link}>
          <p className="font-semibold text-[#192F59] text-sm sm:text-base hover:underline transition-all duration-500 ease-out line-clamp-2">
            { title }
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ArticleMainPage;