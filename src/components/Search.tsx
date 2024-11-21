import React from "react";

interface SearchProps {
  onSearch: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value); // Gửi từ khóa tìm kiếm về cha
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={handleInputChange} // Gửi từ khóa khi người dùng gõ
    />
  );
};

export default Search;
