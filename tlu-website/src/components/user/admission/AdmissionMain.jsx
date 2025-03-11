import React from "react";
import NavBar from "../../layouts/NavBar";
import Footer from "../../layouts/Footer";
import HighlightHeader from "../../layouts/HighlightHeader";
import ArticleOther from "../../layouts/ArticleOther";
import Sidebar from "../../layouts/Sidebar";
import SmallNavBar from "../../layouts/SmallNavBar"

function AdmissionMain() {
  const menuItems = [
    { label: "Tuyển sinh Đại học", link: "" },
    { label: "Tuyển sinh Thạc sĩ", link: "" },
    { label: "Tuyển sinh Tiến sĩ", link: "" },
  ];

  const sampleData = {
    navigationLinks: [
      { label: "Trang chủ", href: "/" },
      { label: "Tuyển sinh", href: "" },
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
                <Sidebar title="Tuyển sinh" items={menuItems} />
              </div>

              <div className="w-full pr-0 md:pr-6 lg:pr-10">
                <HighlightHeader title="TUYỂN SINH" />
                <div className="flex flex-col gap-y-5 md:gap-y-8">
                  <ArticleOther link="/tuyen-sinh/chi-tiet-bai-viet" />
                  <ArticleOther link="/tuyen-sinh/chi-tiet-bai-viet" />
                  <ArticleOther link="/tuyen-sinh/chi-tiet-bai-viet" />
                  <ArticleOther link="/tuyen-sinh/chi-tiet-bai-viet" />
                  <ArticleOther link="/tuyen-sinh/chi-tiet-bai-viet" />
                  <ArticleOther link="/tuyen-sinh/chi-tiet-bai-viet" />
                </div>
              </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AdmissionMain;