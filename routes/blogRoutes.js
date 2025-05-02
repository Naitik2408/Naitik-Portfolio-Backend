import express from 'express';
import { getBlogs, getBlog, addBlog, updateBlog, deleteBlog } from '../controllers/blogController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getBlogs);
router.get('/:id', getBlog); // Add this line - route to get a single blog by ID

// Protected routes
router.post('/', protect, addBlog);
router.put('/:id', protect, updateBlog);
router.delete('/:id', protect, deleteBlog);

export default router;