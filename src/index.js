//Call all functions inside services and log updated value/s
import {
  getAllComments,
  getCommentById,
  getCommentsByPostId,
  updateCommentBody,
  deleteCommentById,
  addComment,
} from "./services/comments";
import {
  getPosts,
  getPostsByUser,
  getPostById,
  addPost,
  updatePostTitle,
  updatePostBody,
  updatePost,
  deletePostBy,
  deletePostsByUserId,
} from "./services/posts";
import {
  updateUser,
  getAllUsers,
  getUserById,
  addUser,
} from "./services/users";

//from comments.js

console.log(getCommentById(4));
console.log(getCommentsByPostId(2));

//for testing updateCommentBody
console.log(getCommentById(1));
updateCommentBody(1, "this is a test comment");
console.log(getCommentById(1));

//for testing deleteCommentById
console.log(getAllComments());
deleteCommentById(5);
console.log(getAllComments());

//for testing addComment
console.log(getAllComments());
addComment({
  postId: 74,
  name: "sample name for testing",
  email: "exampleemail@gmail.com",
  body: "this is a sample comment for testing",
});
console.log(getAllComments());

//from posts.js
console.log(getPosts());
console.log(getPostsByUser(10));
console.log(getPostById(55));

//for testing addPost
console.log(getPosts());
addPost({
  userId: 9,
  title: "this is a sample post title",
  body: "this is a sample post body",
});
console.log(getPosts());

//for testing updatePostTitle
console.log(getPostById(6));
updatePostTitle(6, "this is a new sample title");
console.log(getPostById(6));

//for testing updatePostBody
console.log(getPostById(7));
updatePostBody(7, "this is a new sample body");
console.log(getPostById(7));

//for testing update post
console.log(getPostById(8));
updatePost(8, {
  title: "this is a sample post title",
  body: "this is a sample post body",
});
console.log(getPostById(8));

//for testing deletePostBy
console.log(getPosts());
deletePostBy(4);
console.log(getPosts());

//for testing deletePostsByUserId
console.log(getPosts());
deletePostsByUserId(4);
console.log(getPosts());

//from users.js
console.log(getUserById(5));
console.log(getAllUsers());
updateUser(1, { email: "roger@77.com", website: "hilde-edit.org" });
console.log(getAllUsers());

//for testing addUser
console.log(getAllUsers());
addUser({
  name: "Erick Leano",
  username: "Erick",
  email: "samplee-mail@gmail.com",
  address: {
    street: "Sample Street",
    suite: "Apt. 1234",
    city: "Sampleton",
    zipcode: "12351-4325",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "samplesite.org",
  company: {
    name: "Global77",
    catchPhrase: "SampleCatchPhrase",
    bs: "harness real-time e-markets",
  },
});
console.log(getAllUsers());
