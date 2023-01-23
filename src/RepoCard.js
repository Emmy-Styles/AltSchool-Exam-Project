import React from "react";
import { icons } from "react-icons";
import { Link } from "react-router-dom";
import "./RepoCard.css";
import { MdOpenInFull } from "react-icons/md";

const RepoCard = ({ repos }) => {
  return (
    <>
      <div className="container">
        {repos.map((repo, index) => (
          <Link to={`/repos/${repo.name}`} key={index} className="single-repo">
            <div>
              <div className="repoIcon">
                  <div>
                      <h1>{repo.name} </h1>
                  </div>
                  <div>
                    <MdOpenInFull />
                  </div>
              </div>
              <p>{repo.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default RepoCard;

{
  /* <Link
                  to={`repo/${repo.name}`}
                  key={repo.name}
                  className="repoBox"
                >
                  <div>
                    <div className="repoIcon">
                      <div>
                        <h3>{repo.name}</h3>
                      </div>
                      <div>
                        <RepoLink />
                      </div>
                    </div>
                    <p>{repo.description}</p>
                  </div>
                </Link> */
}
