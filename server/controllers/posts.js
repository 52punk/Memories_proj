import postMessage from "../models/postMessage.js";

// As postMessage.find() will take time so we'll make it await and also make this function async

export const createPost = async (req, res) => {
  const { title, message, createdBy, selectedFile, tags } = req.body;
  const postSave = new postMessage({
    title,
    message,
    createdBy,
    selectedFile,
    tags,
  });

  try {
    await postSave.save();
    res.status(201).json(postSave);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const postData = await postMessage.find();
    res.status(200).json(postData);
  } catch (err) {
    res.status(404).json({ message: error.message });
  }
};
