import Blog from "../models/Blog.js";

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    console.log(error); 
    res.status(500).json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { title, content, image } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        message: "Title and content are required"
      });
    }

    const newBlog = new Blog({
      title,
      content,
      image
    });

    await newBlog.save();
    res.status(201).json(newBlog);

  } catch (error) {
    res.status(500).json({ message: "Error creating blog" });
  }
};