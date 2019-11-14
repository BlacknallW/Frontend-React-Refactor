import React from "react"
import CurrencyBox from "./Currency/Currency"
import InfoBox from "./InfoBox/InfoBox"
import WeatherBox from "./Weather/Weather"
import "./Navigation.css"

const Navigation = () => {
    return (<>
        <div className="info-box">
            <WeatherBox />
            <InfoBox />
            <CurrencyBox />
        </div>
        </>
    )
}

export default Navigation;