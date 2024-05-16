import express from 'express';
import { BlogController } from '../controllers/blogController.js';

const blogRouter = express.Router();

// Create a new blog
blogRouter.post('/create', BlogController.createBlog);

// Find all blogs
blogRouter.get('/findAll', BlogController.findAllBlogs);

// Update a blog by ID
blogRouter.put('/:blogId', BlogController.updateBlogById);

// Delete a blog by ID
blogRouter.delete('/:blogId', BlogController.deleteBlogById);

// Find all blogs by category 
blogRouter.get('/category', BlogController.findAllBlogsByCategory); 

export { blogRouter };
