import postMessage from "../models/postMessage.js";

// As postMessage.find() will take time so we'll make it await and also make this function async

export const createPost = async (req, res) => {
  const { title, message, creator } = req.body;
  const postSave = new postMessage({ title, message, creator });

  try {
    await postSave.save();
    res.send("done");
    res.status(201).json(postSave);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const getPosts = async (req, res) => {
  try {
    const postData = await postMessage.find();
    res.status(200).json(postData);
  } catch (err) {
    res.status(404).json({ message: error });
  }
};
