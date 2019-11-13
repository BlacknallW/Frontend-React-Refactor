import React from "react";

class InfoBox extends React.Component {
    render(){
        return(<>
            <div class="categories">
            <ul class="list">
                <li class="home" id="city">Home</li>
                <li class="attractions"><a id ="attractions"  target="_blank" rel="noreferrer noopener">Attractions</a></li>
                <li class="adventures"><a id ="link"  target="_blank" rel="noreferrer noopener">Adventures</a></li>
                <li class="shop"><a id ="shop"  target="_blank" rel="noreferrer noopener">Shopping</a></li>
                <li class="restaurant"><a id ="restaurant"  target="_blank" rel="noreferrer noopener">Restaurant</a></li>
                <li class="stay"><a id ="stay" target="_blank" rel="noreferrer noopener">Accomodation</a></li>
            </ul>
        </div>
        </>)
    }
}

export default InfoBox;