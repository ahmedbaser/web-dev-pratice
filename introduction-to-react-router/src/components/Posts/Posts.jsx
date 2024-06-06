import {userLoaderData} from "react-router-dom"
import Post from "../Post/Post";

const Posts = () => {
    return (
        <div>
            <h2>Posts: {Posts.length}</h2>
            <div className="users">
                {
                    Posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;