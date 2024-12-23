import React from "react";

const Team = () => {
  const teamMembers = Array(12).fill({
    name: "Exampleimage",
    title: "Co-Founder",
    image: "https://via.placeholder.com/150", 
  });

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-white text-center text-4xl font-bold mb-14 md:text-5xl">Our Team</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-4 text-center shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />
            <h2 className="text-white text-lg font-semibold">{member.name}</h2>
            <p className="text-gray-400">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;