export const filterData = (posts, SortBy) => {
  console.log(posts);
  if (SortBy === "Most Upvoted") {
    return [...posts].sort(
      (a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
    );
  } else {
    return [...posts].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }
};
