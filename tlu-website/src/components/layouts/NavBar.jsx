import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close all submenus when closing the main menu
    if (!isMenuOpen === false) {
      setOpenSubMenu(null);
    }
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  // Close mobile menu when screen is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`w-full flex items-center justify-between px-4 md:px-8 lg:px-16 xl:px-60 py-3 md:py-4 bg-white shadow-lg fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'md:py-2' : 'md:py-4'}`}>
      {/* Logo */}
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <img src="/assets/logo_khoa.jpg" alt="Logo" className="h-10 md:h-12" />
        </a>
      </div>

      {/* Large screen menu */}
      <div className="hidden md:flex flex-col items-end">
        {/* Đăng nhập */}
        <div className="mb-3 flex items-center gap-2 hover:text-red-500 transition-all duration-500 ease-out">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="9" r="3"/>
              <circle cx="12" cy="12" r="10"/>
              <path strokeLinecap="round" d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5"/>
            </g>
          </svg>
          <Link to="/login" className="underline text-sm">
            Đăng nhập
          </Link>
        </div>

        {/* Menu */}
        <div className="flex space-x-2">
          <div className="relative group hover:text-red-700 transition-all duration-300 ease-out">
            <button className="pl-4 py-2 text-sm font-semibold">GIỚI THIỆU</button>
            <div className="text-[#192F59] absolute left-0 mt-1 w-48 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-10">
              <Link to="/gioi-thieu/tong-quan-ve-khoa" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Tổng quan về khoa</Link>
              <a href="/gioi-thieu/doi-ngu-nhan-su" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Đội ngũ nhân sự</a>
            </div>
          </div>

          <div className="relative group hover:text-red-700 transition-all duration-300 ease-out">
            <a href="/tuyen-sinh" className="pl-4 py-2 text-sm font-semibold block">
              TUYỂN SINH
            </a>
            <div className="text-[#192F59] absolute left-0 mt-1 w-48 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-10">
              <a href="" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Tuyển sinh Đại học</a>
              <a href="" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Tuyển sinh Thạc sĩ</a>
              <a href="" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Tuyển sinh Tiến sĩ</a>
            </div>
          </div>

          <div className="relative group hover:text-red-700 transition-all duration-300 ease-out">
            <button className="pl-4 py-2 text-sm font-semibold">ĐÀO TẠO</button>
            <div className="text-[#192F59] absolute left-0 mt-1 w-48 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-10">
              <Link to="/dao-tao/dao-tao-dai-hoc/nganh-cong-nghe-thong-tin" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Đào tạo Đại học</Link>
              <Link to="" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Đào tạo Thạc sĩ</Link>
              <Link to="" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Đào tạo Tiến sĩ</Link>
            </div>
          </div>

          <div className="relative group hover:text-red-700 transition-all duration-300 ease-out">
            <button className="pl-4 py-2 text-sm font-semibold">DOANH NGHIỆP</button>
            <div className="text-[#192F59] absolute left-0 mt-1 w-48 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-10">
              <a href="/doanh-nghiep/danh-sach-doi-tac" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Danh sách đối tác</a>
              <a href="/doanh-nghiep/chuong-trinh-hop-tac" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Chương trình hợp tác</a>
              <a href="/doanh-nghiep/hoc-bong-doanh-nghiep" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Học bổng doanh nghiệp</a>
            </div>
          </div>

          <div className="relative group hover:text-red-700 transition-all duration-300 ease-out">
            <button className="pl-4 py-2 text-sm font-semibold">TUYỂN DỤNG</button>
            <div className="text-[#192F59] absolute left-0 mt-1 w-48 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-10">
              <a href="/tuyen-dung/tuyen-dung-sinh-vien" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Tuyển dụng sinh viên</a>
              <a href="/tuyen-dung/tuyen-dung-giang-vien" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Tuyển dụng giảng viên</a>
            </div>
          </div>

          <div className="relative group hover:text-red-700 transition-all duration-300 ease-out">
            <button className="pl-4 py-2 text-sm font-semibold">NGHIÊN CỨU</button>
            <div className="text-[#192F59] absolute left-0 mt-1 w-48 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-10">
              <a href="/nghien-cuu/cong-bo-khoa-hoc" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Công bố khoa học</a>
              <a href="/nghien-cuu/de-tai-nckh" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Đề tài NCKH</a>
              <a href="/nghien-cuu/cac-nhom-nghien-cuu" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Các nhóm nghiên cứu</a>
              <a href="/nghien-cuu/trien-khai-ung-dung" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Triển khai ứng dụng</a>
              <a href="/nghien-cuu/sinh-vien-nckh" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Sinh viên NCKH</a>
            </div>
          </div>

          <div className="relative group hover:text-red-700 transition-all duration-300 ease-out">
            <a href="/tin-tuc" className="pl-4 py-2 text-sm font-semibold block">
                TIN TỨC
            </a>
          </div>

          <div className="relative group hover:text-red-700 transition-all duration-300 ease-out">
          <a href="/thong-bao" className="pl-4 py-2 text-sm font-semibold block">
                THÔNG BÁO
            </a>
            <div className="text-[#192F59] absolute left-0 mt-1 w-48 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-10">
              <a href="#" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Thông báo chung</a>
              <a href="#" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Thông báo Đại học</a>
              <a href="#" className="block px-5 py-3 hover:bg-gray-200 rounded-md text-xs font-semibold">Thông báo Sau đại học</a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center z-50">
        <button 
          onClick={toggleMenu} 
          className="text-black focus:outline-none p-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>
      )}

      {/* Mobile menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl z-50 overflow-y-auto transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="text-lg font-bold text-[#192F59]">Menu</div>
          <button onClick={toggleMenu} className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile menu items */}
        <div className="flex flex-col p-4">
          {/* Đăng nhập */}
          <div className="mb-5 flex items-center gap-2 hover:text-red-500 transition-all duration-500 ease-out">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="9" r="3"/>
                <circle cx="12" cy="12" r="10"/>
                <path strokeLinecap="round" d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5"/>
              </g>
            </svg>
            <Link to="/login" className="underline text-base font-medium" onClick={toggleMenu}>
              Đăng nhập
            </Link>
          </div>

          {/* Menu items with drop-downs */}
          <div className="flex flex-col space-y-3">
            <div className="border-b pb-3">
              <button 
                onClick={() => toggleSubMenu('gioi-thieu')} 
                className="flex justify-between items-center w-full py-2 font-semibold"
              >
                GIỚI THIỆU
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-200 ${openSubMenu === 'gioi-thieu' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSubMenu === 'gioi-thieu' && (
                <div className="flex flex-col pl-4 mt-2 space-y-2 text-gray-700">
                  <Link to="/gioi-thieu/tong-quan-ve-khoa" className="py-2" onClick={toggleMenu}>Tổng quan về khoa</Link>
                  <a href="/gioi-thieu/doi-ngu-nhan-su" className="py-2" onClick={toggleMenu}>Đội ngũ nhân sự</a>
                </div>
              )}
            </div>

            <div className="border-b pb-3">
              <button 
                onClick={() => toggleSubMenu('tuyen-sinh')} 
                className="flex justify-between items-center w-full py-2 font-semibold"
              >
                TUYỂN SINH
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-200 ${openSubMenu === 'tuyen-sinh' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSubMenu === 'tuyen-sinh' && (
                <div className="flex flex-col pl-4 mt-2 space-y-2 text-gray-700">
                  <a href="" className="py-2" onClick={toggleMenu}>Tuyển sinh Đại học</a>
                  <a href="" className="py-2" onClick={toggleMenu}>Tuyển sinh Thạc sĩ</a>
                  <a href="" className="py-2" onClick={toggleMenu}>Tuyển sinh Tiến sĩ</a>
                </div>
              )}
            </div>

            <div className="border-b pb-3">
              <button 
                onClick={() => toggleSubMenu('dao-tao')} 
                className="flex justify-between items-center w-full py-2 font-semibold"
              >
                ĐÀO TẠO
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-200 ${openSubMenu === 'dao-tao' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSubMenu === 'dao-tao' && (
                <div className="flex flex-col pl-4 mt-2 space-y-2 text-gray-700">
                  <Link to="/dao-tao/dao-tao-dai-hoc/nganh-cong-nghe-thong-tin" className="py-2" onClick={toggleMenu}>Đào tạo Đại học</Link>
                  <Link to="" className="py-2" onClick={toggleMenu}>Đào tạo Thạc sĩ</Link>
                  <Link to="" className="py-2" onClick={toggleMenu}>Đào tạo Tiến sĩ</Link>
                </div>
              )}
            </div>

            <div className="border-b pb-3">
              <button 
                onClick={() => toggleSubMenu('doanh-nghiep')} 
                className="flex justify-between items-center w-full py-2 font-semibold"
              >
                DOANH NGHIỆP
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-200 ${openSubMenu === 'doanh-nghiep' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSubMenu === 'doanh-nghiep' && (
                <div className="flex flex-col pl-4 mt-2 space-y-2 text-gray-700">
                  <a href="/doanh-nghiep/danh-sach-doi-tac" className="py-2" onClick={toggleMenu}>Danh sách đối tác</a>
                  <a href="/doanh-nghiep/chuong-trinh-hop-tac" className="py-2" onClick={toggleMenu}>Chương trình hợp tác</a>
                  <a href="/doanh-nghiep/hoc-bong-doanh-nghiep" className="py-2" onClick={toggleMenu}>Học bổng doanh nghiệp</a>
                </div>
              )}
            </div>

            <div className="border-b pb-3">
              <button 
                onClick={() => toggleSubMenu('tuyen-dung')} 
                className="flex justify-between items-center w-full py-2 font-semibold"
              >
                TUYỂN DỤNG
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-200 ${openSubMenu === 'tuyen-dung' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSubMenu === 'tuyen-dung' && (
                <div className="flex flex-col pl-4 mt-2 space-y-2 text-gray-700">
                  <a href="/tuyen-dung/tuyen-dung-sinh-vien" className="py-2" onClick={toggleMenu}>Tuyển dụng sinh viên</a>
                  <a href="/tuyen-dung/tuyen-dung-giang-vien" className="py-2" onClick={toggleMenu}>Tuyển dụng giảng viên</a>
                </div>
              )}
            </div>

            <div className="border-b pb-3">
              <button 
                onClick={() => toggleSubMenu('nghien-cuu')} 
                className="flex justify-between items-center w-full py-2 font-semibold"
              >
                NGHIÊN CỨU
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-200 ${openSubMenu === 'nghien-cuu' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSubMenu === 'nghien-cuu' && (
                <div className="flex flex-col pl-4 mt-2 space-y-2 text-gray-700">
                  <a href="/nghien-cuu/cong-bo-khoa-hoc" className="py-2" onClick={toggleMenu}>Công bố khoa học</a>
                  <a href="/nghien-cuu/de-tai-nckh" className="py-2" onClick={toggleMenu}>Đề tài NCKH</a>
                  <a href="/nghien-cuu/cac-nhom-nghien-cuu" className="py-2" onClick={toggleMenu}>Các nhóm nghiên cứu</a>
                  <a href="/nghien-cuu/trien-khai-ung-dung" className="py-2" onClick={toggleMenu}>Triển khai ứng dụng</a>
                  <a href="/nghien-cuu/sinh-vien-nckh" className="py-2" onClick={toggleMenu}>Sinh viên NCKH</a>
                </div>
              )}
            </div>

            <div className="border-b pb-3">
              <a href="/tin-tuc" className="flex w-full py-2 font-semibold" onClick={toggleMenu}>
                TIN TỨC
              </a>
            </div>

            <div className="border-b pb-3">
              <button 
                onClick={() => toggleSubMenu('thong-bao')} 
                className="flex justify-between items-center w-full py-2 font-semibold"
              >
                THÔNG BÁO
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-200 ${openSubMenu === 'thong-bao' ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openSubMenu === 'thong-bao' && (
                <div className="flex flex-col pl-4 mt-2 space-y-2 text-gray-700">
                  <a href="#" className="py-2" onClick={toggleMenu}>Thông báo chung</a>
                  <a href="#" className="py-2" onClick={toggleMenu}>Thông báo Đại học</a>
                  <a href="#" className="py-2" onClick={toggleMenu}>Thông báo Sau đại học</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;