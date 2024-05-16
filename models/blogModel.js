import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  blogId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  userId: {    
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  text_content: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['engineering', 'science', 'general', 'technology']
  },
  likes: {
    type: Number,
    default: 0
    },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
  }],
}, {
  timestamps: true,
});

const Blog = mongoose.model('Blog', blogSchema);
export { Blog };