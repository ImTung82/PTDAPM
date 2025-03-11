import React from "react";
import NavBar from "../../layouts/NavBar";
import Footer from "../../layouts/Footer";
import HighlightHeader from "../../layouts/HighlightHeader";
import ArticleMainPage from "../../layouts/ArticleMainPage";
import Sidebar from "../../layouts/Sidebar";
import SmallNavBar from "../../layouts/SmallNavBar";

function StudentRecruitment() {
  const sidebarData = [
    { label: "Tuyển dụng sinh viên", link: "/tuyen-dung/tuyen-dung-sinh-vien", marker: true },
    { label: "Tuyển dụng giảng viên", link: "/tuyen-dung/tuyen-dung-giang-vien" },
  ];

  const sampleData = {
    navigationLinks: [
      { label: "Trang chủ", href: "/" },
      { label: "Tuyển dụng", href: "" },
      { label: "Tuyển dụng sinh viên", href: "" },
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
              <Sidebar title="Tuyển dụng" items={sidebarData} />
            </div>

            <div className="w-full flex flex-col gap-y-8 md:gap-y-10">
                <div className="pr-0 md:pr-6 lg:pr-10">
                <HighlightHeader title="THỰC TẬP" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ArticleMainPage title="Công ty cổ phần ABCXYZ" link="" />
                    <ArticleMainPage title="Công ty cổ phần ABCXYZ" link="" />
                    <ArticleMainPage title="Công ty cổ phần ABCXYZ" link="" />
                    <ArticleMainPage title="Công ty cổ phần ABCXYZ" link="" />
                    <ArticleMainPage title="Công ty cổ phần ABCXYZ" link="" />
                    <ArticleMainPage title="Công ty cổ phần ABCXYZ" link="" />
                </div>
                </div>

                <div className="pr-0 md:pr-6 lg:pr-10">
                <HighlightHeader title="VIỆC LÀM" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ArticleMainPage title="Công ty cổ phần ABCXYZ" link="" />
                    <ArticleMainPage title="Công ty cổ phần ABCXYZ" link="" />
                    <ArticleMainPage title="Công ty cổ phần ABCXYZ" link="" />
                    <ArticleMainPage title="Công ty cổ phần ABCXYZ" link="" />
                    <ArticleMainPage title="Công ty cổ phần ABCXYZ" link="" />
                    <ArticleMainPage title="Công ty cổ phần ABCXYZ" link="" />
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default StudentRecruitment;