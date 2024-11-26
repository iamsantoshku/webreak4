const categoryModel = require("../../models/categoryModel");

// Create a new category
const createCategory = async (req, res) => {
  try {
    const { categoryName, description } = req.body;

    // Check if category already exists
    const existingCategory = await categoryModel.findOne({ categoryName });
    if (existingCategory) {
      return res.status(400).json({
        message: "Category already exists",
        success: false,
        error: true,
      });
    }

    const newCategory = new categoryModel({ categoryName, description });
    await newCategory.save();

    res.json({
      message: "Category created successfully",
      data: newCategory,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find();
    res.json({
      message: "Categories fetched successfully",
      data: categories,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};
