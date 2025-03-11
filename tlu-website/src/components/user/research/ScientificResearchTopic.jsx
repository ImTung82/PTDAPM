import React from "react";
import NavBar from "../../layouts/NavBar";
import Footer from "../../layouts/Footer";
import Sidebar from "../../layouts/Sidebar";
import SmallNavBar from "../../layouts/SmallNavBar";

function ScientificResearchTopic() {
  const sidebarData = [
    { label: "Công bố khoa học", link: "/nghien-cuu/cong-bo-khoa-hoc" },
    { label: "Đề tài NCKH", link: "/nghien-cuu/de-tai-nckh", marker: true },
    { label: "Các nhóm nghiên cứu", link: "/nghien-cuu/cac-nhom-nghien-cuu" },
    { label: "Triển khai ứng dụng", link: "/nghien-cuu/trien-khai-ung-dung" },
    { label: "Sinh viên NCKH", link: "/nghien-cuu/sinh-vien-nckh" },
  ];

  const sampleData = {
    navigationLinks: [
      { label: "Trang chủ", href: "/" },
      { label: "Nghiên cứu", href: "" },
      { label: "Đề tài NCKH", href: "" },
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
              <p className="text-[#192E58] font-bold text-xl sm:text-2xl md:text-3xl pb-4 sm:pb-6 md:pb-10">Đề tài NCKH</p>
              <div className="leading-loose text-sm sm:text-base space-y-4">
                <p>Thầy cô Khoa CNTT đã và đang chủ trì cũng như tham gia phối hợp với các đơn vị khác trong trường, các đơn vị ngoài trường và các tổ chức quốc tế các đề tài NCKH ở các cấp và phạm vi khác nhau bao gồm các đề tài quốc tế (EU, Erasmus +,...), cấp nhà nước (NAFOSTED,...), cấp bộ (Bộ NN và PTNN, Bộ Y Tế,...), cấp tỉnh và đề tài cơ sở cấp Trường Đại học Thuỷ lợi. Các đề tài rất đa dạng từ những nghiên cứu lý thuyết thuần tuý tới các đề tài ứng dụng trong nhiều lĩnh vực kinh tế xã hội và các bài toán thực tế.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ScientificResearchTopic;