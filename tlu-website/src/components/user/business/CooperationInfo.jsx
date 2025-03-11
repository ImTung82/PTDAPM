import React from "react";
import NavBar from "../../layouts/NavBar";
import Footer from "../../layouts/Footer";
import Sidebar from "../../layouts/Sidebar";
import SmallNavBar from "../../layouts/SmallNavBar";

function CooperationInfo() {
  const sidebarData = [
    { label: "Danh sách đối tác", link: "/doanh-nghiep/danh-sach-doi-tac", marker: true },
    { label: "Chương trình hợp tác", link: "/doanh-nghiep/chuong-trinh-hop-tac" },
    { label: "Học bổng doanh nghiệp", link: "/doanh-nghiep/hoc-bong-doanh-nghiep" },
  ];

  const sampleData = {
    navigationLinks: [
      { label: "Trang chủ", href: "/" },
      { label: "Doanh nghiệp", href: "" },
      { label: "Danh sách đối tác", href: "/doanh-nghiep/danh-sach-doi-tac" },
      { label: "Chi tiết về công ty", href: "" },
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
              <Sidebar title="Doanh nghiệp" items={sidebarData} />
            </div>

            <div className="w-full pr-0 md:pr-6 lg:pr-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#192E58] mb-4 md:mb-6">Chi tiết về công ty</h2>
              <div
                className="mb-5 sm:mb-7 md:mb-[30px]"
                style={{
                  backgroundImage: "url('/assets/lecturer_list/background.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  backgroundBlendMode: "lighten",
                }}
              >
                <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6 md:mt-10">
                  <div className="w-full sm:w-1/3 overflow-hidden">
                    <img 
                      src="/assets/article_image_sample.png"
                      alt="Company Logo"
                      className="object-cover w-full h-full"  
                    />
                  </div>
                  <div className="w-full sm:w-2/3 p-4 sm:p-0 sm:my-7">
                    <p className="font-bold text-lg sm:text-xl md:text-[24px] text-black">Công Ty Cổ Phần Gem Hà Nội</p>
                    <p className="font-normal text-sm sm:text-base md:text-[16px] text-[#E82323] mt-2 sm:mt-4">Tầng 3, Tòa nhà The Nine, số 9 Phạm Văn Đồng, Mai Dịch, Cầu Giấy, Hà Nội</p>
                    <div className="flex items-center gap-2 font-normal text-xs sm:text-sm md:text-[14px] text-black mt-2 sm:mt-4">
                      <img src="/assets/partner_image_slider/icon_web.png" alt="Website Icon" className="w-4 h-4 sm:w-auto sm:h-auto" />
                      <a href="https://gem-corp.tech/" className="break-all hover:text-[#C10629] transition-all duration-500 ease-out">https://gem-corp.tech/</a>
                    </div>
                    <div className="flex items-center gap-2 font-normal text-xs sm:text-sm md:text-[14px] text-black mt-2 sm:mt-4">
                      <img src="/assets/partner_image_slider/icon_fb.png" alt="Facebook Icon" className="w-4 h-4 sm:w-auto sm:h-auto" />
                      <a href="https://www.facebook.com/tuyendungGEM" className="break-all hover:text-[#C10629] transition-all duration-500 ease-out">https://www.facebook.com/tuyendungGEM</a>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4 sm:mt-6 md:mt-10 font-normal text-sm sm:text-base md:text-[16px] text-black leading-relaxed">
                Được thành lập năm 2014, Global Enterprise Mobility (GEM) là công ty công nghệ chuyên cung cấp giải pháp và phát triển phần mềm cho các khách hàng doanh nghiệp trong lĩnh vực vận tải, sản xuất, y tế... Sau 10 năm phát triển, với gần 300 nhân sự có kiến thức sâu rộng và kinh nghiệm, năng lực triển khai giải pháp theo tiêu chuẩn quốc tế, GEM đã và đang từng bước khẳng định vị thế tại các thị trường Nhật Bản, Hàn Quốc, Singapore, Úc, Hoa Kỳ và Châu Âu.Với mục tiêu phát triển công nghệ, mang lại giá trị thiết thực cho cộng đồng, GEM luôn đặt chất lượng của sản phẩm dịch vụ lên hàng đầu, đồng thời trọng dụng nhân tài, tạo môi trường làm việc chuyên nghiệp, sáng tạo, thúc đẩy sự phát triển toàn diện của mỗi cá nhân.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CooperationInfo