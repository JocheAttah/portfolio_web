import React, { useState } from "react";
import Project from "./Project";
import { db } from "../services/firebase";
import { useEffect } from "react";

function Featured() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db
    .collection("posts")
    .orderBy("timestamp", desc)
    .onSnapshot((snapshot) => {
      const postsData = snapshot.docs.map((doc)=>({
        id:doc.id,
        post:doc.data()
      }))
    })
  }, []);
  return (
    <div className="featured" id="fProjects">
      <div className="featured___content">
        <h3 className="featured__heading">Featured</h3>
        <h3 className="featured__heading">Projects</h3>
        <Project />
      </div>
    </div>
  );
}

export default Featured;
