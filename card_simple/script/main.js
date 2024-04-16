$(document).ready(function () {
    const wrapper = $('#wrapper');
    rocketData.forEach(rocket => {
        const card =
            $(`<div class="card">
        <div class="card-content">
        <div class="card-header">
            <div class="card-number">${rocket.group_letter}${rocket.number}</div>
            <div class="card-title">
                <div class="card-name">${rocket.name}</div>
                <div class="card-group">${rocket.group}</div>
            </div>
    
            <div class="rocket-image">
                <img src="${rocket.image}" alt="Bild von der Rakete">
            </div>

            <div class="goal-icon">Goal</div>
            <div class="rocket-info">${rocket.mission_goal}</div>
    </div>
    <div class="categories">        
        <div class="year">  
            <div class="stat-icon">year built</div>
            <div class="stat-value">${rocket.year_built}</div>
        </div>
        
        <div class="duration">  
            <div class="stat-icon">mission duration</div>
            <div class="stat-value">${rocket.mission_duration} year(s)</div>
        </div>

        <div class="speed"> 
            <div class="stat-icon">max speed</div>
            <div class="stat-value">${rocket.max_speed} km/h</div>
        </div>

        <div class="distance"> 
            <div class="stat-icon">max distance</div>
            <div class="stat-value">${rocket.max_earth_distance} km</div>
        </div>

        <div class="cost"> 
            <div class="stat-icon">development cost</div>
            <div class="stat-value">${rocket.development_cost} mils</div>
        </div>

        <div class="weight"> 
            <div class="stat-icon">weight</div>
            <div class="stat-value">${rocket.weight} kg</div>
        </div>

        </div>
    </div>`);
        wrapper.append(card);
    });
});