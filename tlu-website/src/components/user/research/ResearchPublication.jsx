import React from "react";
import NavBar from "../../layouts/NavBar";
import Footer from "../../layouts/Footer";
import Sidebar from "../../layouts/Sidebar";
import SmallNavBar from "../../layouts/SmallNavBar";

function ResearchPublication() {
  const sidebarData = [
    { label: "Công bố khoa học", link: "/nghien-cuu/cong-bo-khoa-hoc", marker: true },
    { label: "Đề tài NCKH", link: "/nghien-cuu/de-tai-nckh" },
    { label: "Các nhóm nghiên cứu", link: "/nghien-cuu/cac-nhom-nghien-cuu" },
    { label: "Triển khai ứng dụng", link: "/nghien-cuu/trien-khai-ung-dung" },
    { label: "Sinh viên NCKH", link: "/nghien-cuu/sinh-vien-nckh" },
  ];

  const sampleData = {
    navigationLinks: [
      { label: "Trang chủ", href: "/" },
      { label: "Nghiên cứu", href: "" },
      { label: "Công bố khoa học", href: "" },
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
              <p className='text-[#192E58] font-bold text-xl sm:text-2xl md:text-3xl pb-4 sm:pb-6 md:pb-10'>Công bố khoa học</p>
              <div className="leading-loose text-sm sm:text-base space-y-4">
                <p>Thầy cô Khoa CNTT tích cực công bố bài báo khoa học trên các tạp chí và hội nghị uy tín bao gồm các tạp chí quốc tế thuộc danh mục SCIE, tạp chí trong nước, hội nghị quốc tế và hội nghị trong nước có chất lượng cao nhằm chia sẻ các kết quả nghiên cứu và tăng xếp hạng của Khoa và đóng góp và xếp hạng của Trường Đại học Thuỷ lợi. Năm 2022, Khoa CNTT có 30 bài báo đăng trong các tạp chí rất uy tín thuộc danh mục SCIE (Q1, Q2), các tạp chí trong nước và hội nghị có chất lượng.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ResearchPublication;