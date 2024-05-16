import {Blog} from '../models/blogModel.js';
import httpStatus from 'http-status';

const BlogController = {
  createBlog: async (req, res) => {
    try {
      const blog = await Blog.create(req.body);
      blog ? res.status(httpStatus.CREATED).json(blog) : res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Error creating blog');
    } catch (error) {
      console.error(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Error creating blog');
    }
  },

  findAllBlogs: async (req, res) => {
    try {
      const blogs = await Blog.find({});
      blogs ? res.status(httpStatus.OK).json(blogs) : res.status(httpStatus.NOT_FOUND).send('No blogs found');
    } catch (error) {
      console.error(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Error fetching blogs');
    }
  },

  updateBlogById: async (req, res) => {
    try {
      const { blogId } = req.params;
      const updateData = req.body;

      const updatedBlog = await Blog.findByIdAndUpdate(blogId, updateData, { new: true });

      if (!updatedBlog) {
        return res.status(httpStatus.NOT_FOUND).send('Blog not found');
      }

      res.status(httpStatus.OK).json(updatedBlog);
    } catch (error) {
      console.error(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Error updating blog');
    }
  },

  deleteBlogById: async (req, res) => {
    try {
      const { blogId } = req.params;
      const deletedBlog = await Blog.findByIdAndDelete(blogId);

      if (!deletedBlog) {
        return res.status(httpStatus.NOT_FOUND).send('Blog not found');
      }

      res.status(httpStatus.OK).json({ message: 'Blog deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Error deleting blog');
    }
  },

  findAllBlogsByCategory: async (req, res) => {
    try {
      const { category } = req.query; 

      const query = category ? { category } : {}; 
      const blogs = await Blog.find(query);

      blogs ? res.status(httpStatus.OK).json(blogs) : res.status(httpStatus.NOT_FOUND).send('No blogs found for this category');
    } catch (error) {
      console.error(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Error fetching blogs');
    }
  },
};

export { BlogController };
