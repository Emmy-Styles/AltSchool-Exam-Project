import React from 'react'


const RepoPage = ({ repos }) => {
  console.log(repos);

  return (
    <>
    <div className="container">
            <div class="row">
              <div class="section__title padd__15">
                <h2>My Repositories</h2>
              </div>
            </div>
          </div>
      {repos.map((rep, index) => (
        <div key={index} className='single-repo'>
          <dl>
            <dt>Name : {rep.description}</dt>
            <dd>visibility : {rep.created_at}</dd>
            <dd>{rep.language}</dd>
          </dl>
        </div>
      ))}
    </>
  )
}

export default RepoPage