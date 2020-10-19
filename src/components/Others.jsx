import React, { useState } from "react";
import { useEffect } from "react";
import db from "../services/firebase";
import request from "../services/request";
import GithubProject from "./GithubProject";

function Others() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    db.collection("repos")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        const repoData = snapshot.docs.map((doc) => ({
          id: doc.id,
          repo: doc.data(),
        }));
        setRepos(repoData);
      });
  }, []);

  return (
    <div className="others" id="oProjects">
      <div className="others__content">
        <h3 className="others__heading">Other</h3>
        <h3 className="others__heading">Projects</h3>
        <div className="others__container">
          {repos.map(({id, repo}) => (
            <GithubProject 
            id={id}
            key={id}
            name={repo.name}
            link= {repo.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Others;
