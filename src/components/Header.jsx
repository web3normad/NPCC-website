import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import Logo from '../assets/images/npcc-logo.png';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 md:px-24 py-4 bg-white">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img src={Logo} alt="Logo" className="w-24 md:w-32" />
          <span className="text-[#191715] font-bold text-lg md:text-xl">Nigerian Ports</span>
          <span className="text-[#6a6868] font-semibold text-sm md:text-lg">Consultative Council</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-5 items-center">
          <ul className="flex gap-5">
            <li className="font-semibold"><Link to="/news" className="hover:text-[#7cc3a1]">News</Link></li>
            <li className="font-semibold"><Link to="/publications" className="hover:text-[#7cc3a1]">Publications</Link></li>
            <li className="font-semibold"><Link to="/members" className="hover:text-[#7cc3a1]">Our Members</Link></li>
            <li className="font-semibold"><Link to="/events" className="hover:text-[#7cc3a1]">Events</Link></li>
          </ul>
          <div className="flex gap-3">
            <Link to="/members-area" className="border-2 border-[#7cc3a1] px-4 py-2 rounded-md text-[#7cc3a1] hover:bg-[#7cc3a1] hover:text-white">Members' Area</Link>
            <button className="border-2 border-gray-700 p-2 rounded-md hover:bg-gray-200"><Search /></button>
            <button className="border-2 bg-[#7cc3a1] rounded-md hover:bg-gray-200 p-2" onClick={() => setIsSidebarOpen(true)}><Menu size={24} /></button>

          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md border border-gray-300 bg-[#7cc3a1] text-white shadow-md" onClick={() => setIsSidebarOpen(true)}>
          <Menu size={24} />
        </button>
      </nav>

      {/* Sidebar for Mobile */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-[#1a365d] text-white shadow-lg transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-500">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsSidebarOpen(false)} className="p-2">
            <X className="text-white" size={24} />
          </button>
        </div>
        <ul className="flex flex-col p-4 gap-3">
          <li><Link to="/news" className="hover:text-gray-300" onClick={() => setIsSidebarOpen(false)}>News & Events</Link></li>
          <li><Link to="/members" className="hover:text-gray-300" onClick={() => setIsSidebarOpen(false)}>Our Members</Link></li>
          <li><Link to="/about" className="hover:text-gray-300" onClick={() => setIsSidebarOpen(false)}>About Us</Link></li>
          <li><Link to="/careers" className="hover:text-gray-300" onClick={() => setIsSidebarOpen(false)}>Careers Hub</Link></li>
          <li><Link to="/join" className="hover:text-gray-300" onClick={() => setIsSidebarOpen(false)}>Join the NPCC</Link></li>
          <li><Link to="/login" className="text-gray-400 hover:text-gray-300" onClick={() => setIsSidebarOpen(false)}>Login to Members' Area</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
