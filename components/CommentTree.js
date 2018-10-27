import Comment from "./Comment";

const CommentTree = ({ comments }) => (
  <div>
    {comments.map(response => (
      <Comment key={response.id} comment={response} />
    ))}
  </div>
);

export default CommentTree;
