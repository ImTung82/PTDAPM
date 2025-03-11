import React from "react";
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import HighlightHeader from "../layouts/HighlightHeader";
import ArticleOther from "../layouts/ArticleOther";
import Sidebar from "../layouts/Sidebar";
import SmallNavBar from "../layouts/SmallNavBar"

function News() {
  const sidebarData = [
    { label: "Tin tức chung", link: "" },
    { label: "Tin đào tạo", link: "" },
    { label: "Tin KHCN & HTQT", link: "" },
    { label: "Tin công tác sinh viên", link: "" },
  ];

  const sampleData = {
    navigationLinks: [
      { label: "Trang chủ", href: "/" },
      { label: "Tin tức", href: "" },
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
              <Sidebar title="Tin tức" items={sidebarData} />
            </div>

            <div className="w-full pr-0 md:pr-6 lg:pr-10">
              <HighlightHeader title="TIN TỨC" />
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

export default News;