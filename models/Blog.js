import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  imageUrl: { type: String },
  categories: [String], // New field for categories
  tags: [String],       // New field for tags
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Blog', blogSchema);
