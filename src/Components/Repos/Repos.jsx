import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Repos.css";
import RepoCard from "../../RepoCard";
import Pagination from "../../Pagination";
import BeatLoader from "react-spinners/BeatLoader";

const Repos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentpage] = useState(1);
  const [pagePerShow, setPagePerShow] = useState(2);
  let [color, setColor] = useState("rgb(34, 104, 184)");

  const URL = "https://api.github.com/users/Emmy-Styles/repos";

  const fetchRepo = () => {
    setLoading(true);
    axios
      .get(URL)
      .then((response) => {
        setRepos(response.data);
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

  const lastPostIndex = currentPage * pagePerShow;

  const firstPostIndex = lastPostIndex - pagePerShow;

  const currentPosts = repos.slice(firstPostIndex, lastPostIndex);

  return (
    <section class="service section">
      <div className="user__section">
        {loading ? (
          <BeatLoader
            color={color}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <div>
            <RepoCard repos={currentPosts} />
          <div className="pagination">
        <Pagination
          totalPosts={repos.length}
          pagePerShow={pagePerShow}
          setCurrentPage={setCurrentpage}
          currentPage={currentPage}
          setPagePerShow={setPagePerShow}
          // repos={repos}
        />
      </div>
          </div>
          
        )}
      </div>
      
    </section>
  );
};

export default Repos;
