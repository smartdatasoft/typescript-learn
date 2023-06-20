import Post from "./interfaces/Post.js";
import transformPost from "./utils/transformPost.js";
import Transformer from "./interfaces/Transformer.js";

const originalPost: Post = {
    id: 1,
    title: "Hello TypeScript",
    body: "TypeScript is awesome!",
};

const postTransform: Transformer = transformPost(originalPost);


console.log(postTransform);