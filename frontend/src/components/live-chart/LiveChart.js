import React from "react";

const LiveChart = () => {
  return (
    <div className="dg__live__chart chart-space bg__color--2 section-padding--xlg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="live__cart__wrapper">
              <div className="live__cart__header">
                <h2>Live Chart for our Currency</h2>
              </div>
              <div className="chart__img mt--60">
                <img
                  src={process.env.PUBLIC_URL + "/images/about/cart2.png"}
                  alt="chart images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChart;
