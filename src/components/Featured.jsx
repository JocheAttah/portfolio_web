import React, { useState } from "react";
import Project from "./Project";
import  db  from "../services/firebase";
import { useEffect } from "react";

function Featured() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db
    .collection("posts")
    .orderBy("timestamp", "desc")
    .onSnapshot((snapshot) => {
      const postsData = snapshot.docs.map((doc)=>({
        id:doc.id,
        post:doc.data()
      }));
      setPosts(postsData);
    });
  }, []);


  return (
    <div className="featured" id="fProjects">
      <div className="featured___content">
        <h3 className="featured__heading">Featured</h3>
        <h3 className="featured__heading">Projects</h3>
        {posts.map(({id, post})=>(
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
        ))}
      </div>
    </div>
  );
}

export default Featured;
