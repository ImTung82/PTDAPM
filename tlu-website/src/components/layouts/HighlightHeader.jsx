import React from 'react';

function HighlightHeader({ title }) {
  return (
    <div className="w-full pb-12">
      <div className="flex items-center">
        <p className="font-bold text-3xl text-[#192F59]">{title}</p>
        <div className="flex-1 h-[5px] bg-[#C10629] ml-10"></div>
      </div>
    </div>
  );
}

export default HighlightHeader;
