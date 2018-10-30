import Comment from "./Comment";

export default ({ comments }) => (
  <React.Fragment>
    {comments.map(response => (
      <Comment key={response.id} comment={response} />
    ))}
  </React.Fragment>
);
