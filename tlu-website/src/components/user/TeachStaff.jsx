import React from 'react';
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';
import HighlightHeader from '../layouts/HighlightHeader';
import SmallNavBar from '../layouts/SmallNavBar';

const sampleData = {
  navigationLinks: [
    { label: "Trang chủ", href: "/" },
    { label: "Giới thiệu", href: "" },
    { label: "Đội ngũ nhân sự", href: "" },
  ],
};

function TeachStaff() {
  return (
    <div className="w-full relative">
      <NavBar />

      <div className="mt-[80px] md:mt-[120px]">
        <div className="px-4 sm:px-6 lg:px-20 xl:px-50 mx-auto">
          <SmallNavBar navigationLinks={sampleData.navigationLinks} />
        </div>
        <div>
          <div className="container mx-auto px-4 my-6 sm:my-10">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 xl:gap-20">
              {/* Đội ngũ nhân sự */}
              <div className="w-full lg:w-2/3">
                <div className="mb-6 sm:mb-10">
                  <HighlightHeader title="ĐỘI NGŨ NHÂN SỰ" />
                </div>
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="mb-6 sm:mb-10 bg-gray-50 rounded-lg shadow"
                    style={{
                      backgroundImage: "url('/assets/lecturer_list/background.jpg')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundColor: "rgba(255, 255, 255, 0.6)",
                      backgroundBlendMode: "lighten",
                    }}
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="w-full md:w-1/3 overflow-hidden">
                        <img 
                          src="/assets/lecturer_list/avatar.jpg" 
                          alt="Lecturer" 
                          className="w-full h-auto object-cover hover:scale-105 hover:opacity-90 transition-all duration-500 ease-in-out"
                        />
                      </div>
                      <div className="w-full md:w-2/3 p-4 md:p-6">
                        <p className="font-normal text-base sm:text-lg text-[#E82323]">Trưởng khoa</p>
                        <p className="font-bold text-lg sm:text-xl md:text-2xl text-black hover:text-[#35c56c] transition-colors mt-2">Name</p>
                        <p className="font-normal text-sm sm:text-base mt-2">Bộ môn Công nghệ phần mềm</p>
                        <div className="font-normal text-sm sm:text-base flex items-center gap-2 mt-3">
                          <img src="/assets/lecturer_list/email.png" alt="icon_email" className="w-5 h-5"/>
                          <a href="mailto:nguyennam@tlu.edu.vn" className="truncate">nguyennam@tlu.edu.vn</a>
                        </div>
                        <div className="font-normal text-sm sm:text-base flex items-center gap-2 mt-3">
                          <img src="/assets/lecturer_list/phone.png" alt="icon_phone" className="w-5 h-5"/>
                          <a href="tel:0987654321">0987654321</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Chuyên gia hàng đầu */}
              <div className="w-full lg:w-1/3">
                <div className="border-2 border-gray-300 rounded-lg p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 border-b-[3px] sm:border-b-[5px] border-[#E82323] pb-2">Chuyên gia hàng đầu</h2>
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className="mb-4 sm:mb-6 bg-gray-50 rounded-lg shadow"
                      style={{
                        backgroundImage: "url('/assets/lecturer_list/background.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: "rgba(255, 255, 255, 0.6)",
                        backgroundBlendMode: "lighten",
                      }}
                    >
                      <div className="flex flex-row gap-3 p-3">
                        <div className="w-1/4 overflow-hidden">
                          <img 
                            src="/assets/lecturer_list/avatar.jpg" 
                            alt="Expert" 
                            className="w-full h-auto object-cover hover:scale-110 transition-all duration-300 ease-in-out" 
                          />
                        </div>
                        <div className="w-3/4">
                          <p className="font-bold text-sm sm:text-base text-black hover:text-[#35c56c] transition-colors">Name</p>
                          <p className="font-normal text-xs sm:text-sm text-[#A3A3A3] mt-1">Trưởng khoa</p>
                          <p className="font-normal text-xs sm:text-sm text-black mt-1 truncate">Bộ môn công nghệ phần mềm</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default TeachStaff;