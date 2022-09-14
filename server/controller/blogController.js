import asyncHandler from "express-async-handler";
import Blog from "../models/blogModel.js";

// @desc    Get Blog
// @route   GET /api/blog
// @access  Private
const getBlog = asyncHandler(async (req, res) => {
  //get blog of login user
  // const blogs = await Blog.find({ user: req.user.id });

  //get all users blog
  const blogs = await Blog.find();
  res.status(200).json(blogs);

  // postman request
  // res.status(200).json({ message: "Get blog" });
});

// @desc    Set blog
// @route   SET /api/blog
// @access  Private
const setBlog = asyncHandler(async (req, res) => {
  if (!req.body.title && !req.body.description) {
    // error handler
    res.status(400);
    throw new Error("Please add descripton");
  }

  const blog = await Blog.create({
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    user: req.user.id,
    title: req.body.title,
    description: req.body.description,
  });

  res.status(200).json(blog);

  // postman request
  // res.status(200).json({ message: "Set blog" });
});

// @desc    Delete blog
// @route   DEL/api/blog
// @access  Private
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(400);
    throw new Error("Blog not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the blog user
  if (blog.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await blog.remove();

  res.status(200).json({ id: req.params.id });

  // postman request
  // res.status(200).json({ message: `Delete blog blog ${req.params.id}` });
});

// @desc    Update blog
// @route   PUT /api/blog
// @access  Private
const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(400);
    throw new Error("Blog not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the blog user
  if (blog.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedBlog);

  // postman request
  // res.status(200).json({ message: `Update blog blog ${req.params.id}` });
});

export { getBlog, setBlog, deleteBlog, updateBlog };
