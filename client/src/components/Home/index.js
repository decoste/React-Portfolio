import React from 'react';
import './style.css';

import HomePic from '../../images/me.jpg'
function Home() {
    return (
       <>
       <body>
   <div className="cont">
        <div className="middle">
            <img src={HomePic} alt="Creative picture taken by Ala DeCoste"></img>
        </div>
        <div>
            <h1 className="me" id="border">About me</h1>

            <p>My name is Ala DeCoste and I graduated with a degree in Software engineering in my home country of
                Jordan.
            <p>I came to the U.S.A five years ago and currently work as a programmer analyst.</p>
            <p>In my spare time, I also work as an Arabic interpreter.</p>
            <p>Recently I began coding "boot camp" in hopes of becoming a full-stack developer.</p>
            <p>I enjoy the simple things in life such as going for walks,</p>
            <p>relaxing on the beach, working out at the gym,</p>
            <p>photography, and quiet evenings at home with my loving husband.</p>

            </p>
        </div>
    </div>
    </body>

       </>
    )
    }

    export default Home;