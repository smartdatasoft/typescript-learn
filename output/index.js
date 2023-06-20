import transformPost from "./utils/transformPost.js";
const originalPost = {
    id: 1,
    title: "Hello TypeScript",
    body: "TypeScript is awesome!",
};
const postTransform = transformPost(originalPost);
console.log(postTransform);
