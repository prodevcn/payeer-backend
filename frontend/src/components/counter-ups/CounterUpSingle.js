import PropTypes from "prop-types";
import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const CounterUpSingle = ({ data }) => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };
  return (
    <div className="counterup__list">
      <h6>{data.title}</h6>
      <p className="counter-active">
        <VisibilitySensor
          onChange={onVisibilityChange}
          offset={{ top: 10 }}
          delayedCall
        >
          <CountUp end={didViewCountUp ? data.number : 0} />
        </VisibilitySensor>
      </p>
    </div>
  );
};

CounterUpSingle.propTypes = {
  data: PropTypes.object
};

export default CounterUpSingle;
