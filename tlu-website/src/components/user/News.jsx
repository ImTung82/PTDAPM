import React from "react";
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import HighlightHeader from "../layouts/HighlightHeader";
import ArticleOther from "../layouts/ArticleOther";
import Sidebar from "../layouts/Sidebar";
import SmallNavBar from "../layouts/SmallNavBar";

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
    <>
      <NavBar />

      <main>
        <SmallNavBar navigationLinks={sampleData.navigationLinks} />

        <div className="flex gap-x-30">
          <div className="w-1/4">
            <Sidebar title="Tin tức" items={sidebarData} />
          </div>

          <div className="w-3/4">
            <HighlightHeader title="TIN TỨC" />
            <div className="flex flex-col gap-y-5">
              <ArticleOther link="" />
              <ArticleOther link="" />
              <ArticleOther link="" />
              <ArticleOther link="" />
              <ArticleOther link="" />
              <ArticleOther link="" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default News;
