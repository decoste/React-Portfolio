import React from 'react';
import './style.css';
import Edu from '../../images/gradu.png'

function Education() {
    return (
        <>
            <div class="mid">
                <div class="first">
                    <i class="cert2">
                        <img src={Edu} alt="Avatar" />
                    </i>
                </div>
                <div class="text">
                    <h3>Full-Stack Web Developement Boot Camp</h3>
                    <h4>University of New Hampshire</h4>
                    <h5>Durham, NH</h5>
                    <h6>2020-2021</h6>
                </div>
            </div>
            <hr />
            <div class="mid2">
                <div class="sec">
                    <i class="cert2">
                        <img src={Edu} alt="Avatar" />
                    </i>
                </div>
                <div class="text2">
                    <h3>Bachelor's Degree in Software Engineering</h3>
                    <h4>Al-Balqa' Applied University</h4>
                    <h5>As-Salt, Jordan</h5>
                    <h6>2005-2010</h6>
                </div>
            </div>
        </>
    )
}
export default Education;
