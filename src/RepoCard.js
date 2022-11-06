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
        <Link to={`/Repos/${repo.name}`}><dt>Name : {repo.name} </dt></Link>
          <dd>visibility : {repo.visibility}</dd>
          <dd>Created : {repo.created_at}</dd>
          <dd>Description : {repo.description}</dd>
          <dt>Language : {repo.language}</dt>
        </dl>
        
      </div>
      
         
        
        
        
      ))}
    </div>
    </>
  )
}

export default RepoCard