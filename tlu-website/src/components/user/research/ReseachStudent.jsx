import React from "react";
import NavBar from "../../layouts/NavBar";
import Footer from "../../layouts/Footer";
import HighlightHeader from "../../layouts/HighlightHeader";
import ArticleOther from "../../layouts/ArticleOther";
import Sidebar from "../../layouts/Sidebar";
import SmallNavBar from "../../layouts/SmallNavBar";

function ReseachStudent() {
  const sidebarData = [
    { label: "Công bố khoa học", link: "/nghien-cuu/cong-bo-khoa-hoc" },
    { label: "Đề tài NCKH", link: "/nghien-cuu/de-tai-nckh" },
    { label: "Các nhóm nghiên cứu", link: "/nghien-cuu/cac-nhom-nghien-cuu" },
    { label: "Triển khai ứng dụng", link: "/nghien-cuu/trien-khai-ung-dung" },
    { label: "Sinh viên NCKH", link: "/nghien-cuu/sinh-vien-nckh", marker: true },
  ];

  const sampleData = {
    navigationLinks: [
      { label: "Trang chủ", href: "/" },
      { label: "Nghiên cứu", href: "" },
      { label: "Sinh viên NCKH", href: "" },
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
                <HighlightHeader title="SINH VIÊN NCKH" />
                <div className="flex flex-col gap-y-5 md:gap-y-8">
                  <ArticleOther link="" />
                  <ArticleOther link="" />
                  <ArticleOther link="" />
                  <ArticleOther link="" />
                  <ArticleOther link="" />
                  <ArticleOther link="" />
                </div>
              </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ReseachStudent;