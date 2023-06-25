import { FaRegCommentAlt } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/dataContext";
import { BsFillBookmarkFill } from "react-icons/bs";

export default function PostFeature({ postDetail }) {
  const { state, dispatch } = useContext(DataContext);
  const navigate = useNavigate();
  console.log(postDetail.isBookmarked, "boomarked");
  useEffect(() => {
    console.log("hii");
  }, [state]);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <FaRegCommentAlt
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/post/${postDetail.postId}`)}
      />
      <AiOutlineShareAlt />
      {postDetail.isBookmarked ? (
        <BsFillBookmarkFill
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_BOOKMARK",
              payload: postDetail.postId
            })
          }
        />
      ) : (
        <BsBookmark
          onClick={() =>
            dispatch({ type: "ADD_TO_BOOKMARK", payload: postDetail.postId })
          }
        />
      )}
    </div>
  );
}
