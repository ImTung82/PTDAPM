import React from "react";
import NavBar from "../../layouts/NavBar";
import Footer from "../../layouts/Footer";
import HighlightHeader from "../../layouts/HighlightHeader";
import ArticleOther from "../../layouts/ArticleOther";
import Sidebar from "../../layouts/Sidebar";
import SmallNavBar from "../../layouts/SmallNavBar"

function CooperateProgram() {
    const sidebarData = [
      { label: "Danh sách đối tác", link: "/doanh-nghiep/danh-sach-doi-tac" },
      { label: "Chương trình hợp tác", link: "/doanh-nghiep/chuong-trinh-hop-tac", marker: true },
      { label: "Học bổng doanh nghiệp", link: "/doanh-nghiep/hoc-bong-doanh-nghiep" },
    ];

  const sampleData = {
    navigationLinks: [
      { label: "Trang chủ", href: "/" },
      { label: "Doanh nghiệp", href: "" },
      { label: "Chương trình hợp tác", href: "" },
    ],
  };
  
  return (
    <div>
      <NavBar />

      <div className="mt-[80px] md:mt-[120px]">
        <div className="px-4 sm:px-6 lg:px-20 xl:px-55 mx-auto mb-6 md:mb-10">
          <SmallNavBar navigationLinks={sampleData.navigationLinks} />

          <div className="flex flex-col md:flex-row gap-6 md:gap-x-10 lg:gap-x-20 xl:gap-x-30">
            <div className="w-full md:w-auto">
              <Sidebar title="Doanh nghiệp" items={sidebarData} />
            </div>

            <div className="w-full pr-0 md:pr-6 lg:pr-10">
              <HighlightHeader title="CHƯƠNG TRÌNH HỢP TÁC" />
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

export default CooperateProgram;