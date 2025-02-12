import React from 'react';

const Mandates = () => {
  const mandates = [
    {
      title: "Advocacy",
      description: "We influence policy and regulatory frameworks to create an enabling environment for efficient port operations.",
      activities: [
        "Policy Development",
        "Stakeholder Engagement",
        "Public Representation",
        "Advocacy Campaigns"
      ]
    },
    {
      title: "Advisory",
      description: "Expert guidance and strategic insights to navigate complexities of port operations.",
      activities: [
        "Strategic Planning",
        "Regulatory Guidance",
        "Operational Optimization",
        "Capacity Building"
      ]
    },
    {
      title: "Arbitration",
      description: "Structured and impartial mechanism for dispute resolution within the maritime sector.",
      activities: [
        "Dispute Resolution",
        "Arbitration Processes",
        "Expert Panels",
        "Training Support"
      ]
    },
    {
      title: "Consulting",
      description: "Specialized expertise supporting strategic and operational needs of stakeholders.",
      activities: [
        "Infrastructure Development",
        "Environmental Sustainability",
        "Technology Integration",
        "Risk Management"
      ]
    }
  ];

  return (
    <div className="flex flex-col pt-10 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-gray-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Mandates</h1>
          <p className="text-xl text-white max-w-2xl">
            Four core pillars that guide our mission to enhance Nigeria's maritime sector.
          </p>
        </div>
      </div>

      {/* Mandates Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {mandates.map((mandate, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#7cc3a1] mb-4">{mandate.title}</h3>
                <p className="text-gray-600 mb-4">{mandate.description}</p>
                <div className="space-y-2">
                  {mandate.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-[#7cc3a1] rounded-full mr-2" />
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default  Mandates ;