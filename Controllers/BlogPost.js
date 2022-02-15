const ServiceBlosPost = require('../Services/BlogPost');

const createPost = async (req, res) => {
  try {
    const { id } = req.user;
    const post = await ServiceBlosPost.createPost(req.body, id);
    if (post.message) {
      return res.status(post.code).json(post.message);
    }
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await ServiceBlosPost.getAllPosts();
    console.log('controller getall posts', posts);
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
};
