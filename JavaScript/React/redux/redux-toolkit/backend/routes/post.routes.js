const express = require("express");
const {
  setPosts,
  getPosts,
  editPost,
  deletePost,
  likePost,
  dislikePost,
} = require("../controllers/post.controller");
const router = express.Router();

router.get("/", getPosts);

router.post("/", setPosts);

router.put("/:_id", editPost);

router.delete("/:_id", deletePost);

router.patch("/like-post/:_id", likePost);

router.patch("/dislike-post/:_id", dislikePost);

module.exports = router;
