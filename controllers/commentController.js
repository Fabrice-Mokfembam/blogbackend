import {Comment} from '../models/commentModel.js';
import httpStatus from 'http-status';

const CommentController = {
  createComment: async (req, res) => {
    try {
      const comment = await Comment.create(req.body);
      comment ? res.status(httpStatus.CREATED).json(comment) : res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Error creating comment');
    } catch (error) {
      console.error(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Error creating comment');
    }
  },

  findAllComments: async (req, res) => {
    try {
      const comments = await Comment.find({});
      comments ? res.status(httpStatus.OK).json(comments) : res.status(httpStatus.NOT_FOUND).send('No comments found');
    } catch (error) {
      console.error(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Error fetching comments');
    }
  },

  deleteCommentById: async (req, res) => {
    try {
      const { commentId } = req.params;
      const deletedComment = await Comment.findByIdAndDelete(commentId);

      if (!deletedComment) {
        return res.status(httpStatus.NOT_FOUND).send('Comment not found');
      }

      res.status(httpStatus.OK).json({ message: 'Comment deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Error deleting comment');
    }
  },
};

export { CommentController };
