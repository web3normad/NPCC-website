import React from "react";
import Ship from "../assets/images/ship.jpg";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      {/* Image Container */}
      <div className="relative w-[90%] max-h-[800px] overflow-hidden pb-10">
        {/* Ship Image */}
        <img
          src={Ship}
          alt="Ship"
          className="w-full h-[700px] object-cover"
        />

        {/* Text Box Positioned at Bottom-Left, Partially Overlapping */}
        <div className="absolute bottom-[-40px] left-32 bg-[#7cc3a1] text-white p-6 w-[450px] h-56 shadow-lg">
          <h2 className="text-lg font-bold">
            Nigerian Ports Consultative Council
          </h2>
          <p className="mt-2 text-md">
            We represent the interests of Nigerian ports to the various tiers of
            national and devolved governments in Nigeria and internationally.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-[76%] mt-20">
        {/* Top Three Cards */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 shadow-md">
            <h3 className="text-red-600 font-semibold text-sm">BPA CONFERENCE</h3>
            <h2 className="font-bold text-lg mt-2">BPA Conference 2025</h2>
            <p className="mt-2 text-sm">
              The BPA’s Annual Conference will be hosted jointly by Associated British Ports.
            </p>
          </div>
          <div className="bg-gray-100 p-6 shadow-md">
            <h3 className="text-blue-600 font-semibold text-sm">PUBLICATION</h3>
            <h2 className="font-bold text-lg mt-2">BPA Annual Report</h2>
            <p className="mt-2 text-sm">
              Read the British Ports Association’s latest Annual Report.
            </p>
          </div>
          <div className="bg-gray-100 p-6 shadow-md">
            <h3 className="text-purple-600 font-semibold text-sm">ROUNDUP</h3>
            <h2 className="font-bold text-lg mt-2">Weekly Snapshot</h2>
            <p className="mt-2 text-sm">
              Read our five-minute roundup of the week.
            </p>
          </div>
        </div>

        {/* Bottom Four Cards */}
        <div className="grid grid-cols-4 gap-6 mt-10">
          <div className="bg-gray-100 p-6 shadow-md">
            <h3 className="text-red-600 font-semibold text-sm">NEWS  17 JANUARY 2025</h3>
            <h2 className="font-bold text-md mt-2">
              Scottish Ports Urge Caution on Cruise Levy and Planning
            </h2>
            <p className="mt-2 text-sm">Scottish Ministers should act to ease fears around a potential new tax.</p>
          </div>
          <div className="bg-gray-100 p-6 shadow-md">
            <h3 className="text-red-600 font-semibold text-sm">NEWS  07 JANUARY 2025</h3>
            <h2 className="font-bold text-md mt-2">
              One in three port planning regulations in need of urgent reform
            </h2>
            <p className="mt-2 text-sm">The latest version of the BPA’s regulatory map highlights key changes.</p>
          </div>
          <div className="bg-gray-100 p-6 shadow-md">
            <h3 className="text-red-600 font-semibold text-sm">NEWS  24 OCTOBER 2024</h3>
            <h2 className="font-bold text-md mt-2">
              Ports Target Modern Slavery and Trafficking
            </h2>
            <p className="mt-2 text-sm">The British Ports Association has launched new guidance on the issue.</p>
          </div>
          <div className="bg-gray-100 p-6 shadow-md">
            <h3 className="text-red-600 font-semibold text-sm">NEWS  15 OCTOBER 2024</h3>
            <h2 className="font-bold text-md mt-2">
              Growing Women in Ports Network Unites Around Shared Experiences
            </h2>
            <p className="mt-2 text-sm">The UK’s Women in Ports Group met to discuss industry trends.</p>
          </div>
        </div>

        {/* Read All News Button */}
        <div className="flex justify-center mt-10">
          <button className="border-2 border-[#7cc3a1] text-[#7cc3a1] px-6 py-2 hover:bg-[#7cc3a1] hover:text-white transition-all">
            Read all news
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto my-16">
      {/* Left Section (Gray Card with Title) */}
      <div className="relative bg-gray-500 w-full md:w-1/2 h-64 flex items-center justify-center px-8">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center">
          About Nigerian Ports Consultative Council
        </h2>
      </div>

      {/* Right Section (Text Content) */}
      <div className="w-full md:w-1/2 px-6">
        <p className="text-gray-700 leading-relaxed">
          The Nigerian Ports Consultative Council is the national trade and
          membership body for ports in Nigeria.
          <br />
          <br />
          We represent the interests of operators that handle a significant
          portion of Nigeria's port traffic, advocating for fair policies,
          improved infrastructure, and streamlined regulations at both national
          and international levels.
          <br />
          <br />
          We foster collaboration among stakeholders, providing expertise and
          strategic insights to ensure a more efficient and competitive port
          industry.
        </p>

        <button className="mt-6 px-6 py-3 border-2 border-[#7cc3a1] text-[#7cc3a1] font-semibold hover:bg-[#7cc3a1] hover:text-white transition">
          Read more about us
        </button>
      </div>
    </div>
    </div>
  );
};

export default Home;
