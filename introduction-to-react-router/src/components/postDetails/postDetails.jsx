

const PostDetails = () => {
    const post = userLoadData();
    return (
        <div>
          <h3>post details about{id}</h3>
          <p>Title: {title}</p>
          <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;