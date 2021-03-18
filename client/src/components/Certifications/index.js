import React from 'react';
import './style.css';
import Cert from '../../images/certifications-icon.png'
    
    function Certifications() {
        return (
            <div class="midd">
    <div class="one">
        <i class="cert">
            <img src={Cert} alt="Avatar" class="image2"/>
        </i>
        <p>Splunk Core Certified User</p>
    </div>
    <div class="two">
        <i class="cert">
            <img src={Cert} alt="Avatar" class="image2"/>
        </i>
        <p>Splunk Core Certified Power</p>
    </div>
    <div class="three">
        <i class="cert">
            <img src={Cert} alt="Avatar" class="image2"/>
        </i>
        <p>Medical Terminology for Interpreters</p>
    </div>
</div>

        )
    }
    export default Certifications;
    