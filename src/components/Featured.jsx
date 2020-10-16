import React, { useState } from "react";
import Project from "./Project";
import db from "../services/firebase";
import { useEffect } from "react";

function Featured( ) {
  const [posts, setPosts] = useState([]);
  // const isSwap = true;

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        const postsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }));
        setPosts(postsData);
      });
  }, []);

  return (
    <div className="featured" >
      <div className="featured___content">
        <h3 className="featured__heading">Featured</h3>
        <h3 className="featured__heading">Projects</h3>
        {posts.map(({ id, post }, index) =>
          index % 2 !== 0 ? (
            <Project
              isSwap
              key={id}
              id={id}
              name={post.name}
              info={post.info}
              image={post.image}
              tags={post.tags}
              github={post.github}
              weblink={post.weblink}
            />
          ) : (
            <Project
              key={id}
              id={id}
              name={post.name}
              info={post.info}
              image={post.image}
              tags={post.tags}
              github={post.github}
              weblink={post.weblink}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Featured;
