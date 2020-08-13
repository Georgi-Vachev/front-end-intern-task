import './styles/Currency.css';
import React from 'react';


function Currency(props) {
    let baseCurr = props.baseCurr,
        rateCurr = props.rateCurr;
        
    return ( 
            Object.keys(rateCurr).map(curr => 
                <div className="Currency">
                    <img className="euroImg" src={props.images['EURO']}/>
                    <img className="rateImg" src={props.images[curr]}/>
                    <div className="convert">{baseCurr}{curr}<br/><small>{props.extended[curr]}</small></div>
                    <div className="rateCurr" style={props.ratesUp == 1 ? {backgroundColor: "forestgreen"} : {backgroundColor: "crimson"}}>{Number(rateCurr[curr].toFixed(4))}</div>
                </div>
            )
    )
}

export default Currency;