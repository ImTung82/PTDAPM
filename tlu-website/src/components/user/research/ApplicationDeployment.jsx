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

      <main>
        <SmallNavBar navigationLinks={sampleData.navigationLinks} />

        <div className="flex gap-x-30">
          <div className="w-1/4">
            <Sidebar title="Nghiên cứu" items={sidebarData} />
          </div>

          <div className="w-3/4">
            <p className='text-[#192E58] font-bold text-3xl pb-10'>Triển khai ứng dụng</p>
            <div className="space-y-3 leading-loose">
                <p>Bên cạnh những nghiên cứu mang tính lý thuyết, Khoa CNTT cũng tích cực triển khai các nghiên cứu triển khai ứng dụng vào thực tế. Một số đề tài tiêu biểu gồm: </p>
                <ul className="list-disc list-inside space-y-10">
                    <li>Hệ thống phần mềm điều hành và quản lý đào tạo Đại học Thủy lơi - DTS:</li>
                    <img className="mx-auto" src="/assets/tlusoftware.png"></img>
                    <li>WARM (2018-2021): Xây dựng nền tảng số hỗ trợ quản lý dựa trên công nghệ mô hình hóa trong toán học và khoa học máy tính nhằm tối ưu hóa hoạt động của các hệ thống thủy lợi, dựa trên các mục tiêu kinh tế và chính trị cũng như giảm thiểu tác động tiêu cực của việc sử dụng nước đối với môi trường.</li>
                </ul>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ApplicationDeployment;