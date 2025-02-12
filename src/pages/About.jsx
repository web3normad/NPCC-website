import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col pt-10 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-gray-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About NPCC</h1>
          <p className="text-xl text-white max-w-2xl">
            The Nigerian Ports Consultative Council (NPCC) is a cornerstone institution in Nigeria's maritime sector, dedicated to fostering collaboration and excellence in port operations.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* History Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">History of NPCC</h2>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <p className="text-gray-600 leading-relaxed mb-6">
              The Nigerian Ports Consultative Council (NPCC) was established as a vital instrument of consultation and coordination within the maritime sector of Nigeria. Since its inception, the NPCC has been instrumental in addressing the challenges facing the nation's ports.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Over the years, the NPCC has evolved to meet the changing dynamics of global maritime trade, consistently upholding its mandates of Advocacy, Advisory, Arbitration, and Consulting.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#7cc3a1] mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To promote best practice and sustainable development in the port industry, driving collaboration among stakeholders for economic growth, environmental stewardship and safety standards.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#7cc3a1] mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be a collaborative platform where industry, stakeholders and community representatives come together to discuss, plan, and innovate for sustainable port development.
              </p>
            </div>
          </div>
        </div>

        {/* Organization Structure */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Organizational Structure</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Board of Trustees",
                description: "The highest decision-making body within the NPCC, responsible for setting strategic directions and policies."
              },
              {
                title: "Specialized Committees",
                description: "Focus on specific areas such as Port Operations, Legal Matters, Media/Publicity, Research, and Finance."
              },
              {
                title: "Secretariat",
                description: "Responsible for the administrative functions of the NPCC, ensuring smooth operations and stakeholder engagement."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#7cc3a1] mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default About