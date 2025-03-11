import React from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#122A58] text-white py-10 px-4">
      <div className="mx-auto px-4 sm:px-6 lg:px-50 max-w-7xl">
        {/* Responsive container for all footer content */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Thông tin bên trái */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-3">
              <img src="/assets/logo_cse.png" alt="CSE Logo" className="w-12 md:w-14" />
              <h2 className="text-lg md:text-xl font-semibold">Khoa Công nghệ thông tin</h2>
            </div>

            {/* Bảng thông tin liên hệ */}
            <div className="mt-4 text-xs md:text-sm font-semibold opacity-70">
              <table className="w-full md:w-auto">
                <tbody>
                  <tr>
                    <td className="pr-2 md:pr-6 font-semibold text-left align-top">Địa chỉ</td>
                    <td className="py-1 px-2 md:px-3">Nhà C1</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="py-1 px-2 md:px-3">Trường Đại học Thủy Lợi</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="py-1 px-2 md:px-3">175 Tây Sơn, Đống Đa, Hà Nội</td>
                  </tr>
                  <tr>
                    <td className="pr-2 md:pr-6 font-semibold text-left">Điện thoại</td>
                    <td className="py-1 px-2 md:px-3">(+84)-024 3 5632211</td>
                  </tr>
                  <tr>
                    <td className="pr-2 md:pr-6 font-semibold text-left">Email</td>
                    <td className="py-1 px-2 md:px-3">
                      <a href="mailto:vpkcntt@tlu.edu.vn" className="hover:underline">
                        vpkcntt@tlu.edu.vn
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="w-full mt-8 md:mt-15 border-t border-gray-600 pt-5 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Dòng bản quyền */}
          <div className="text-xs md:text-sm opacity-40 text-center md:text-left">
              Copyright © 2025 Thuy Loi University - Information Technology Faculty.  All rights reserved.
          </div>

          {/* Biểu tượng mạng xã hội */}
          <div className="flex flex-col">
            <div className="flex space-x-4 text-xl md:text-2xl opacity-50">
              <a href="https://www.facebook.com/cse.tlu.edu.vn" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.youtube.com/@daihocthuyloi" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>          
        </div>

      </div>
    </footer>
  );
}

export default Footer;