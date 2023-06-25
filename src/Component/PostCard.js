import { useContext } from "react";
import { BiDownvote } from "react-icons/bi";
import { BiUpvote } from "react-icons/bi";
import { DataContext } from "../context/dataContext";
import PostFeature from "../Features/PostFeature";

export default function PostCard({ postDetail }) {
  const { dispatch } = useContext(DataContext);
  const {
    postId,
    username,
    name,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    createdAt
  } = postDetail;

  const postinteraction = upvotes - downvotes;
  // console.log(postDetail);
  return (
    <div className="postCard" style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <BiUpvote
          style={{ color: postinteraction > 0 ? "green" : "" }}
          onClick={() => dispatch({ type: "Upvote", payload: postId })}
        />
        {postinteraction}
        <BiDownvote
          style={{ color: postinteraction < 0 ? "red" : "" }}
          onClick={() => dispatch({ type: "Downvote", payload: postId })}
        />
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <img
            style={{ width: "30px", height: "30px" }}
            src={picUrl}
            alt="pic"
          />
          <p>Posted By</p>
          <p>@{username}</p>
        </div>
        <h2>{post}</h2>
        <div>
          {tags.map((tag) => (
            <span
              style={{
                marginRight: "0.5rem",
                color: "green",
                backgroundColor: "#F6F6F6"
              }}
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <p>{postDescription}</p>
        <div
          style={{
            marginTop: "1rem",
            borderTop: "1px solid black",
            paddingTop: "1rem"
          }}
        >
          <PostFeature postDetail={postDetail} />
        </div>
      </div>
    </div>
  );
}
