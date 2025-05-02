import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  technologies: [{ type: String }],
  demoLink: { type: String },
  codeLink: { type: String },
});

export default mongoose.model('Project', projectSchema);