function transformPost(post) {
    return {
        id: post.id.toString(),
        title: post.title,
        content: post.body,
    };
}
export default transformPost;
