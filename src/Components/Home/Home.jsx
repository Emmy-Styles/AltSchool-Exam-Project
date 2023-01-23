import React, {useState} from 'react'
import './Home.css'
import { BsEmojiSmile } from "react-icons/bs"
import { FaRegHandshake } from "react-icons/fa"

function Home() {

  const [error, setError] = useState(false);
if (error) {throw Error("Something went wrong");}


  return (
    <section className="container-h">
      <div className="content">
        <div className="modal-box">
        <h3>Welcome to my Git <div className="icon"><BsEmojiSmile /></div></h3>
        <p className='para_cont'>Click on this button to<br/>
        test my error boundary.<br/>
        Have a great time exploring <FaRegHandshake />.
        </p>
        <button className='pages_btns' onClick={() => setError(true)}>Test</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
