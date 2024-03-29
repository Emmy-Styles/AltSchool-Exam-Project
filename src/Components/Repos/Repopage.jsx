import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./Repopage.css";
import BeatLoader from "react-spinners/BeatLoader";
import { GiReturnArrow as Back } from "react-icons/gi";
import { BsGithub as Github } from "react-icons/bs";
import { AiOutlineFork as Fork } from "react-icons/ai";
import { GoIssueReopened as Issues } from "react-icons/go";
import { AiFillEye as Eye } from "react-icons/ai";
import { FaFolder as Folder } from "react-icons/fa";
import { MdNetworkWifi as Network } from "react-icons/md";
import { HiUserGroup as Subscribers } from "react-icons/hi";

const RepoPage = ({ user }) => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL = `https://api.github.com/users/${user}/repos`;

  const fetchRepo = () => {
    setLoading(true);
    axios
      .get(URL)
      .then((response) => {
        setRepositories(response.data);
      })
      .catch((error) => {
        if (error) {
          throw new Error("error!!");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRepo();
  }, []);

  const { name } = useParams();

  if (loading) {
    return (
      <BeatLoader
        color={"lightseagreen"}
        loading={loading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
        className="loader"
      />
    );
  }

  return (
    <div className="container__repo">
      <div>
        {repositories
          .filter((repo) => repo.name === name)
          .map((repo, index) => (
            <div key={index} className="repo__container">
              <Link to="/repos">
                <button className="btn__primary">
                  <Back className="back__icon" />
                  &nbsp;Back to Repos
                </button>
              </Link>
              <div className="proj_Name">
                <div className="repoDetails">
                  <h2>{repo.name}</h2>
                  <p>{repo.description}</p>
                  <p> Visibility: {repo.visibility}</p>
                  <p>Created On: {repo.created_at}</p>
                </div>
                <a target="_blank" rel="noreferrer" href={repo.html_url}>
                  <button className="view">
                    <p>
                      View on <Github className="git__icon" />
                    </p>
                  </button>
                </a>
              </div>
              <h2 className="stats">Repository Statistics</h2>
              <div className="stats__container">
                <div className="statsBox">
                  <Fork />
                  <p>
                    {repo.forks} <span>Forks</span>
                  </p>
                </div>
                <div className="statsBox">
                  <Issues />
                  <p>
                    {repo.open_issues} <span>Issues</span>{" "}
                  </p>
                </div>
                <div className="statsBox">
                  <Eye />
                  <p>
                    {repo.watchers} <span>View</span>
                  </p>
                </div>
                <div className="statsBox">
                  <Folder />
                  <p>{repo.size} mb </p>
                </div>
                <div className="statsBox">
                  <Network />
                  <p>{repo.network_count} Count </p>
                </div>
                <div className="statsBox">
                  <Subscribers />
                  <p>
                    {repo.subscribers_count} <span>Subs</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default RepoPage;
