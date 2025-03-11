import React from 'react'
import NavBar from '../../layouts/NavBar'
import Footer from '../../layouts/Footer'
import SmallNavBar from '../../layouts/SmallNavBar'
import Sidebar from '../../layouts/Sidebar'

function AdmissionPost() {
    const sidebarData = [
      { label: "Tuyển sinh Đại học", link: "" },
      { label: "Tuyển sinh Thạc sĩ", link: "" },
      { label: "Tuyển sinh Tiến sĩ", link: "" },
    ];
    
    const sampleData = {
      navigationLinks: [
        { label: "Trang chủ", href: "/" },
        { label: "Tuyển sinh", href: "/tuyen-sinh" },
        { label: "Sinh viên ngành Công nghệ sinh học ...", href: "" },
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
                            <Sidebar title="Tuyển sinh" items={sidebarData} />
                        </div>

                        <div className="w-full pr-0 md:pr-6 lg:pr-10 pb-10">
                            <p className='text-[#192E58] font-bold text-xl sm:text-2xl md:text-3xl'>Sinh viên ngành Công nghệ sinh học – Trường Đại học Thủy Lợi tham quan, thực tập tại Tập đoàn Đức Hạnh Marphavet BMG</p>
                            <p className='text-[#000000] opacity-60 text-xs sm:text-sm pt-2 sm:pt-3'>01/01/2025 | 09:25:01 AM</p>
                            
                            <div className='space-y-6 sm:space-y-8 mt-4 sm:mt-6'>
                                <p className='text-sm sm:text-base'>Nhằm nâng cao kiến thức thực tế và kỹ năng nghề nghiệp cho sinh viên, Khoa Hóa và Môi trường - Trường Đại học Thủy lợi đã tổ chức chương trình tham quan, thực tập chuyên ngành dành cho sinh viên ngành Công nghệ sinh học tại Tập đoàn Đức Hạnh Marphavet BMG từ ngày 22/02/2025.</p>
                                
                                <div className="w-full flex justify-center">
                                    <img src="/assets/admisson_post/image_1.png" alt="Sinh viên tham quan" className='w-full max-w-3xl h-auto' />
                                </div>
                                
                                <p className='text-sm sm:text-base'>Tập đoàn Đức Hạnh Marphavet BMG là một trong những doanh nghiệp hàng đầu tại Việt Nam trong lĩnh vực sản xuất và phân phối thuốc thú y, chế phẩm sinh học và vaccine dùng trong chăn nuôi. Tập đoàn có 12 công ty thành viên, với hệ thống dây chuyền hiện đại đạt tiêu chuẩn GMP-WHO và đội ngũ chuyên gia giàu kinh nghiệm, Tập đoàn Đức Hạnh Marphavet BMG không chỉ tạo ra những sản phẩm chất lượng mà còn là môi trường học tập lý tưởng cho sinh viên ngành Công nghệ sinh học.</p>
                                
                                <div className="w-full flex justify-center">
                                    <img src="/assets/admisson_post/image_2.png" alt="Quy trình sản xuất" className='w-full max-w-3xl h-auto' />
                                </div>
                                
                                <p className='text-sm sm:text-base'>Trong chương trình tham quan-thực tập, sinh viên ngành Công nghệ sinh học đã được giới thiệu về quy trình nghiên cứu, sản xuất vaccine, thuốc thú y và chế phẩm sinh học từ khâu nuôi cấy vi sinh vật, chiết tách, tinh chế đến kiểm nghiệm chất lượng sản phẩm. Đặc biệt, các bạn sinh viên đã có cơ hội trực tiếp quan sát các các dây chuyền công nghệ hiện đại trong sản xuất, cũng như tham gia giao lưu, đặt câu hỏi với các chuyên gia đầu ngành. Đồng thời, sinh viên được giám đốc sản xuất chia sẻ về các vị trí việc làm, cơ hội phát triển nghề nghiệp trong lĩnh vực Công nghệ sinh học.</p>
                                
                                <div className="w-full flex justify-center">
                                    <img src="/assets/admisson_post/image_3.png" alt="Sinh viên thực tập" className='w-full max-w-3xl h-auto' />
                                </div>
                                
                                <p className='text-sm sm:text-base border-b-2 border-[#D9D9D9] pb-6 sm:pb-10'>Đây là một trong những hoạt động thiết thực nhằm gắn kết lý thuyết với thực tiễn, giúp sinh viên có cái nhìn tổng quan và thực tế về vị trí việc làm của ngành công nghệ sinh học sau khi ra trường. Buổi tham quan thực tập không chỉ giúp sinh viên củng cố kiến thức, định hướng nghề nghiệp mà còn truyền động lực, niềm đam mê nghiên cứu và phát triển trong lĩnh vực Công nghệ sinh học, chuẩn bị kinh nghiệm và tay nghề cần thiết cho việc làm sau khi tốt nghiệp.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default AdmissionPost