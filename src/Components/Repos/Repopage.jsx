import React from "react";
import { useParams } from "react-router-dom";

const RepoPage = ({ repos }) => {
  const { name } = useParams();
  const repo = repos.find((repo) => repo.name === name)
  const { description, created_at, language } = repo
  return (
    <section className="single_card">
      <div className="container">
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{created_at}</p>
            <p>{language}</p>
      </div>
    </section>
  );
};
export default RepoPage;
