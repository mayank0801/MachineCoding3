import { useContext } from "react";
import Aside from "../Component/Aside";
import PostCard from "../Component/PostCard";
import { DataContext } from "../context/dataContext";
import { filterData } from "../utlis";
import "../styles.css";

export default function Home() {
  const {
    state: { data, SortBy },
    dispatch
  } = useContext(DataContext);
  const postToDisplay = filterData(data.posts, SortBy);
  console.log(SortBy, postToDisplay, "hii");

  return (
    <div className="containerCenter">
      <aside className="asidecontainer">
        <Aside />
      </aside>

      <main className="mainContent">
        <div>{SortBy}</div>
        {postToDisplay.map((post) => (
          <div key={post.postId} style={{ width: "100%" }}>
            <PostCard postDetail={post} />
          </div>
        ))}
      </main>

      <aside className="asidecontainer">
        <h2>Sort By</h2>
        <select
          // name="SortBy"
          // id="SortBy"
          value={SortBy}
          onChange={(e) => {
            dispatch({ type: "SORT_BY", payload: e.target.value });
          }}
        >
          <option value="Latest Post">Latest Post</option>
          <option value="Most Upvoted">Most Upvoted</option>
        </select>
      </aside>
    </div>
  );
}
