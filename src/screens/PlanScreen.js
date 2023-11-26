import React from "react";
import './PlanScreen.css'

const PlanScreen = () => {
  return (
    <div>
         <p>
            Renewal Date:{" "}
            {
                new Date().toLocaleDateString()
            }
        </p>
      <div className="planScreen_plan">
        <div className="planScreen_info">
          <h5>Premium</h5>
          <h6>4K + HDR</h6>
        </div>
        <button>Subscribe</button>
        </div>
        <div className="planScreen_plan">
        <div className="planScreen_info">
          <h5>Standard</h5>
          <h6>1080p</h6>
        </div>
        <button>Subscribe</button>
        </div>
        <div className="planScreen_plan">
        <div className="planScreen_info">
          <h5>Basic</h5>
          <h6>720p</h6>
        </div>
          <button>Subscribe</button>
      </div>
      </div>
  );
};

export default PlanScreen;
