import React, { useState } from "react";

function Tabs({ data, position = "top", disabled = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = (
    <div className="tabs__list">
      {data.map((tab, index) => {
        const isActive = index === activeIndex;
        const isDisabled = disabled.includes(index);
        return (
          <div
            className={`tabs__tab ${
              isDisabled ? "disabled" : isActive ? "active" : ""
            }`}
            key={index}
            onClick={() => (isDisabled ? undefined : setActiveIndex(index))}
          >
            {tab.label}
          </div>
        );
      })}
    </div>
  );
  const panels = (
    <div className="tabs__panels">{data[activeIndex].content}</div>
  );
  return (
    <div className="tabs">
      {position === "top" ? [tabs, panels] : [panels, tabs]}
    </div>
  );
}

export default Tabs;
