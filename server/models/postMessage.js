import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  createdBy: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

let postMessage = mongoose.model("postMessage", postSchema);
export default postMessage;
