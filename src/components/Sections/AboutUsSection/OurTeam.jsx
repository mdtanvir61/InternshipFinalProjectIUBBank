import React, { useState } from "react";

const TEAM_TABS = [
  { label: "Board", key: "board" },
  { label: "Leaders", key: "leaders" },
  { label: "Designers", key: "designers" },
  { label: "Developers", key: "developers" },
  { label: "HR", key: "hr" },
];

const TEAM_MEMBERS = {
  board: [
    {
      name: "Dale Bryant",
      role: "CEO & Founder",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Dale Bryant",
      role: "CFO",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Dale Bryant",
      role: "CTO & Co-founder",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Dale Bryant",
      role: "Head of Marketing",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      name: "Dale Bryant",
      role: "Business Analyst",
      img: "https://randomuser.me/api/portraits/men/47.jpg",
    },
    {
      name: "Dale Bryant",
      role: "Advisor, Investor Member",
      img: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      name: "Dale Bryant",
      role: "Business Development",
      img: "https://randomuser.me/api/portraits/women/48.jpg",
    },
    {
      name: "Dale Bryant",
      role: "Full-stack Developer",
      img: "https://randomuser.me/api/portraits/men/48.jpg",
    },
  ],
  leaders: [
    {
      name: "Alex Morgan",
      role: "Chief Strategy Officer",
      img: "https://randomuser.me/api/portraits/men/49.jpg",
    },
    {
      name: "Sophie Turner",
      role: "Chief Operations Officer",
      img: "https://randomuser.me/api/portraits/women/49.jpg",
    },
    {
      name: "Chris Evans",
      role: "Chief Product Officer",
      img: "https://randomuser.me/api/portraits/men/50.jpg",
    },
    {
      name: "Emma Watson",
      role: "Chief People Officer",
      img: "https://randomuser.me/api/portraits/women/50.jpg",
    },
  ],
  designers: [
    {
      name: "Liam Smith",
      role: "Lead Designer",
      img: "https://randomuser.me/api/portraits/men/51.jpg",
    },
    {
      name: "Olivia Brown",
      role: "UI/UX Designer",
      img: "https://randomuser.me/api/portraits/women/51.jpg",
    },
    {
      name: "Noah Wilson",
      role: "Brand Designer",
      img: "https://randomuser.me/api/portraits/men/52.jpg",
    },
  ],
  developers: [
    {
      name: "Mason Lee",
      role: "Frontend Developer",
      img: "https://randomuser.me/api/portraits/men/53.jpg",
    },
    {
      name: "Ava Clark",
      role: "Backend Developer",
      img: "https://randomuser.me/api/portraits/women/53.jpg",
    },
    {
      name: "Lucas Walker",
      role: "Mobile Developer",
      img: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      name: "Mia Hall",
      role: "QA Engineer",
      img: "https://randomuser.me/api/portraits/women/54.jpg",
    },
  ],
  hr: [
    {
      name: "Ella King",
      role: "HR Manager",
      img: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
      name: "Benjamin Scott",
      role: "Recruiter",
      img: "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ],
};

const OurTeam = () => {
  const [activeTab, setActiveTab] = useState("board");

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="text-green-700 font-semibold mb-2 text-center text-lg">
          The Amazing Team Behind Our Company
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 text-[#181f2a]">
          The right skills wielded by the right<br className="hidden md:block" />
          people to make anything possible.
        </h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl">
          Our diversity and youthfulness are the sources of our strength as a team and shape our views.
        </p>
        {/* Toggle Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {TEAM_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-8 py-2 rounded-full border transition shadow-sm text-base font-semibold focus:outline-none ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                  : "bg-white text-blue-700 border-blue-200 hover:bg-blue-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full justify-items-center">
          {TEAM_MEMBERS[activeTab].map((member, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-blue-50 flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="font-bold text-lg text-center text-[#181f2a]">{member.name}</div>
              <div className="text-gray-600 text-sm text-center">{member.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;