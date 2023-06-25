import { useContext } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Aside from "../Component/Aside";
import PostCard from "../Component/PostCard";
import { DataContext } from "../context/dataContext";
import { BiArrowBack } from "react-icons/bi";

export default function SinglePost() {
  const { state } = useContext(DataContext);

  const { id } = useParams();

  const postToDisplay = state.data.posts.find(({ postId }) => {
    return postId === id;
  });
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <aside className="asidecontainer">
        <Aside />
      </aside>

      <main className="mainContent">
        <BiArrowBack onClick={() => navigate("/")} />
        <div>Post</div>
        <PostCard postDetail={postToDisplay} />
        <div>
          {postToDisplay.comments.map((comment) => (
            <div>
              <div style={{ display: "flex" }}>
                <img
                  style={{ width: "30px", height: "30px" }}
                  src={comment?.picUrl}
                  alt="pic"
                />

                <p>{comment.username}</p>
                <p>@{comment?.username}</p>
              </div>
              <p>Replying to @{postToDisplay?.username}</p>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
