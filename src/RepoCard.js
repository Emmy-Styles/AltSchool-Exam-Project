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
          
      {repos.map((rep, index) => (
        <div key={index} className='single-repo'>
        <dl>
          <dt>Name : {rep.name} </dt>
          <dd>visibility : {rep.visibility}</dd>
          <dd>Created : {rep.created_at}</dd>
          <dd>Description : {rep.description}</dd>
          <dt>Language : {rep.language}</dt>
        </dl>
        {/* <Link to={`/Repos/Name:${rep.name} Description:${rep.description} Created:${rep.created_at}`}>View</Link> */}
      </div>
      
         
        
        
        
      ))}
    </div>
    </>
  )
}

export default RepoCard