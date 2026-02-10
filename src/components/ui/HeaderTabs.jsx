import React from "react";

const TABS = ["Homes", "Experiences", "Services"];

const HeaderTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center gap-8 text-sm font-medium">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative pb-2 transition-colors ${
            activeTab === tab
              ? "text-black"
              : "text-gray-500 hover:text-black"
          }`}
        >
          {tab}
          {activeTab === tab && (
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black" />
          )}
        </button>
      ))}
    </div>
  );
};

export default HeaderTabs;
