import React, { useState } from 'react'
import NavBar from '../layouts/NavBar'
import Footer from '../layouts/Footer'
import Article from '../layouts/Article'
import ArticleMainPage from '../layouts/ArticleMainPage'
import HighlightHeader from '../layouts/HighlightHeader'
import SeeAll from '../layouts/SeeAll'
import ImageSlider from '../layouts/ImageSlider'
import PartnerImageSlider from '../layouts/PartnerImageSlider'

function Main() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className='w-full relative'>
        <NavBar />

        <ImageSlider />

        {/* Intro Card */}
        <div className='w-full max-w-[1300px] h-auto mx-4 sm:mx-auto rounded-xl relative -mt-6 sm:-mt-12 bg-white shadow-lg p-4 sm:p-10'>
          {/* Button chọn nội dung */}
          <div className='flex flex-col sm:flex-row justify-center gap-2 sm:gap-15 mb-4'>
            <button
              className={`text-[#192E58] text-sm sm:text-lg font-semibold px-3 sm:px-8 py-2 sm:py-3 rounded-xl transition-all duration-500 ease-out flex items-center justify-center gap-1 sm:gap-3 ${
                activeTab === 'tab1' ? 'bg-gray-100' : 'bg-white'
              }`}
              onClick={() => setActiveTab('tab1')}
            >
              <img src="/assets/intro_card/icon-2.png" alt="" className="w-5 h-5 sm:w-auto sm:h-auto" /> <span className="whitespace-nowrap">Môi trường giáo dục</span>
            </button>
            <button
              className={`text-[#192E58] text-sm sm:text-lg font-semibold px-3 sm:px-8 py-2 sm:py-3 rounded-xl transition-all duration-500 ease-out flex items-center justify-center gap-1 sm:gap-3 ${
                activeTab === 'tab2' ? 'bg-gray-100' : 'bg-white'
              }`}
              onClick={() => setActiveTab('tab2')}
            >
              <img src="/assets/intro_card/icon-1.png" alt="" className="w-5 h-5 sm:w-auto sm:h-auto" /> <span className="whitespace-nowrap">Chương trình đào tạo</span>
            </button>
            <button
              className={`text-[#192E58] text-sm sm:text-lg font-semibold px-3 sm:px-8 py-2 sm:py-3 rounded-xl transition-all duration-500 ease-out flex items-center justify-center gap-1 sm:gap-3 ${
                activeTab === 'tab3' ? 'bg-gray-100' : 'bg-white'
              }`}
              onClick={() => setActiveTab('tab3')}
            >
              <img src="/assets/intro_card/icon.png" alt="" className="w-5 h-5 sm:w-auto sm:h-auto" /> <span className="whitespace-nowrap">Hoạt động sinh viên</span>
            </button>
          </div>

          {/* Hiển thị nội dung theo tab */}
          <div className='text-left text-sm sm:text-md transition-all duration-500 ease-out px-3 sm:px-10 mt-4 sm:mt-7'>
            {activeTab === 'tab1' && (
              <>
                <p>Trở thành sinh viên của khoa, các bạn có một môi trường giáo dục tốt: Có các phòng học, phòng thí nghiệm, và trang thiết bị tối ưu để hỗ trợ việc giảng dạy và nghiên cứu trong lĩnh vực Công nghệ thông tin; Có các giảng viên giàu kinh nghiệm, có trình độ chuyên môn cao và đam mê trong lĩnh vực Công nghệ thông tin. Các giảng viên cung cấp kiến thức mới nhất, hướng dẫn và hỗ trợ sinh viên trong quá trình học tập; Có chương trình học phong phú và đa dạng, bao gồm cả các môn học</p>
                <a href="/gioi-thieu/tong-quan-ve-khoa" className="flex justify-end items-center text-[#C10629] font-bold hover:underline transition-all duration-500 ease-out gap-2 mt-4">
                  Tổng quan về khoa
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.17631 0.178483C8.28881 0.0641944 8.44132 0 8.60032 0C8.75933 0 8.91184 0.0641944 9.02434 0.178483L13.8245 5.06085C13.9369 5.17528 14 5.33039 14 5.49212C14 5.65385 13.9369 5.80896 13.8245 5.9234L9.02434 10.8058C8.96941 10.8657 8.90317 10.9138 8.82956 10.9472C8.75596 10.9805 8.67651 10.9985 8.59594 10.9999C8.51538 11.0014 8.43531 10.9863 8.36045 10.9556C8.28559 10.9248 8.21754 10.8791 8.16034 10.8211C8.10313 10.7631 8.05819 10.694 8.02823 10.618C8.00085 10.5435 7.98809 10.464 7.99056 10.384C7.99302 10.304 8.01062 10.2255 8.04212 10.1527C8.07363 10.0799 8.11832 10.0142 8.17369 9.9592L12.354 5.49212L8.17369 1.02503C8.06135 0.910599 8 0.755487 8 0.593756C8 0.432024 8.06135 0.276912 8.17369 0.162483L8.17631 0.178483Z" fill="#C10629"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 5.50014C0 5.36752 0.0526784 5.24055 0.146447 5.14669C0.240215 5.05282 0.367392 5.00014 0.5 5.00014H13C13.1326 5.00014 13.2598 5.05282 13.3536 5.14669C13.4473 5.24055 13.5 5.36752 13.5 5.50014C13.5 5.63275 13.4473 5.75972 13.3536 5.85358C13.2598 5.94744 13.1326 6.00012 13 6.00012H0.5C0.367392 6.00012 0.240215 5.94744 0.146447 5.85358C0.0526784 5.75972 0 5.63275 0 5.50014Z" fill="#C10629"/>
                  </svg>
                </a>
              </>
            )}
            {activeTab === 'tab2' && (
              <>
                <p>Chương trình đào tạo các ngành thuộc nhóm ngành CNTT của khoa có các đặc điểm sau: Có một nền tảng kiến thức rộng về các lĩnh vực liên quan đến Công nghệ thông tin, bao gồm các học phần cơ bản như lập trình, cơ sở dữ liệu, mạng máy tính, hệ điều hành, thuật toán, và công nghệ phần mềm; Có tính thực tiễn và ứng dụng, đảm bảo sinh viên được tiếp cận với các công nghệ và công cụ thực tế trong lĩnh vực Công nghệ thông tin. Thông qua các dự án thực hành, thực tập,</p>
                <a href="/dao-tao/dao-tao-dai-hoc/nganh-cong-nghe-thong-tin" className="flex justify-end items-center text-[#C10629] font-bold hover:underline transition-all duration-500 ease-out gap-2 mt-4">
                  Chương trình đào tạo
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.17631 0.178483C8.28881 0.0641944 8.44132 0 8.60032 0C8.75933 0 8.91184 0.0641944 9.02434 0.178483L13.8245 5.06085C13.9369 5.17528 14 5.33039 14 5.49212C14 5.65385 13.9369 5.80896 13.8245 5.9234L9.02434 10.8058C8.96941 10.8657 8.90317 10.9138 8.82956 10.9472C8.75596 10.9805 8.67651 10.9985 8.59594 10.9999C8.51538 11.0014 8.43531 10.9863 8.36045 10.9556C8.28559 10.9248 8.21754 10.8791 8.16034 10.8211C8.10313 10.7631 8.05819 10.694 8.02823 10.618C8.00085 10.5435 7.98809 10.464 7.99056 10.384C7.99302 10.304 8.01062 10.2255 8.04212 10.1527C8.07363 10.0799 8.11832 10.0142 8.17369 9.9592L12.354 5.49212L8.17369 1.02503C8.06135 0.910599 8 0.755487 8 0.593756C8 0.432024 8.06135 0.276912 8.17369 0.162483L8.17631 0.178483Z" fill="#C10629"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 5.50014C0 5.36752 0.0526784 5.24055 0.146447 5.14669C0.240215 5.05282 0.367392 5.00014 0.5 5.00014H13C13.1326 5.00014 13.2598 5.05282 13.3536 5.14669C13.4473 5.24055 13.5 5.36752 13.5 5.50014C13.5 5.63275 13.4473 5.75972 13.3536 5.85358C13.2598 5.94744 13.1326 6.00012 13 6.00012H0.5C0.367392 6.00012 0.240215 5.94744 0.146447 5.85358C0.0526784 5.75972 0 5.63275 0 5.50014Z" fill="#C10629"/>
                  </svg>
                </a>
              </>
            )}
            {activeTab === 'tab3' && (
              <>
                <p>Hoạt động sinh viên đóng vai trò quan trọng trong việc phát triển và làm giàu cho trải nghiệm học tập của các sinh viên. Các hoạt động này không chỉ giúp các sinh viên rèn luyện kỹ năng cá nhân, mở rộng kiến thức, mà còn tạo ra những cơ hội giao lưu, hợp tác và xây dựng mạng lưới quan hệ trong cộng đồng sinh viên và xã hội. Đối với hoạt động NCKH, sinh viên có thể tham gia vào các dự án nghiên cứu, làm việc cùng với giảng viên và các nhóm nghiên cứu, khám phá và đ</p>
                <a href="/nghien-cuu/sinh-vien-nckh" className="flex justify-end items-center text-[#C10629] font-bold hover:underline transition-all duration-500 ease-out gap-2 mt-4">
                  NCKH sinh viên
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.17631 0.178483C8.28881 0.0641944 8.44132 0 8.60032 0C8.75933 0 8.91184 0.0641944 9.02434 0.178483L13.8245 5.06085C13.9369 5.17528 14 5.33039 14 5.49212C14 5.65385 13.9369 5.80896 13.8245 5.9234L9.02434 10.8058C8.96941 10.8657 8.90317 10.9138 8.82956 10.9472C8.75596 10.9805 8.67651 10.9985 8.59594 10.9999C8.51538 11.0014 8.43531 10.9863 8.36045 10.9556C8.28559 10.9248 8.21754 10.8791 8.16034 10.8211C8.10313 10.7631 8.05819 10.694 8.02823 10.618C8.00085 10.5435 7.98809 10.464 7.99056 10.384C7.99302 10.304 8.01062 10.2255 8.04212 10.1527C8.07363 10.0799 8.11832 10.0142 8.17369 9.9592L12.354 5.49212L8.17369 1.02503C8.06135 0.910599 8 0.755487 8 0.593756C8 0.432024 8.06135 0.276912 8.17369 0.162483L8.17631 0.178483Z" fill="#C10629"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 5.50014C0 5.36752 0.0526784 5.24055 0.146447 5.14669C0.240215 5.05282 0.367392 5.00014 0.5 5.00014H13C13.1326 5.00014 13.2598 5.05282 13.3536 5.14669C13.4473 5.24055 13.5 5.36752 13.5 5.50014C13.5 5.63275 13.4473 5.75972 13.3536 5.85358C13.2598 5.94744 13.1326 6.00012 13 6.00012H0.5C0.367392 6.00012 0.240215 5.94744 0.146447 5.85358C0.0526784 5.75972 0 5.63275 0 5.50014Z" fill="#C10629"/>
                  </svg>
                </a>
              </>
            )}
          </div>
        </div>

        {/* THÔNG BÁO Section */}
        <div className='w-full max-w-[1300px] mx-auto px-4 sm:px-6 mb-10 sm:mb-20 mt-10 sm:mt-20'>
          <div className="relative">
            <HighlightHeader title="THÔNG BÁO" />
            <div className="sm:absolute sm:top-0 sm:right-0">
              <SeeAll link="/thong-bao" />
            </div>
          </div>
          <div className='flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10 mt-6'>
            <div className="w-full sm:w-1/3">
              <ArticleMainPage title="Anh nói hơi bị nhiều so với một người không có bảo hiểm y tế đấy" time="01/01/2025 | 09:25:01AM" link="/" />
            </div>
            <div className="w-full sm:w-1/3">
              <ArticleMainPage title="Anh nói hơi bị nhiều so với một người không có bảo hiểm y tế đấy" time="01/01/2025 | 09:25:01AM" link="/" />
            </div>
            <div className="w-full sm:w-1/3">
              <ArticleMainPage title="Anh nói hơi bị nhiều so với một người không có bảo hiểm y tế đấy" time="01/01/2025 | 09:25:01AM" link="/" />
            </div>
          </div>
        </div>

        {/* TIN TỨC Section */}
        <div className='w-full max-w-[1300px] mx-auto px-4 sm:px-6 mb-10 sm:mb-20'>
          <div className="relative">
            <HighlightHeader title="TIN TỨC" />
            <div className="sm:absolute sm:top-0 sm:right-0">
              <SeeAll link="/tin-tuc" />
            </div>
          </div>
          <div className='flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10 mt-6'>
            <div className="w-full sm:w-1/3">
              <ArticleMainPage title="Anh nói hơi bị nhiều so với một người không có bảo hiểm y tế đấy" time="01/01/2025 | 09:25:01AM" link="/" />
            </div>
            <div className="w-full sm:w-1/3">
              <ArticleMainPage title="Anh nói hơi bị nhiều so với một người không có bảo hiểm y tế đấy" time="01/01/2025 | 09:25:01AM" link="/" />
            </div>
            <div className="w-full sm:w-1/3">
              <ArticleMainPage title="Anh nói hơi bị nhiều so với một người không có bảo hiểm y tế đấy" time="01/01/2025 | 09:25:01AM" link="/" />
            </div>
          </div>
        </div>

        {/* ĐỐI TÁC Section */}
        <div className='w-full max-w-[1300px] mx-auto px-4 sm:px-6 mb-10 sm:mb-20'>
          <div className="relative">
            <HighlightHeader title="ĐỐI TÁC" />
            <div className="sm:absolute sm:top-0 sm:right-0">
              <SeeAll link="/doanh-nghiep/danh-sach-doi-tac" />
            </div>
          </div>
          <PartnerImageSlider />
        </div>

        <Footer />
    </div>
  )
}

export default Main