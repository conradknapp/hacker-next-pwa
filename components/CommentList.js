import Comment from "./Comment";

export default ({ comments }) => (
  <div>
    {comments.map(response => (
      <Comment key={response.id} comment={response} />
    ))}
  </div>
);
