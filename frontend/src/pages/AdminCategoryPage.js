import React, { useState, useEffect } from "react";
import axios from "axios";
import SummaryApi from "../common";

const AdminCategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");

  // Fetch categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get(SummaryApi.allcategory.url);
      setCategories(response.data.data || []);
    } catch (err) {
      console.error("Error fetching categories:", err.response?.data?.message);
    }
  };

  // Create a new category
  const createCategory = async () => {
    try {
      const response = await axios.post(SummaryApi.addcategory.url, {
        categoryName,
        description,
      });
      alert(response.data.message);
      fetchCategories(); // Refresh categories
    } catch (err) {
      alert(err.response?.data?.message || "Failed to create category");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="p-4">
      <h2>Category Management</h2>

      {/* Add Category Form */}
      <div className="mt-4">
        <h3>Add New Category</h3>
        <div>
          <input
            type="text"
            placeholder="Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="border p-2"
          />
        </div>
        <div>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 mt-2"
          ></textarea>
        </div>
        <button onClick={createCategory} className="bg-blue-500 text-white px-4 py-2 mt-2">
          Add Category
        </button>
      </div>

      {/* Display Categories */}
      <div className="mt-6">
        <h3>All Categories</h3>
        {categories.map((category) => (
          <div key={category._id} className="border p-2 mt-2">
            <strong>{category.categoryName}</strong>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCategoryPage;
