import React, { useState } from "react";

function Tabs({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="tabs">
      <div className="tabs__list">
        {data.map((tab, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              className={`tabs__tab ${isActive ? "active" : ""}`}
              key={index}
              onClick={() => setActiveIndex(index)}
            >
              {tab.label}
            </div>
          );
        })}
      </div>
      <div className="tabs__panels">{data[activeIndex].content}</div>
    </div>
  );
}

export default Tabs;
