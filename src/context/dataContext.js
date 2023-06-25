import { createContext, useReducer } from "react";
import { forumData } from "../Data/data";

export const DataContext = createContext();
export default function DataContextProvider({ children }) {
  const intialState = { data: forumData, SortBy: "Most Upvoted" };
  const reducer = (state, action) => {
    switch (action.type) {
      case "SORT_BY":
        console.log(action.payload, "payload");
        return { ...state, SortBy: action.payload };
      case "Upvote": {
        console.log(action.payload);
        return {
          ...state,
          data: {
            ...state.data,
            posts: state.data.posts.map((post) =>
              post.postId === action.payload
                ? { ...post, upvotes: post.upvotes + 1 }
                : { ...post }
            )
          }
        };
      }
      case "Downvote": {
        console.log(action.payload);
        return {
          ...state,
          data: {
            ...state.data,
            posts: state.data.posts.map((post) =>
              post.postId === action.payload
                ? { ...post, downvotes: post.downvotes + 1 }
                : { ...post }
            )
          }
        };
      }

      case "ADD_TO_BOOKMARK":
        console.log(action.payload, "hello");
        return {
          ...state,
          data: {
            ...state.data,
            posts: state.data.posts.map((post) =>
              post.postId === action.payload
                ? { ...post, isBookmarked: !post.isBookmarked }
                : { ...post }
            )
          }
        };
      case "REMOVE_FROM_BOOKMARK": {
        console.log("Remove");
        return {
          ...state,
          data: {
            ...state.data,
            posts: state.data.posts.map((post) =>
              post.postId === action.payload
                ? { ...post, isBookmarked: false }
                : { ...post }
            )
          }
        };
      }
      default:
        return { ...state };
    }
  };
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
