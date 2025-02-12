import React from 'react';

const Services = () => {
  const services = [
    {
      title: "Advocacy Services",
      description: "We actively engage in policy formulation and refinement, representing stakeholder interests and facilitating dialogue between industry players.",
      items: ["Policy Development", "Stakeholder Engagement", "Public Representation"]
    },
    {
      title: "Advisory Services",
      description: "Expert guidance on strategic planning, regulatory compliance, and operational optimization for maritime stakeholders.",
      items: ["Strategic Planning", "Regulatory Guidance", "Operational Optimization"]
    },
    {
      title: "Research and Analysis",
      description: "Comprehensive studies and data analysis supporting evidence-based decision making in the maritime sector.",
      items: ["Market Analysis", "Operational Studies", "Policy Research"]
    },
    {
      title: "Consulting Services",
      description: "Specialized expertise for infrastructure development, environmental sustainability, and technology integration.",
      items: ["Infrastructure Planning", "Environmental Management", "Technology Integration"]
    }
  ];

  return (
    <div className="flex flex-col pt-10 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] bg-gray-800">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white max-w-2xl">
            Comprehensive maritime solutions designed to enhance port operations and drive industry growth.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#7cc3a1] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-[#7cc3a1] rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services