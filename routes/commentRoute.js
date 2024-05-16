import express from 'express';
import { CommentController } from '../controllers/commentController.js';

const commentRouter = express.Router();

// Create a new comment
commentRouter.post('/create', CommentController.createComment);

// Find all comments
commentRouter.get('/findAll', CommentController.findAllComments);

// Delete a comment by ID
commentRouter.delete('/:commentId', CommentController.deleteCommentById);

export { commentRouter };
