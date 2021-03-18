import React from 'react';
import './style.css';
import Task from '../../images/task.gif';
import Weather from '../../images/weather.gif';
import Team from '../../images/team.gif';
import timeCapsule from '../../images/timeCapsule.gif';
import passwordGenerator from '../../images/passwordGenerator.gif';
import note from '../../images/note.gif';
import jwaj from '../../images/JWAJ.gif';
import employee from '../../images/employee-dir.gif';
import fitness from '../../images/fitness.gif';
import budget from '../../images/budget.gif';
function Portfolio() {
    return (
        <>
<div class="container1">
<div class="capsule">
<img src={timeCapsule} class="image"/>
<div class="overlay">
<a href="https://github.com/kcushing1/Time-Capsule" target="_blank">Github Repo</a>
<a href="https://kcushing1.github.io/Time-Capsule/" target="_blank">Deployed Site</a>
</div>
</div>
<div class="capsule">
<img src={passwordGenerator} class="image"/>
<div class="overlay">
<a href="https://github.com/decoste/HW3-password-generator" target="_blank">Github Repo</a>
<a href="https://decoste.github.io/HW3-password-generator/" target="_blank">Deployed Site</a>
</div>
</div>
</div>

<div class="container1">
<div class="capsule">
<img src={Weather} class="image"/>
<div class="overlay">
    <a href="https://github.com/decoste/HW7-Weather-Dashboard" target="_blank">Github Repo</a>
    <a href="https://decoste.github.io/HW7-Weather-Dashboard/" target="_blank">Deployed Site</a>
</div>
</div>

</div>

<div class="container1">
<div class="capsule">
<img src={Team} class="image"/>
<div class="overlay">
    <a href="https://github.com/decoste/Team-Profile-Generator" target="_blank">Github Repo</a>
    <a href="https://decoste.github.io/Team-Profile-Generator/Develop/output/team.html" target="_blank">Deployed Site</a>
</div>
</div>
<div class="capsule">
<img src={Task} class="image"/>
<div class="overlay">
    <a href="https://github.com/decoste/WorkDay-Scheduler" target="_blank">Github Repo</a>
    <a href="https://decoste.github.io/WorkDay-Scheduler/" target="_blank">Deployed Site</a>
</div>
</div>
</div>
<div class="capsule">
<img src={note} class="image"/>
<div class="overlay">
<a href="https://github.com/decoste/Note-Taker" target="_blank">Github Repo</a>
<a href="https://ala-note.herokuapp.com/" target="_blank">Deployed Site</a>
</div>
</div>

<div class="capsule">
<img src={jwaj} class="image"/>
<div class="overlay">
<a href="https://github.com/decoste/project2" target="_blank">Github Repo</a>
<a href="https://jwajbank.herokuapp.com/" target="_blank">Deployed Site</a>
</div>
</div>

<div class="capsule">
<img src={employee} class="image"/>
<div class="overlay">
<a href="https://github.com/decoste/Employee-Directory-React" target="_blank">Github Repo</a>
<a href="https://ala-employee-directory.herokuapp.com/" target="_blank">Deployed Site</a>
</div>
</div>

<div class="capsule">
<img src={fitness} class="image"/>
<div class="overlay">
<a href="https://github.com/decoste/Workout-Tracker" target="_blank">Github Repo</a>
<a href="https://ala-fitness-tracker.herokuapp.com/" target="_blank">Deployed Site</a>
</div>
</div>

<div class="capsule">
<img src={budget} class="image"/>
<div class="overlay">
<a href="https://github.com/decoste/Budget-Trackers" target="_blank">Github Repo</a>
<a href="https://budget-trackers-offline.herokuapp.com/" target="_blank">Deployed Site</a>
</div>
</div>
        </>
    )
}
export default Portfolio;
