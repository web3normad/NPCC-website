import React from "react";
import Ship from "../assets/images/ship.jpg";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center my-8 md:my-20">
      {/* Image Container */}
      <div className="relative w-full md:w-[90%] max-h-[800px] overflow-hidden pb-16 md:pb-10 px-4 md:px-0">
        {/* Ship Image */}
        <img 
          src={Ship} 
          alt="Ship" 
          className="w-full h-[300px] md:h-[700px] object-cover"
        />

        {/* Text Box - Repositioned for mobile */}
        <div className="absolute bottom-0 left-4 right-4 md:left-32 md:right-auto bg-[#7cc3a1] text-white p-4 md:p-6 md:w-[450px] md:h-56 shadow-lg">
          <h2 className="text-base md:text-lg font-bold">
            Nigerian Ports Consultative Council
          </h2>
          <p className="mt-2 text-sm md:text-md">
            We represent the interests of Nigerian ports to the various tiers of
            national and devolved governments in Nigeria and internationally.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full px-4 md:w-[76%] mt-12 md:mt-20">
        {/* Top Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-gray-100 p-4 md:p-6 shadow-md">
            <h3 className="text-red-600 font-semibold text-sm">CONFERENCE</h3>
            <h2 className="font-bold text-lg mt-2">
              Nigeria Ports & Maritime Summit 2025
            </h2>
            <p className="mt-2 text-sm">
              Industry leaders will gather to discuss challenges and
              opportunities in Nigeria's port sector.
            </p>
          </div>
          <div className="bg-gray-100 p-4 md:p-6 shadow-md">
            <h3 className="text-blue-600 font-semibold text-sm">PUBLICATION</h3>
            <h2 className="font-bold text-lg mt-2">
              Nigerian Ports Annual Report
            </h2>
            <p className="mt-2 text-sm">
              Explore the latest report on Nigeria's port performance and
              development strategies.
            </p>
          </div>
          <div className="bg-gray-100 p-4 md:p-6 shadow-md">
            <h3 className="text-purple-600 font-semibold text-sm">
              INDUSTRY UPDATE
            </h3>
            <h2 className="font-bold text-lg mt-2">Weekly Maritime Digest</h2>
            <p className="mt-2 text-sm">
              Stay updated with key developments in Nigeria's ports and
              logistics sector.
            </p>
          </div>
        </div>

        {/* Bottom Four Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-10">
  <div className="bg-gray-100 p-4 md:p-6 shadow-md">
    <h3 className="text-red-600 font-semibold text-sm">NEWS 04 FEBUARY 2025</h3>
    <h2 className="font-bold text-md mt-2">
      <a href="https://dailytrend.com.ng/2025/02/04/npcc-unveils-strategic-framework-to-drive-national-single-window-efficiency-in-nigerian-ports/" target="_blank"  className="text-blue-600 underline">NPCC Unveils Strategic Framework to Drive National Single Window Efficiency in Nigerian Ports</a>
    </h2>
    <p className="mt-2 text-sm">
    The Nigerian Ports Consultative Council (NPCC) has proposed a workable spectrum of processes with specific solutions capable of driving the National Single Window(NSW) project for efficiency in the nation’s port operations.
    </p>
  </div>
  <div className="bg-gray-100 p-4 md:p-6 shadow-md">
    <h3 className="text-red-600 font-semibold text-sm">NEWS 26 DECEMBER 2024</h3>
    <h2 className="font-bold text-md mt-2">
      <a href="https://punchng.com/ports-council-plans-databank-for-maritime-sector/" target="_blank"  className="text-blue-600 underline">Ports council plans databank for maritime sector</a>
    </h2>
    <p className="mt-2 text-sm">
    The Nigerian Ports Consultative Council has concluded plans to create a database as custodian of Nigerian port industry statistics.
    </p>
  </div>
  <div className="bg-gray-100 p-4 md:p-6 shadow-md">
    <h3 className="text-red-600 font-semibold text-sm">NEWS 07 OCTOBER 2024</h3>
    <h2 className="font-bold text-md mt-2">
      <a href="https://onepageafrica.com/tag/nigerian-port-consultative-council/" target="_blank" className="text-blue-600 underline" >Nigerian Ports Consultative Council appoints Jean Chiazor Anishere as Vice Chairperson</a>
    </h2>
    <p className="mt-2 text-sm">
    Mrs. Jean Chiazor Anishere, a Senior Advocate of Nigeria and  Principal Partner, Jean Chiazor and Partners, has been appointed as the Vice Chairperson of  the Nigerian Ports Consultative Council (NPCC).
    </p>
  </div>
  <div className="bg-gray-100 p-4 md:p-6 shadow-md">
    <h3 className="text-red-600 font-semibold text-sm">NEWS 07 OCTOBER 2024</h3>
    <h2 className="font-bold text-md mt-2">
      <a href="https://onepageafrica.com/tag/nigerian-port-consultative-council/" target="_blank" className="text-blue-600 underline" >NPCC to establish research and development department</a>
    </h2>
    <p className="mt-2 text-sm">
    The Nigerian Port Consultative Council (NPCC) has disclosed plans to establish a dedicated Research and Development Department to enhance the efficiency and productivity at the nation’s seaports.
    </p>
  </div>
</div>

        {/* Read All News Button */}
        <div className="flex justify-center mt-8 md:mt-10">
          <a href="https://onepageafrica.com/tag/nigerian-port-consultative-council/" target="_blank">
          <button className="w-full md:w-auto border-2 border-[#7cc3a1] text-[#7cc3a1] px-6 py-2 hover:bg-[#7cc3a1] hover:text-white transition-all">
            Read all news
          </button>
          </a>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mx-4 md:mx-56 my-12 md:my-16">
        {/* Left Section (Gray Card with Title) */}
        <div className="relative bg-gray-500 w-full md:w-1/2 h-64 md:h-96 flex items-center justify-center px-4 md:px-8">
          <h2 className="text-white text-2xl md:text-4xl font-bold text-center">
            About Nigerian Ports Consultative Council
          </h2>
        </div>

        {/* Right Section (Text Content) */}
        <div className="w-full md:w-1/2 px-4 md:px-6">
          <p className="text-gray-700 leading-relaxed">
            The Nigerian Ports Consultative Council is the national trade and
            membership body for ports in Nigeria.
            <br />
            <br />
            We represent the interests of operators that handle a significant
            portion of Nigeria's port traffic, advocating for fair policies,
            improved infrastructure, and streamlined regulations at both
            national and international levels.
            <br />
            <br />
            We foster collaboration among stakeholders, providing expertise and
            strategic insights to ensure a more efficient and competitive port
            industry.
          </p>

          <button className="w-full md:w-auto mt-6 px-6 py-3 border-2 border-[#7cc3a1] text-[#7cc3a1] font-semibold hover:bg-[#7cc3a1] hover:text-white transition">
            Read more about us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;