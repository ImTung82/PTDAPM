import React from "react";

function SmallNavBar({ navigationLinks }) {
  return (
    <div className="w-full px-2 sm:px-4 py-3 sm:py-6">
      <div className="text-xs sm:text-sm md:text-base mb-2 sm:mb-4 flex flex-wrap items-center">
        {navigationLinks.map((link, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <span className="text-[#AB9B9B] mx-1 sm:mx-2">&gt;</span>
            )}
            <div className="flex-shrink-0">
              {index === navigationLinks.length - 1 ? (
                <span className="text-[#E82323] cursor-default truncate max-w-[120px] sm:max-w-none">
                  {link.label}
                </span>
              ) : link.href ? (
                <a 
                  href={link.href} 
                  className="text-[#AB9B9B] hover:text-[#E82323] transition-all duration-500 ease-out truncate max-w-[120px] sm:max-w-none"
                >
                  {link.label}
                </a>
              ) : (
                <span className="text-[#AB9B9B] cursor-default truncate max-w-[120px] sm:max-w-none">
                  {link.label}
                </span>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default SmallNavBar;