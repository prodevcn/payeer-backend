import React, {Component} from "react";
//import {Area} from 'react-simple-charts';
// import CoinChart from '../CoinChart/CoinChart';
// import ChartistGraph from '../ChartistGraph/ChartistGraph';
import CoinRate from '../CoinRate/CoinRate';


class LiveChartTwo extends Component {  
  render() {
    return (
      <div className="dg__live__chart bg__color--4 pb--140 pt--130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="live__cart__wrapper">
                <div className="live__cart__header">
                  <h2>Real Time Progress</h2>
                </div>
                <div className="chart__img mt--60">
                  <CoinRate />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default LiveChartTwo;
