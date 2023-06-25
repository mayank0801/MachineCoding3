import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Page/Home";
import SinglePost from "./Page/SinglePost";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />

      <div style={{ width: "100%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<SinglePost />} />
        </Routes>
      </div>
    </div>
  );
}
