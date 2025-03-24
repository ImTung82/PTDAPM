import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, message, Tag, Tooltip, Space, Popconfirm } from "antd";
import {
  DeleteOutlined,
  PlusOutlined,
  StarOutlined,
  StarFilled,
  EyeFilled,
  EditFilled,
  DeleteFilled,
} from "@ant-design/icons";
import axios from "axios";
import NavBar from "../layouts/NavBar";
import Toolbar from "../layouts/Toolbar";
import CustomTable from "../layouts/CustomTable";

const API_BASE_URL = "https://67d464bed2c7857431ed88c2.mockapi.io";

function PostList() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState({});
  const [parentCategories, setParentCategories] = useState({});
  const [loading, setLoading] = useState(true);

  // Lấy dữ liệu khi component được render
  useEffect(() => {
    fetchData();
  }, []);

  // Lấy dữ liệu bài viết và danh mục
  const fetchData = async () => {
    setLoading(true);
    try {
      // Lấy danh sách danh mục
      const categoriesResponse = await axios.get(`${API_BASE_URL}/categories`);

      // Xử lý danh mục cha-con
      const catMap = {};
      const parentCatsMap = {};

      categoriesResponse.data.forEach(({ id, name, parentID }) => {
        catMap[id] = name;
        if (parentID) parentCatsMap[id] = parentID;
      });

      setCategories(catMap);
      setParentCategories(parentCatsMap);

      // Lấy danh sách bài viết
      const postsResponse = await axios.get(`${API_BASE_URL}/posts`);
      setPosts(postsResponse.data);
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu:", error);
      message.error("Không thể tải dữ liệu bài viết!");
    } finally {
      setLoading(false);
    }
  };

  // Xóa bài viết
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/posts/${id}`);
      message.success("Xóa bài viết thành công!");
      fetchData(); // Tải lại dữ liệu
    } catch (error) {
      console.error("Lỗi khi xóa bài viết:", error);
      message.error("Không thể xóa bài viết này!");
    }
  };

  // Xóa nhiều bài viết cùng lúc
  const handleBulkDelete = async (selectedIds) => {
    try {
      message.loading({ content: "Đang xóa bài viết...", key: "bulkDelete" });

      // Lặp qua và xóa từng bài viết
      await Promise.all(
        selectedIds.map((id) => axios.delete(`${API_BASE_URL}/posts/${id}`))
      );

      message.success({
        content: `Đã xóa ${selectedIds.length} bài viết thành công!`,
        key: "bulkDelete",
      });

      fetchData(); // Tải lại dữ liệu
    } catch (error) {
      console.error("Lỗi khi xóa nhiều bài viết:", error);
      message.error({
        content: "Không thể xóa một số bài viết. Vui lòng thử lại!",
        key: "bulkDelete",
      });
    }
  };

  // Đánh dấu/bỏ đánh dấu bài viết nổi bật
  const toggleFeatured = async (post) => {
    try {
      await axios.put(`${API_BASE_URL}/posts/${post.id}`, {
        ...post,
        featured: !post.featured,
      });
      message.success(
        `Bài viết đã được ${
          !post.featured ? "đánh dấu" : "bỏ đánh dấu"
        } nổi bật!`
      );
      fetchData(); // Tải lại dữ liệu
    } catch (error) {
      console.error("Lỗi khi cập nhật trạng thái nổi bật:", error);
      message.error("Không thể cập nhật trạng thái bài viết!");
    }
  };

  // Chuyển đến trang chi tiết bài viết
  const viewPostDetail = (id) => {
    navigate(`/admin/bai-viet/chi-tiet/${id}`);
  };

  // Định dạng ngày tháng
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";

    const date = new Date(dateString);
    return date.toLocaleString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Cấu hình cột cho bảng
  const columns = [
    {
      title: "STT",
      key: "index",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Ảnh",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (imageUrl) => (
        <img
          src={imageUrl || "https://via.placeholder.com/80x45?text=No+Image"}
          alt="Thumbnail"
          style={{
            width: "112px",
            height: "63px",
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
      ),
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <div>
          <Tooltip title={text} mouseEnterDelay={0.5}>
            <div
              className="font-medium line-clamp-3"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxHeight: "4.5em", // Khoảng 3 dòng với line-height 1.5
              }}
            >
              {text}
            </div>
          </Tooltip>
          {/* <div className="text-gray-500 text-xs mt-1">
            {record.description?.length > 60 
              ? record.description.substring(0, 60) + '...' 
              : record.description}
          </div> */}
        </div>
      ),
    },
    {
      title: "Danh mục",
      dataIndex: "categoryId",
      key: "categoryId",
      render: (categoryId) => {
        // Kiểm tra xem danh mục có phải là con không
        const isChild = parentCategories[categoryId];

        if (isChild && categories[parentCategories[categoryId]]) {
          // Nếu là danh mục con, hiển thị cả danh mục cha và con
          return (
            <div className="flex items-center flex-wrap gap-1">
              <Tag color="blue">{categories[parentCategories[categoryId]]}</Tag>
              <span className="mx-1">›</span>
              <Tag color="cyan">{categories[categoryId]}</Tag>
            </div>
          );
        }

        // Danh mục không có cha hoặc không xác định
        return (
          <Tag color="blue">{categories[categoryId] || "Không xác định"}</Tag>
        );
      },
    },
    {
      title: "Nổi bật",
      dataIndex: "featured",
      key: "featured",
      width: 100,
      render: (featured, record) => (
        <Button
          type="text"
          icon={
            featured ? (
              <StarFilled style={{ color: "#faad14" }} />
            ) : (
              <StarOutlined />
            )
          }
          onClick={() => toggleFeatured(record)}
          title={featured ? "Bỏ đánh dấu nổi bật" : "Đánh dấu nổi bật"}
        />
      ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 150,
      render: (date) => formatDate(date),
    },
    {
      title: "Cập nhật",
      dataIndex: "updatedAt",
      key: "updatedAt",
      width: 150,
      render: (date, record) => {
        // Nếu ngày cập nhật giống ngày tạo, hiển thị "Chưa chỉnh sửa"
        if (!date || date === record.createdAt) {
          return <span className="text-gray-400">Chưa chỉnh sửa</span>;
        }
        return formatDate(date);
      },
    },
    {
      title: "Hành động",
      align: "center",
      key: "action",
      render: (_, record) => (
        <Space size="middle" className="px-5">
          <Tooltip title="Chi tiết">
            <Link to={`/admin/bai-viet/chi-tiet/${record.id}`}>
              <EyeFilled className="btn-icon !text-blue1 " />
            </Link>
          </Tooltip>

          <Tooltip title="Chỉnh sửa">
            <Link to={`/admin/bai-viet/chinh-sua/${record.id}`}>
              <EditFilled className="btn-icon !text-orange1" />
            </Link>
          </Tooltip>

          <Tooltip title="Xóa bài viết">
            <Popconfirm
              title="Xóa bài viết"
              description="Bạn có chắc chắn muốn xóa bài viết này không?"
              onConfirm={() => handleDelete(record.id)}
              okText="Xóa"
              cancelText="Hủy"
              okButtonProps={{ danger: true }}
            >
              <DeleteFilled className="btn-icon !text-red2" />
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <>
      <NavBar />
      <Toolbar />
      <main className="admin-main space-y-13">
        <div className="flex justify-between items-center h-11">
          <h1 className="text-4xl font-bold text-blue1">Quản lý bài viết</h1>
          <Link to="/admin/bai-viet/them-moi">
            <Button type="primary" icon={<PlusOutlined />} className="!h-10">
              Thêm bài viết mới
            </Button>
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          {/* Bảng dữ liệu */}
          <CustomTable
            columns={columns}
            data={posts}
            loading={loading}
            rowKey="id"
            pagination={{
              pageSize: 10,
              showTotal: (total) => `Tổng số: ${total} bài viết`,
              showSizeChanger: true,
              pageSizeOptions: ["10", "20", "50", "100"],
            }}
            handleBulkDelete={handleBulkDelete}
            handleRefresh={fetchData}
            emptyText="Chưa có bài viết nào"
            hideSearchBar={true} // Ẩn thanh tìm kiếm
          />
        </div>
      </main>
    </>
  );
}

export default PostList;
