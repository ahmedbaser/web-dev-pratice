const Post = ({post}) => {
    const {id, title} = post;
    const postStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
     }
    return (
      <div style={postStyle}>
        <h4>Post of Id: {id}</h4>
        <p>{title}</p>
        <link to={`/post/${id}`}>Post Detail</link>
       <link to={`/post/${id}`}><button>Show Details</button></link>
      </div>
    );
};

export default Post;