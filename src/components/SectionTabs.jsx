"use client";
import React, { useState } from 'react';

const SectionTabs = ({ sections }) => {
  const [activeTab, setActiveTab] = useState(sections[0].id);

  return (
    <div className="flex justify-center items-center w-fit border-[4px] py-1 border-white rounded-full bg-[#FAFAFA]">
      {sections.map(section => (
        <button
          key={section.id}
          className={`mx-1  px-4 py-2 rounded-full text-sm font-semibold ${
            activeTab === section.id ? 'bg-white text-black shadow' : 'bg-transparent text-gray-600'
          }`}
          onClick={() => setActiveTab(section.id)}
        >
          Section {section.section_name}
        </button>
      ))}
    </div>
  );
};

export default SectionTabs;
