import React from 'react'

function Login() {
  return (
    <div className="w-full h-screen bg-[url('/assets/login_background.webp')] bg-cover bg-center flex flex-col items-center justify-center px-4">
      <div style={{ backgroundColor: "rgba(255, 255, 255, 0.85)" }} 
           className='w-full max-w-[1000px] h-auto flex flex-col items-center justify-center p-4 sm:p-6 shadow-lg rounded-md'>
        <p className='font-bold text-base sm:text-lg mb-4 sm:mb-6'>Khoa Công nghệ thông tin - TLU</p>

        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Tài khoản"
            className="w-full p-2 sm:p-3 mb-4 sm:mb-6 border-b-2 border-gray-400 focus:border-green-500 outline-none transition-colors bg-transparent"
          />

          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full p-2 sm:p-3 mb-6 sm:mb-8 border-b-2 border-gray-400 focus:border-green-500 outline-none transition-colors bg-transparent"
          />

          <button className="w-full bg-[#C10629] text-white py-2 sm:py-3 rounded hover:bg-red-700 transition-all ease-out duration-300 font-medium">
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login