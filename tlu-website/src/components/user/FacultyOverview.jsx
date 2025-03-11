import React from 'react'
import NavBar from '../layouts/NavBar'
import Footer from '../layouts/Footer'
import SmallNavBar from '../layouts/SmallNavBar'

const sampleData = {
    navigationLinks: [
      { label: "Trang chủ", href: "/" },
      { label: "Giới thiệu", href: "" },
      { label: "Tổng quan về khoa", href: "" },
    ],
  };

function FacultyOverview() {
  return (
    <div className='w-full relative'>
        <NavBar />

        <div className='mt-[80px] md:mt-[120px]'>
            <div className='mx-4 md:mx-10 lg:mx-44'>
                <SmallNavBar navigationLinks={ sampleData.navigationLinks } />
            </div>

            <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-10 lg:mx-50 gap-x-5 md:gap-x-30 mt-10">
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <p className="inline-block text-xl md:text-3xl font-bold border-b-3 border-red-500">
                        Tổng quan về khoa
                    </p>
                </div>

                <div className="w-full md:w-1/3">
                    <p className='text-[#736D6D] text-sm md:text-base'>
                        Khoa Công nghệ thông tin (CNTT) được thành lập ngày 19/11/2001 từ việc sáp nhập Trung tâm tin học và Bộ môn Toán học của trường. Mục tiêu là đào tạo, cung cấp đội ngũ kỹ sư công nghệ thông tin đáp ứng các yêu cầu xã hội.
                    </p>
                </div>

                <div className="w-full md:w-1/3 mt-6 md:mt-0">
                    <p className='text-[#736D6D] text-sm md:text-base'>
                        Kể từ khi thành lập, Khoa CNTT đã không ngừng phát triển, trưởng thành. Các kết quả này được thể hiện như quy mô đào tạo, hợp tác doanh nghiệp và quốc tế, nghiên cứu khoa học, đội ngũ giảng viên. Mục tiêu của chúng tôi là nơi đào tạo nhóm ngành CNTT uy tín trong nước và khu vực.
                    </p>
                </div>
            </div>

            <div className='bg-[#122A58] w-full py-8 md:py-15'>
                <div className='mx-4 md:mx-10 lg:mx-50 mt-8 md:mt-[100px] flex flex-col md:flex-row justify-between text-white gap-5 md:gap-30'>
                    <div className='w-full md:w-1/3 flex flex-col py-4 md:py-15 gap-y-5'>
                        <div>
                            <p className='font-bold text-lg md:text-xl'>Triết lý đào tạo</p>
                        </div>
                        <div>
                            <p className='text-sm md:text-base'>
                                Trên tinh thần lấy sinh viên và giảng viên làm trung tâm của quá trình phát triển
                            </p>
                        </div>
                    </div>

                    <div className='w-full md:w-1/3 flex flex-col py-4 md:py-15 gap-y-5 mt-4 md:mt-0'>
                        <div>
                            <p className='font-bold text-lg md:text-xl'>Nguyên tắc đào tạo</p>
                        </div>
                        <div>
                            <p className='text-sm md:text-base'>
                                Nơi đào tạo uy tín với nền tảng cốt lõi về CNTT, phát triển phần mềm, hệ thống thông tin, trí tuệ nhân tạo và quản trị an ninh mạng
                            </p>
                        </div>
                    </div>

                    <div className='w-full md:w-1/3 flex flex-col py-4 md:py-15 gap-y-5 mt-4 md:mt-0'>
                        <div>
                            <p className='font-bold text-lg md:text-xl'>Tiềm năng phát triển</p>
                        </div>
                        <div>
                            <p className='text-sm md:text-base'>
                                Khoa luôn mở rộng quy mô tuyển sinh cho cả đại học, sau đại học với trên 450 chỉ tiêu năm 2023 và tăng dần theo mỗi năm
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full mt-8 md:mt-[50px]'>
                <div className='mx-4 md:mx-10 lg:mx-50 flex flex-col md:flex-row items-center gap-8 md:gap-20'>
                    <div className='w-full md:w-2/5 flex flex-col gap-y-5 md:gap-y-10 mx-0 md:mx-10'>
                        <div>
                            <p className='font-bold text-2xl md:text-4xl'>Về đội ngũ</p>
                        </div>
                        <div>
                            <p className='text-sm md:text-base'>Khoa có 06 giảng viên là Phó giáo sư, 36 giảng viên có học vị Tiến sĩ (TS), 27 giảng viên có trình độ Thạc sĩ, trong đó có nhiều giảng viên đang học nghiên cứu sinh. Phần lớn các Tiến sỹ của Khoa đều tu nghiệp tại nước ngoài có nền khoa học tiên tiến về CNTT.</p>
                            <br></br>
                            <p className='text-sm md:text-base'>Kính mời các quý vị truy cập và khám phá trang web của Khoa chúng tôi, tìm hiểu các chương trình đào tạo đại học và sau đại học, các thành tựu và hoạt động nghiên cứu của Khoa CNTT, trường Đại học Thủy lợi.</p>
                        </div>
                    </div>

                    <div className='w-full md:w-3/5 mt-4 md:mt-0'>
                        <img src="/assets/faculty_overview/gv_1.png" alt="" className="w-full h-auto"/>
                    </div>
                </div>

                <div className='mx-4 md:mx-10 lg:mx-50 mt-8 md:mt-[50px] flex flex-col-reverse md:flex-row items-center'>
                    <div className='w-full md:w-3/5 mt-4 md:mt-0'>
                        <img src="/assets/faculty_overview/gv_2.png" alt="" className="w-full h-auto"/>
                    </div>

                    <div className='w-full md:w-2/5 flex flex-col gap-y-5 md:gap-y-10 mx-0 md:mx-10'>
                        <div>
                            <p className='font-bold text-2xl md:text-4xl'>Về đào tạo</p>
                        </div>
                        <div>
                            <p className='text-sm md:text-base'>
                                Hiện nay, khoa có 5 ngành đào tạo đại học (An ninh mạng, Công nghệ thông tin, Hệ thống thông tin, Kỹ thuật phần mềm, Trí tuệ nhân tạo và khoa học dữ liệu, ngành CNTT chất lượng cao - định hướng trí tuệ nhân tạo ứng dụng), ngành CNTT trình độ thạc sỹ, Tiến sĩ với hơn 4000 sinh viên, học viên cao học và nghiên cứu sinh. Các chương trình đào tạo được cập nhật thường xuyên để đáp ứng với nhu cầu thực tiễn của xã hội và quốc tế.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='mx-4 md:mx-10 lg:mx-50 mt-8 md:mt-[50px] flex flex-col md:flex-row items-center gap-8 md:gap-20 mb-8 md:mb-[50px]'>
                    <div className='w-full md:w-2/5 flex flex-col gap-y-5 md:gap-y-10 mx-0 md:mx-10'>
                        <div>
                            <p className='font-bold text-2xl md:text-4xl'>Về NCKH và hợp tác quốc tế</p>
                        </div>
                        <div>
                            <p className='text-sm md:text-base'>
                                Khoa đạt được nhiều thành tích cao, các giảng viên của khoa đã công bố hàng trăm bài báo khoa học, với nhiều công bố quốc tế thuộc danh mục SCI/SCIE. Các thầy cô trong Khoa chủ nhiệm và tham gia trên 10 đề tài cấp nhà nước, Nafosted, hàng chục đề tài nghiên cứu khoa học cấp Bộ và cấp cơ sở. Khoa đã có các hợp tác nghiên cứu, trao đổi sinh viên, giảng viên với nhiều trường quốc tế như các trường Đại học ở Mỹ (Delta University, Arkansas University, Colorado State University), Pháp (Paris 6, Paris 7), Bỉ (Namur), Nhật (Tohoku, Sojo), Hàn Quốc (Ajou, Hansung, Seoul) và các nước châu Á khác.
                            </p>
                        </div>
                    </div>

                    <div className='w-full md:w-3/5 mt-4 md:mt-0'>
                        <img src="/assets/faculty_overview/gv_3.png" alt="" className="w-full h-auto"/>
                    </div>
                </div>
            </div>

            <div className='bg-[#122A58] w-full flex flex-col md:flex-row items-center justify-between py-8 md:py-30 px-4 md:px-10 lg:px-60'>
                <div className='w-full md:w-1/2 flex justify-center mb-6 md:mb-0'>
                    <img src="/assets/faculty_overview/cocautochuc.png" alt="" className="w-full max-w-md h-auto"/>
                </div>

                <div className='w-full md:w-fit text-white font-bold text-xl md:text-3xl text-center md:text-left'>
                    <p>Cơ cấu tổ chức của khoa</p>
                    <p>Công nghệ thông tin - ĐH Thủy Lợi</p>
                </div>
            </div>

            <div className='bg-white w-full flex flex-col items-center justify-center py-8 md:py-30 px-4 md:px-10 lg:px-60 space-y-10 md:space-y-25'>
                <div className='w-full md:w-1/2 text-[#122A58] font-bold text-3xl md:text-5xl flex justify-center text-center'>
                    <p>Ban chủ nhiệm khoa</p>
                </div>

                <div className='w-full text-white text-xl md:text-3xl flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-8 lg:space-x-30'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src="/assets/faculty_overview/thayLeVanHung.png" alt="" className='rounded-xl w-full max-w-xs' />
                        <div className='flex flex-col items-center justify-center pt-5 space-y-1'>
                            <p className='text-[#122A58] font-bold text-sm md:text-base'>PGS.TS Lê Văn Hưng</p>
                            <p className='text-[#737373] font-base text-sm md:text-base'>Trưởng khoa</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <img src="/assets/faculty_overview/thayTaQuangChieu.png" alt="" className='rounded-xl w-full max-w-xs' />
                        <div className='flex flex-col items-center justify-center pt-5 space-y-1'>
                            <p className='text-[#122A58] font-bold text-sm md:text-base'>TS. Tạ Quang Chiểu</p>
                            <p className='text-[#737373] font-base text-sm md:text-base'>Phó trưởng khoa</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center'>
                        <img src="/assets/faculty_overview/thayDoLan.png" alt="" className='rounded-xl w-full max-w-xs' />
                        <div className='flex flex-col items-center justify-center pt-5 space-y-1'>
                            <p className='text-[#122A58] font-bold text-sm md:text-base'>PGS.TS Đỗ Lân</p>
                            <p className='text-[#737373] font-base text-sm md:text-base'>Phó trưởng khoa</p>
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-end px-4 md:px-10 lg:px-47'>
                    <a href="/gioi-thieu/doi-ngu-nhan-su" className="flex justify-end items-center text-[#C10629] text-base md:text-xl font-bold hover:underline transition-all duration-500 ease-out gap-2">
                    Đội ngũ nhân sự
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.17631 0.178483C8.28881 0.0641944 8.44132 0 8.60032 0C8.75933 0 8.91184 0.0641944 9.02434 0.178483L13.8245 5.06085C13.9369 5.17528 14 5.33039 14 5.49212C14 5.65385 13.9369 5.80896 13.8245 5.9234L9.02434 10.8058C8.96941 10.8657 8.90317 10.9138 8.82956 10.9472C8.75596 10.9805 8.67651 10.9985 8.59594 10.9999C8.51538 11.0014 8.43531 10.9863 8.36045 10.9556C8.28559 10.9248 8.21754 10.8791 8.16034 10.8211C8.10313 10.7631 8.05819 10.694 8.02823 10.618C8.00085 10.5435 7.98809 10.464 7.99056 10.384C7.99302 10.304 8.01062 10.2255 8.04212 10.1527C8.07363 10.0799 8.11832 10.0142 8.17369 9.9592L12.354 5.49212L8.17369 1.02503C8.06135 0.910599 8 0.755487 8 0.593756C8 0.432024 8.06135 0.276912 8.17369 0.162483L8.17631 0.178483Z" fill="#C10629"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 5.50014C0 5.36752 0.0526784 5.24055 0.146447 5.14669C0.240215 5.05282 0.367392 5.00014 0.5 5.00014H13C13.1326 5.00014 13.2598 5.05282 13.3536 5.14669C13.4473 5.24055 13.5 5.36752 13.5 5.50014C13.5 5.63275 13.4473 5.75972 13.3536 5.85358C13.2598 5.94744 13.1326 6.00012 13 6.00012H0.5C0.367392 6.00012 0.240215 5.94744 0.146447 5.85358C0.0526784 5.75972 0 5.63275 0 5.50014Z" fill="#C10629"/>
                    </svg>
                    </a>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default FacultyOverview