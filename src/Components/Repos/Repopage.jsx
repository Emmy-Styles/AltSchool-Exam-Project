import React from "react";
import { useParams } from "react-router-dom";

const RepoPage = ({ repos }) => {
  const { name } = useParams();

  return (
    <div className="single_card">
      {repos.filter((repo) => repo.name === name).map((repo, index) => (
          <div key={index} className="card">
            <h1>{repo.name}</h1>
            <p>{repo.description}</p>
            <p>{repo.created_at}</p>
            <p>{repo.language}</p>
          </div>
        ))}
    </div>
  );
};
export default RepoPage;
