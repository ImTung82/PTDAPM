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

      <main>
        <SmallNavBar navigationLinks={sampleData.navigationLinks} />

        <div className="flex gap-x-30">
          <div className="w-1/4">
            <Sidebar title="Nghiên cứu" items={sidebarData} />
          </div>

          <div className="w-3/4">
              <p className='text-[#192E58] font-bold text-3xl pb-10'>Đề tài NCKH</p>
              <div className="leading-loose">
                  <p>Thầy cô Khoa CNTT đã và đang chủ trì cũng như tham gia phối hợp với các đơn vị khác trong trường, các đơn vị ngoài trường và các tổ chức quốc tế các đề tài NCKH ở các cấp và phạm vi khác nhau bao gồm các đề tài quốc tế (EU, Erasmus +,...), cấp nhà nước (NAFOSTED,...), cấp bộ (Bộ NN và PTNN, Bộ Y Tế,...), cấp tỉnh và đề tài cơ sở cấp Trường Đại học Thuỷ lợi. Các đề tài rất đa dạng từ những nghiên cứu lý thuyết đến nghiên cứu ứng dụng và các triển khai áp dụng thực tế. Trong năm 2022 Khoa đang triển khai 01 đề tài quốc tế (thuộc quỹ Belmon Forum), 02 đề tài cấp nhà nước (trong đó có 01 đề tài Nafosted), 02 đề tài cấp bộ (01 thuộc Bộ NN và PTNN; 01 thuộc bộ Y Tế) và một số đề tài triển khai ứng dụng thực tế và đề tài cơ sở khác.</p>
              </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ScientificResearchTopic;