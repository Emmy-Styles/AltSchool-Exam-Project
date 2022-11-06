import React from 'react'
import './Home.css'
import { BsEmojiSmile } from "react-icons/bs"
import { FaRegHandshake } from "react-icons/fa"

function Home() {
  return (
    <section className="container-h">
      <div className="content">
        <h3>Welcome to my Git <div className="icon"><BsEmojiSmile /></div></h3>
        <p className='para_cont'>where you will find a list<br/>
        of all my public repositories.<br/>
        Have a great time exploring <FaRegHandshake />.
        </p>
        <a href="/Repos"><button >Find Now</button></a>
      </div>
    </section>
  );
}

export default Home;
