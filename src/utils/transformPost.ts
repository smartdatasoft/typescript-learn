import Transformer from "../interfaces/Transformer";
import Post from "../interfaces/Post";

function transformPost(post: Post): Transformer {
    return {
        id: post.id.toString(),
        title: post.title,
        content: post.body,
    };
}

export default transformPost;
