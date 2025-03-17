import React, { useState, useEffect } from "react";
import NavBar from "../layouts/NavBar";
import Footer from "../layouts/Footer";
import Dashboard from "./Dashboard";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const [name, setName] = useState("");
  const [parentCategory, setParentCategory] = useState(""); // Danh mục lớn
  const [currentCategory, setCurrentCategory] = useState(null);
  const [error, setError] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/categories");
      setCategories(response.data);
      setError("");
    } catch (err) {
      setError("Không thể tải danh sách danh mục");
      console.error("Error fetching categories:", err);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!name) {
      setError("Vui lòng nhập tên danh mục");
      return;
    }

    try {
      await axios.post("http://localhost:4000/api/categories", {
        name,
        parent_id: parentCategory || null, // Gửi parent_id nếu có
      });

      resetForm();
      fetchCategories();
    } catch (err) {
      setError("Lỗi khi thêm danh mục");
      console.error("Error adding category:", err);
    }
  };

  const handleEditClick = (category) => {
    setCurrentCategory(category);
    setName(category.name);
    setParentCategory(category.parent_id || ""); // Set danh mục lớn khi sửa
    setShowEditForm(true);
  };

  const handleUpdateCategory = async (e) => {
    e.preventDefault();
    if (!name) {
      setError("Vui lòng nhập tên danh mục");
      return;
    }

    try {
      await axios.put(`http://localhost:4000/api/categories/${currentCategory._id}`, {
        name,
        parent_id: parentCategory || null, // Cập nhật danh mục lớn
      });

      resetForm();
      fetchCategories();
    } catch (err) {
      setError("Lỗi khi cập nhật danh mục");
      console.error("Error updating category:", err);
    }
  };

  const resetForm = () => {
    setName("");
    setParentCategory("");
    setCurrentCategory(null);
    setShowAddForm(false);
    setShowEditForm(false);
    setShowDeleteForm(false);
    setError("");
  };

  const handleCheckboxChange = (categoryId) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId]
    );
  };

  const handleDeleteCategory = async () => {
    if (!currentCategory) return;
  
    try {
      await axios.delete(`http://localhost:4000/api/categories/${currentCategory._id}`);
      setCategories(categories.filter((category) => category._id !== currentCategory._id));
      setShowDeleteForm(false);
    } catch (error) {
      setError("Lỗi khi xóa danh mục");
      console.error("Lỗi khi xóa danh mục:", error);

        // Ẩn thông báo sau 3 giây
      setTimeout(() => {
        setError("");
      }, 2000);

      setShowDeleteForm(false);
    }
  };

  
    

    const openDeleteForm = (category) => {
      setCurrentCategory(category);  // Gán danh mục đang chọn
      setShowDeleteForm(true);       // Hiển thị form xóa
    };
    

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Dashboard />
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Danh sách danh mục</h1>
            <button onClick={() => setShowAddForm(true)} className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded flex items-center cursor-pointer">
              <span className="bg-white text-green-600 rounded-full w-5 h-5 flex items-center justify-center mr-2">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Thêm mới
            </button>
        </div>
        <div className="border border-gray-200 bg-white shadow-md rounded-lg py-12 mt-10">
          

          {error && <div className="bg-red-100 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

          <table className="min-w-full bg-white">
            <thead>
              <tr className="w-full h-16 border-gray-300 border-b py-8 bg-gray-100 text-gray-500">
                <th className="text-left pl-4"><input type="checkbox" className="w-5 h-5 cursor-pointer" /></th>
                <th className="text-left pl-4">#</th>
                <th className="text-left">Danh mục</th>
                <th className="text-left">Danh mục lớn</th>
                <th className="text-left">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {categories.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-4">Không có danh mục nào</td>
                </tr>
              ) : (
                categories.map((category) => (
                  <tr key={category._id} className="h-16 border-gray-300 border-b">
                    <td className="pl-4">
                     <input
                       type="checkbox"
                       className="h-5 w-5 cursor-pointer"
                       checked={selectedCategories.includes(category._id)}
                       onChange={() => handleCheckboxChange(category._id)}
                     />
                   </td>
                    <td>{category._id}</td>
                    <td>
                      {category.name}
                      {category.parent_id ? ` >> ${categories.find(c => c._id === category.parent_id)?.name || ""}` : ""}
                  </td>
                    <td>{category.parent_id ? categories.find(c => c._id === category.parent_id)?.name || "" : ""}</td>
                    <td className="">
                      {/* Nút Edit */}
                      <button onClick={() => handleEditClick(category)} className="cursor-pointer mx-3">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.27743 22.322L3.67822 17.7227L16.3913 5.00977L20.9905 9.60897L8.27743 22.322Z" fill="#FE6A00"/>
                          <path d="M23.9546 4.48869L21.5113 2.0454C20.916 1.45004 19.9087 1.49209 19.2615 2.13935L16.9661 4.43481L21.5653 9.03397L23.8607 6.73856C24.5078 6.0913 24.5499 5.084 23.9546 4.48869Z" fill="#FE6A00"/>
                          <path d="M3.25107 18.4473L1.625 24.3759L7.55305 22.7498L3.25107 18.4473Z" fill="#FE6A00"/>
                        </svg>
                      </button>

                      {/* Nút Delete */}
                      <button onClick={() => openDeleteForm(category)} className="text-orange-500 cursor-pointer">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.0938 5.1875H16.4062V4.01562C16.4062 3.49762 16.2005 3.00084 15.8342 2.63456C15.4679 2.26828 14.9711 2.0625 14.4531 2.0625H10.5469C10.0289 2.0625 9.53209 2.26828 9.16581 2.63456C8.79953 3.00084 8.59375 3.49762 8.59375 4.01562V5.1875H3.90625C3.69905 5.1875 3.50034 5.26981 3.35382 5.41632C3.20731 5.56284 3.125 5.76155 3.125 5.96875C3.125 6.17595 3.20731 6.37466 3.35382 6.52118C3.50034 6.66769 3.69905 6.75 3.90625 6.75H4.73633L5.66406 21.6387C5.7334 22.9497 6.73828 23.9375 8.00781 23.9375H16.9922C18.2681 23.9375 19.2529 22.9717 19.3359 21.6426L20.2637 6.75H21.0938C21.301 6.75 21.4997 6.66769 21.6462 6.52118C21.7927 6.37466 21.875 6.17595 21.875 5.96875C21.875 5.76155 21.7927 5.56284 21.6462 5.41632C21.4997 5.26981 21.301 5.1875 21.0938 5.1875ZM9.40283 20.8125H9.375C9.17253 20.8126 8.97792 20.7341 8.83218 20.5936C8.68645 20.4531 8.60096 20.2614 8.59375 20.0591L8.20312 9.12158C8.19574 8.91438 8.27097 8.71274 8.41227 8.561C8.55356 8.40927 8.74934 8.31988 8.95654 8.3125C9.16374 8.30512 9.36539 8.38035 9.51712 8.52164C9.66885 8.66294 9.75824 8.85872 9.76562 9.06592L10.1562 20.0034C10.16 20.106 10.1434 20.2084 10.1076 20.3046C10.0717 20.4008 10.0172 20.489 9.94726 20.5641C9.87728 20.6393 9.79318 20.6999 9.69977 20.7425C9.60635 20.7851 9.50545 20.8089 9.40283 20.8125ZM13.2812 20.0312C13.2812 20.2385 13.1989 20.4372 13.0524 20.5837C12.9059 20.7302 12.7072 20.8125 12.5 20.8125C12.2928 20.8125 12.0941 20.7302 11.9476 20.5837C11.8011 20.4372 11.7188 20.2385 11.7188 20.0312V9.09375C11.7188 8.88655 11.8011 8.68784 11.9476 8.54132C12.0941 8.39481 12.2928 8.3125 12.5 8.3125C12.7072 8.3125 12.9059 8.39481 13.0524 8.54132C13.1989 8.68784 13.2812 8.88655 13.2812 9.09375V20.0312ZM14.8438 5.1875H10.1562V4.01562C10.1557 3.96416 10.1654 3.9131 10.1848 3.86545C10.2042 3.81779 10.233 3.77449 10.2693 3.7381C10.3057 3.70171 10.349 3.67296 10.3967 3.65354C10.4444 3.63411 10.4954 3.62441 10.5469 3.625H14.4531C14.5046 3.62441 14.5556 3.63411 14.6033 3.65354C14.651 3.67296 14.6943 3.70171 14.7307 3.7381C14.767 3.77449 14.7958 3.81779 14.8152 3.86545C14.8346 3.9131 14.8443 3.96416 14.8438 4.01562V5.1875ZM16.4062 20.0591C16.399 20.2614 16.3136 20.4531 16.1678 20.5936C16.0221 20.7341 15.8275 20.8126 15.625 20.8125H15.5967C15.4941 20.8088 15.3933 20.785 15.2999 20.7424C15.2065 20.6997 15.1225 20.6391 15.0526 20.564C14.9826 20.4888 14.9282 20.4007 14.8924 20.3045C14.8566 20.2083 14.84 20.106 14.8438 20.0034L15.2344 9.06592C15.238 8.96332 15.2619 8.86245 15.3045 8.76906C15.3471 8.67568 15.4077 8.5916 15.4829 8.52164C15.558 8.45168 15.6462 8.3972 15.7424 8.36132C15.8386 8.32543 15.9409 8.30885 16.0435 8.3125C16.1461 8.31615 16.2469 8.33998 16.3403 8.38262C16.4337 8.42526 16.5178 8.48587 16.5877 8.561C16.6577 8.63613 16.7122 8.72431 16.7481 8.82049C16.7839 8.91668 16.8005 9.01899 16.7969 9.12158L16.4062 20.0591Z" fill="#E82323"/>
                        </svg>
                      </button>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Modal Thêm */}
          {showAddForm && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Thêm danh mục mới</h2>
                <form onSubmit={handleAddCategory}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                    <label className="block text-sm font-medium mb-1">
                      Tên danh mục <span className="text-red-500">*</span>
                    </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-300 rounded w-full py-2 px-3 hover:border-blue-500 transition cursor-pointer placeholder-opacity-75"
                        placeholder="Nhập nội dung"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Danh mục lớn</label>
                      <select
                        value={parentCategory}
                        onChange={(e) => setParentCategory(e.target.value)}
                        className="border border-gray-300 rounded w-full py-2.5 px-3 hover:border-blue-500 focus:border-blue-500 transition cursor-pointer"
                      >
                        <option className="opacity-75" value="" >Nhấn để chọn</option>
                        {categories.map((category) => (
                          <option key={category._id} value={category._id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>


                  {/* nút hoạt động */}
                  <div className="flex justify-end mt-6">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="text-black font-medium cursor-pointer hover:text-red-500 transition"
                    >
                      Hủy bỏ
                    </button>
                    <button className="bg-blue-500 text-white flex items-center px-4 py-2 rounded-lg shadow hover:bg-blue-600 ml-4 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="white">
                        <path d="M19 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h11l5 5v11c0 1.1-.9 2-2 2zM13 3v5h5l-5-5zM12 12H8v2h4v-2zm0 4H8v2h4v-2z"/>
                      </svg>
                      Lưu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Modal Sửa */}
          {showEditForm && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Sửa danh mục</h2>
                <form onSubmit={handleUpdateCategory}>
                <div className="grid grid-cols-2 gap-4">
                  {/* Tên danh mục */}
                  <div>
                    <label className="block mb-2 font-semibold">Tên danh mục <span className="text-red-600">*</span></label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)} 
                      className="border rounded w-full py-2 px-3 mb-4 hover:border-blue-500 transition cursor-pointer placeholder-opacity-75" 
                    />
                  </div>
                  {/* Danh mục lớn */}
                  <div>
                    <label className="block mb-2 font-semibold">Danh mục lớn</label>
                    <select
                      value={parentCategory}
                      onChange={(e) => setParentCategory(e.target.value)}
                      className="border rounded w-full py-2 px-3 mb-4 hover:border-blue-500 focus:border-blue-500 transition cursor-pointer"
                    >
                      <option value="">Nhấn để chọn</option>
                      {categories.map((category) => (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
     
                  {/* Nút Hủy và Cập nhật */}
                  <div className="flex justify-end mt-6">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="text-black font-medium cursor-pointer hover:text-red-500 transition"
                    >
                      Hủy bỏ
                    </button>
                    <button className="bg-blue-500 text-white flex items-center px-4 py-2 rounded-lg shadow hover:bg-blue-600 ml-4 cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="white">
                        <path d="M19 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h11l5 5v11c0 1.1-.9 2-2 2zM13 3v5h5l-5-5zM12 12H8v2h4v-2zm0 4H8v2h4v-2z"/>
                      </svg>
                      Lưu
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Modal Xoá */}
          {showDeleteForm && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Xóa danh mục</h2>
                <p className="mb-4"><strong>Bạn có chắc chắn muốn xóa danh mục này?</strong></p>
          
                {/* Nút Hủy và Xóa */}
                <div className="flex justify-end gap-2">
                  <button 
                    type="button" 
                    onClick={() => setShowDeleteForm(false)} 
                    className="py-2 px-4 rounded cursor-pointer hover:text-red-500"
                  >
                    Hủy bỏ
                  </button>
                  <button 
                    type="button" 
                    onClick={handleDeleteCategory} 
                    className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded cursor-pointer hover:opacity-75"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6l-2 14H7L5 6"></path>
                      <path d="M10 11v6"></path>
                      <path d="M14 11v6"></path>
                      <path d="M4 6h16"></path>
                      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
                    </svg>
                    Xóa
                  </button>
                </div>
              </div>
            </div>
          )}




        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;

// import React, { useState, useEffect } from 'react';
// import NavBar from '../layouts/NavBar';
// import Footer from '../layouts/Footer';
// import Dashboard from './Dashboard';
// import axios from 'axios';

// const Categories = () => {
//   const [categories, setCategories] = useState([]);
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [name, setName] = useState('');
//   const [currentCategory, setCurrentCategory] = useState(null);
//   const [error, setError] = useState('');
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [parentCategory, setParentCategory] = useState(""); // State cho danh mục lớn
//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/api/categories');
//       setCategories(response.data);
//       setError('');
//     } catch (err) {
//       setError('Không thể tải danh sách danh mục');
//       console.error('Error fetching categories:', err);
//     }
//   };

//   const handleAddCategory = async (e) => {
//     e.preventDefault();
//     if (!name) {
//       setError('Vui lòng nhập tên danh mục');
//       return;
//     }
//     try {
//       await axios.post('http://localhost:4000/api/categories', { name });
//       setName('');
//       setShowAddForm(false);
//       fetchCategories();
//       setError('');
//     } catch (err) {
//       setError('Lỗi khi thêm danh mục');
//       console.error('Error adding category:', err);
//     }
//   };

// //   const handleEditClick = (category) => {
// //     setCurrentCategory(category);
// //     setName(category.name);
// //     setShowEditForm(true);
// //   };

//   const handleUpdateCategory = async (e) => {
//     e.preventDefault();
//     if (!name) {
//       setError('Vui lòng nhập tên danh mục');
//       return;
//     }
//     try {
//       await axios.put(`http://localhost:4000/api/categories/${currentCategory._id}`, { name });
//       setName('');
//       setShowEditForm(false);
//       setCurrentCategory(null);
//       fetchCategories();
//       setError('');
//     } catch (err) {
//       setError('Lỗi khi cập nhật danh mục');
//       console.error('Error updating category:', err);
//     }
//   };

//   const resetForm = () => {
//     setName('');
//     setError('');
//     setCurrentCategory(null);
//     setShowAddForm(false);
//     setShowEditForm(false);
//     setParentCategory("");
//   };

//   const handleCheckboxChange = (categoryId) => {
//     setSelectedCategories((prevSelected) =>
//       prevSelected.includes(categoryId)
//         ? prevSelected.filter((id) => id !== categoryId)
//         : [...prevSelected, categoryId]
//     );
//   };

//   const handleEditClick = (category) => {
//     setCurrentCategory(category);
//     setName(category.name);
//     setShowEditForm(true);
//   };


//   const categoryMap = categories.reduce((map, category) => {
//     map[category._id] = category.name; // Lưu ID -> Tên danh mục
//     return map;
//   }, {});
  
//   return (
//     <div className="min-h-screen flex flex-col">
//       <NavBar />
//       <Dashboard />
//       <div className="container mx-auto px-4 py-8 mt-20">
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <div className="flex justify-between items-center mb-6">
//             <h1 className="text-2xl font-bold text-gray-800">Danh sách danh mục</h1>
            // <button onClick={() => setShowAddForm(true)} className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded flex items-center cursor-pointer">
            //   <span className="bg-white text-green-600 rounded-full w-5 h-5 flex items-center justify-center mr-2">
            //     <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            //       <path d="M12 5v14m-7-7h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            //     </svg>
            //   </span>
            //   Thêm mới
            // </button>
//           </div>

//           {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

//           <table className="min-w-full bg-white">
//             <thead>
//               <tr className="w-full h-16 border-gray-300 border-b py-8">
//                 <th className="text-left pl-4"><input type="checkbox" /></th>
//                 <th className="text-left pl-4">#</th>
//                 <th className="text-left">Danh mục</th>
//                 <th className="text-left">Danh mục lớn</th>
//                 <th className="text-left">Hành động</th>
//               </tr>
//             </thead>
//             <tbody>
//               {categories.length === 0 ? (
//                 <tr>
//                   <td colSpan="4" className="text-center py-4">Không có danh mục nào</td>
//                 </tr>
//               ) : (
//                 categories.map((category) => (
//                 <tr key={category._id} className="h-16 border-gray-300 border-b">
//                   <td className="pl-4">
//                     <input
//                       type="checkbox"
//                       checked={selectedCategories.includes(category._id)}
//                       onChange={() => handleCheckboxChange(category._id)}
//                     />
//                   </td>
//                   <td className="pl-4">{category._id}</td>
//                   <td>{category.name}</td>
//                   <td>{category.parent_id ? categoryMap[category.parent_id] : "—"}</td> {/* Hiển thị tên danh mục lớn */}
//                   <td>
//                     <button
//                       onClick={() => handleEditClick(category)}
//                       className="flex items-center justify-center text-white font-medium py-1 px-2 rounded focus:outline-none focus:shadow-outline cursor-pointer"
//                     >
//                       <svg
//                         className="w-6 h-6 text-orange-500"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                       >
//                         <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 5.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0L14.1 3.14l3.75 3.75 2.86-2.85z" />
//                       </svg>
//                     </button>
//                   </td>
//                 </tr>
//                 ))
//               )}
//           </tbody>
//           </table>

//           {showAddForm && (
//   <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
//     <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">

//       <h2 className="text-xl font-bold mb-4">Thêm danh mục mới</h2>
//       <form onSubmit={handleAddCategory}>
//         <div className="grid grid-cols-2 gap-4">
//           {/* Input danh mục */}
//           <div>
            // <label className="block text-sm font-medium mb-1">
            //   Tên danh mục <span className="text-red-500">*</span>
            // </label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="border rounded w-full py-2 px-3 hover:border-blue-500 transition cursor-pointer"
//               placeholder="Nhập nội dung"
//               required
//             />
//           </div>
          
//           {/* Dropdown danh mục lớn */}
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Danh mục lớn
//             </label>
//             <select
//               value={parentCategory}
//               onChange={(e) => setParentCategory(e.target.value)}
//               className="border border-gray-300 rounded w-full py-2.5 px-3 hover:border-blue-500 focus:border-blue-500 transition cursor-pointer"
//             >
//               <option value="">Nhấn để chọn</option>
//               {categories.map((category) => (
//                 <option key={category.id} value={category.id}>
//                   {category.name}
//                 </option>
//               ))}
//             </select>

//           </div>
//         </div>

//         {/* Nút hành động */}
        // <div className="flex justify-end mt-6">
        //   <button
        //     type="button"
        //     onClick={resetForm}
        //     className="text-black font-medium cursor-pointer hover:text-red-500 transition"
        //   >
        //     Hủy bỏ
        //   </button>
        //   <button className="bg-blue-500 text-white flex items-center px-4 py-2 rounded-lg shadow hover:bg-blue-600 ml-4 cursor-pointer">
        //     <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="white">
        //       <path d="M19 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h11l5 5v11c0 1.1-.9 2-2 2zM13 3v5h5l-5-5zM12 12H8v2h4v-2zm0 4H8v2h4v-2z"/>
        //     </svg>
        //     Lưu
        //   </button>
        // </div>
//       </form>
//     </div>
//   </div>
// )}


//           {showEditForm && (
//             <div className="fixed inset-0 flex items-center justify-center z-50">
//               <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
//                 <h2 className="text-xl font-bold mb-4">Sửa danh mục</h2>
//                 <form onSubmit={handleUpdateCategory}>
//                   <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border rounded w-full py-2 px-3 mb-4" />
//                   <div className="flex justify-end space-x-3">
//                     <button type="button" onClick={resetForm} className="bg-gray-300 py-2 px-4 rounded">Hủy</button>
//                     <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Cập nhật</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Categories;
