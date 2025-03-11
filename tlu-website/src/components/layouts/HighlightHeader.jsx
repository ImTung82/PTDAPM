import React from 'react';

function HighlightHeader({ title }) {
  return (
    <div className="w-full pb-5 sm:pb-10">
      <div className="flex items-center">
        <p className="font-bold text-xl sm:text-2xl md:text-3xl text-[#192F59] truncate">{title}</p>
        <div className="flex-1 h-[3px] sm:h-[5px] bg-[#C10629] ml-3 sm:ml-6 md:ml-10"></div>
      </div>
    </div>
  );
}

export default HighlightHeader;