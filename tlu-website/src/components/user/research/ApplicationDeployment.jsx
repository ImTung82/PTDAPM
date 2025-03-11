import React from "react";
import NavBar from "../../layouts/NavBar";
import Footer from "../../layouts/Footer";
import Sidebar from "../../layouts/Sidebar";
import SmallNavBar from "../../layouts/SmallNavBar";

function ApplicationDeployment() {
  const sidebarData = [
    { label: "Công bố khoa học", link: "/nghien-cuu/cong-bo-khoa-hoc" },
    { label: "Đề tài NCKH", link: "/nghien-cuu/de-tai-nckh" },
    { label: "Các nhóm nghiên cứu", link: "/nghien-cuu/cac-nhom-nghien-cuu" },
    { label: "Triển khai ứng dụng", link: "/nghien-cuu/trien-khai-ung-dung", marker: true },
    { label: "Sinh viên NCKH", link: "/nghien-cuu/sinh-vien-nckh" },
  ];

  const sampleData = {
    navigationLinks: [
      { label: "Trang chủ", href: "/" },
      { label: "Nghiên cứu", href: "" },
      { label: "Triển khai ứng dụng", href: "" },
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
              <p className="text-[#192E58] font-bold text-xl sm:text-2xl md:text-3xl pb-4 sm:pb-6 md:pb-10">Triển khai ứng dụng</p>
              <div className="space-y-3 leading-loose text-sm sm:text-base">
                <p>Bên cạnh những nghiên cứu mang tính lý thuyết, Khoa CNTT cũng tích cực triển khai các nghiên cứu triển khai ứng dụng vào thực tế. Một số đề tài tiêu biểu gồm: </p>
                <ul className="list-disc list-inside space-y-5 sm:space-y-10">
                  <li className="mb-2">Hệ thống phần mềm điều hành và quản lý đào tạo Đại học Thủy lơi - DTS:</li>
                  <div className="w-full flex justify-center my-4">
                    <img className="w-full max-w-md h-auto" src="/assets/tlusoftware.png" alt="TLU Software" />
                  </div>
                  
                  <li className="mt-4">WARM (2018-2021): Xây dựng nền tảng số hỗ trợ quản lý dựa trên công nghệ mô hình hóa trong toán học và khoa học máy tính nhằm tối ưu hóa hoạt động của các hệ thống thủy lợi, dựa trên các mục tiêu kinh tế và chính trị cũng như giảm thiểu tác động tiêu cực của việc sử dụng nước đối với môi trường.</li>
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

export default ApplicationDeployment;