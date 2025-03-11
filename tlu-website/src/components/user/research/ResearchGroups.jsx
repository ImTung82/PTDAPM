import React from "react";
import NavBar from "../../layouts/NavBar";
import Footer from "../../layouts/Footer";
import Sidebar from "../../layouts/Sidebar";
import SmallNavBar from "../../layouts/SmallNavBar";

function ResearchGroups() {
  const sidebarData = [
    { label: "Công bố khoa học", link: "/nghien-cuu/cong-bo-khoa-hoc" },
    { label: "Đề tài NCKH", link: "/nghien-cuu/de-tai-nckh" },
    { label: "Các nhóm nghiên cứu", link: "/nghien-cuu/cac-nhom-nghien-cuu", marker: true },
    { label: "Triển khai ứng dụng", link: "/nghien-cuu/trien-khai-ung-dung" },
    { label: "Sinh viên NCKH", link: "/nghien-cuu/sinh-vien-nckh" },
  ];

  const sampleData = {
    navigationLinks: [
      { label: "Trang chủ", href: "/" },
      { label: "Nghiên cứu", href: "" },
      { label: "Các nhóm nghiên cứu", href: "" },
    ],
  };

  return (
    <div>
      <NavBar />

      <div className="mt-[80px] md:mt-[120px]">
        <div className="px-4 sm:px-6 lg:px-20 xl:px-55 mx-auto mb-6 md:mb-10">
          <SmallNavBar navigationLinks={sampleData.navigationLinks} />

          <div className="flex flex-col md:flex-row gap-6 md:gap-x-10 lg:gap-x-30">
            <div className="w-full md:w-auto">
              <Sidebar title="Nghiên cứu" items={sidebarData} />
            </div>

            <div className="w-full pr-0 md:pr-6 lg:pr-10">
              <p className='text-[#192E58] font-bold text-xl sm:text-2xl md:text-3xl pb-4 sm:pb-6 md:pb-10'>Các nhóm nghiên cứu</p>
              <div className="space-y-3 leading-loose text-sm sm:text-base">
                <ul className="list-disc list-inside space-y-5 sm:space-y-10">
                  <li>
                    <b>AICOST: </b>
                    <div className="mt-2 ml-0 sm:ml-4">
                      AICOST là nhóm nghiên cứu mạnh của Trường Đại học Thuỷ lợi. Đây là nhóm nghiên cứu liên ngành giữa công nghệ thông tin, thuỷ văn và kỹ thuật tài nguyên nước nhằm mục tiêu ứng dụng trí tuệ nhân tạo cho các vấn đề thuỷ lợi, phòng chống thiên tai trong ngữ cảnh của biến đổi khí hậu.
                    </div>
                  </li>
                  
                  <li>
                    <b>MLIC: </b>
                    <div className="mt-2 ml-0 sm:ml-4">
                      MLIC là nhóm nghiên cứu mạnh của Trường Đại học Thuỷ lợi. Đây là nhóm nghiên cứu liên ngành giữa công nghệ thông tin, Điện- Điện Tử với mục tiêu xây dựng các hệ thống giám sát, điều khiển thông minh.
                    </div>
                  </li>
                  
                  <li>
                    <b>WARM: </b>
                    <div className="mt-2 ml-0 sm:ml-4">
                      Ứng dụng trí tuệ nhân tạo quản lý tài nguyên nước và thiên tai. WARM là nhóm nghiên cứu quốc tế thành lập trong khuôn khổ hợp tác giữa Trường Đại học Thuỷ lợi, Việt Nam và Viện Nghiên cứu vì sự Phát triển, cộng hoà Pháp. Đây là một nhóm liên ngành nhằm tạo ra một nền tảng số hỗ trợ quản lý dựa trên công nghệ mô hình hóa trong toán học và khoa học máy tính nhằm tối ưu hóa hoạt động của các hệ thống thủy lợi.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ResearchGroups;