import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const RepoPage = () => {
  
  const {Repopage} = useParams();
  const Repos = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState("rgb(34, 104, 184)");
  
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

    const displayOneRepo = repos.find(singlerepo => Repopage == singlerepo.name)
    console.log(repos)

  return (
      <h1>{Repopage}</h1>
  )
}}
export default RepoPage