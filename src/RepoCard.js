import React from 'react'
import { Link } from 'react-router-dom'
import './RepoCard.css'

const RepoCard = ({ repos }) => {
  
  return (
    <>
    <div className="container">
            <div class="row">
              <div class="section__title">
                <h2>My Repositories</h2>
              </div>
            </div>
          
      {repos.map((repo, index) => (
        <div key={index} className='single-repo'>
        <dl>
          <dt>Name : {repo.name} </dt>
          <dd>visibility : {repo.visibility}</dd>
          <dd>Created : {repo.created_at}</dd>
          <dd>Description : {repo.description}</dd>
          <dt>Language : {repo.language}</dt>
        </dl>
        <Link to={`/Repos/${repo.name}`}>View</Link>
      </div>
      
         
        
        
        
      ))}
    </div>
    </>
  )
}

export default RepoCard