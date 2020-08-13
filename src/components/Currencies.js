import './styles/Currencies.css';
import React from 'react';
import Currency from './Currency'
import dataInf from '../data/currencies.json';
import usdImg from '../images/usd.png';
import euroImg from '../images/euro.png';
import audImg from '../images/aud.png';
import cadImg from '../images/cad.png';
import bgnImg from '../images/bgn.png';

const images = {
    "EURO": euroImg,
    "USD" : usdImg,
    "AUD" : audImg,
    "CAD" : cadImg,
    "BGN" : bgnImg
}
const extended = {
    "USD" : "EURO / U.S. DOLLAR",
    "AUD" : "EURO / AUSTRALIAN DOLLAR",
    "CAD" : "EURO / CANADIAN DOLLAR",
    "BGN" : "EURO / BULGARIAN LEV"
};

const baseCurr = dataInf['base'];

class Currencies extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            secPassed: 0,
            ratesUp: 1,
            rateCurr: dataInf['rates'],
        }
    }

    componentDidMount() {
        this.ratesUpInterval = setInterval(() => this.setState({
            ratesUp: -this.state.ratesUp,
        }), 60000);

        this.rateCurrInterval = setInterval(() => this.setState(prevState => {
            let rateCurr = Object.assign({}, prevState.rateCurr);
            rateCurr['USD'] = Number(this.state.rateCurr["USD"].toFixed(4)) + 0.0001 * this.state.ratesUp;
            rateCurr['AUD'] = Number(this.state.rateCurr["AUD"].toFixed(4)) + 0.0001 * this.state.ratesUp;
            rateCurr['CAD'] = Number(this.state.rateCurr["CAD"].toFixed(4)) + 0.0001 * this.state.ratesUp;
            rateCurr['BGN'] = Number(this.state.rateCurr["BGN"].toFixed(4)) + 0.0001 * this.state.ratesUp;
            return {rateCurr}
        }), 5000);

        this.secPassedInterval = setInterval(() => this.setState({
            secPassed: this.state.secPassed + 1,
        }), 1000);
      }

    render() {
            if(this.state.secPassed == 300){
                clearInterval(this.ratesUpInterval);
                clearInterval(this.rateCurrInterval);
                clearInterval(this.secPassedInterval);
            }
            return(
                <div className = "Currencies">
                    <Currency baseCurr={baseCurr} 
                              rateCurr={this.state.rateCurr}
                              images={images}
                              extended={extended}
                              ratesUp={this.state.ratesUp}/>
                </div>
            )
    }
}

export default Currencies;