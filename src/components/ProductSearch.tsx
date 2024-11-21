import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import { Product } from "../types/Product";

const API_BASE_URL = "http://localhost:3000/products";

const ProductSearch: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1); // Lưu trạng thái trang hiện tại
  const [hasMore, setHasMore] = useState<boolean>(true); // Kiểm tra xem còn sản phẩm để tải không

  const [searchTerm, setSearchTerm] = useState<string>("");

  // Gọi API để lấy danh sách sản phẩm khi tải trang hoặc thay đổi page
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        let url = `${API_BASE_URL}?page=${page}&limit=10`; // Bắt đầu với 10 sản phẩm
        if (searchTerm) {
          url = `${API_BASE_URL}/search?q=${searchTerm}&page=${page}&limit=10`; // Tìm kiếm với phân trang
        }

        const response = await axios.get(url);
        const fetchedProducts = response.data.products;

        if (fetchedProducts.length === 0) {
          setHasMore(false); // Nếu không có sản phẩm mới, tắt chức năng "Xem thêm"
        }

        setProducts((prev) => [...prev, ...fetchedProducts]);
        setDisplayProducts((prev) => [...prev, ...fetchedProducts]);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, searchTerm]); // Chạy lại mỗi khi thay đổi trang hoặc từ khóa tìm kiếm

  const handleSearch = (term: string) => {
    setSearchTerm(term); // Cập nhật từ khóa tìm kiếm
    setPage(1); // Khi thay đổi tìm kiếm, quay lại trang 1
    setProducts([]); // Xóa sản phẩm cũ
    setDisplayProducts([]); // Xóa danh sách hiển thị
    setHasMore(true); // Đặt lại trạng thái "còn sản phẩm"
  };

  const handleLoadMore = () => {
    if (hasMore) {
      setPage((prev) => prev + 1); // Tăng số trang để lấy thêm sản phẩm
    }
  };

  return (
    <div>
      <h1>Product Search</h1>
      <Search onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      <ul>
        {displayProducts.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
      {hasMore && !loading && (
        <button onClick={handleLoadMore}>Xem thêm</button> // Hiển thị nút "Xem thêm"
      )}
    </div>
  );
};

export default ProductSearch;
