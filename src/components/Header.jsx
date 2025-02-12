import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import Logo from "../assets/images/npcc-logo.png"

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigationItems = [
    {
      title: 'About Us',
      path: '/about',
      dropdown: [
        { label: 'History', path: '/about/history' },
        { label: 'Mission & Vision', path: '/about/mission' },
        { label: 'Leadership', path: '/about/leadership' },
        { label: 'Organizational Structure', path: '/about/structure' }
      ]
    },
    {
      title: 'Our Mandates',
      path: '/mandates',
      dropdown: [
        { label: 'Advocacy', path: '/mandates/advocacy' },
        { label: 'Advisory', path: '/mandates/advisory' },
        { label: 'Arbitration', path: '/mandates/arbitration' },
        { label: 'Consulting', path: '/mandates/consulting' }
      ]
    },
    {
      title: 'Services',
      path: '/services',
      dropdown: [
        { label: 'Research & Analysis', path: '/services/research' },
        { label: 'Consulting Services', path: '/services/consulting' },
        { label: 'Advisory Services', path: '/services/advisory' }
      ]
    },
    {
      title: 'Resources',
      path: '/resources',
      dropdown: [
        { label: 'Industry Reports', path: '/resources/reports' },
        { label: 'Publications', path: '/resources/publications' },
        { label: 'Guidelines', path: '/resources/guidelines' }
      ]
    }
  ];

  return (
    <div className="relative">
      {/* Main Navbar */}
      <nav className="">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col items-center">
              <img 
                src={Logo}
                alt="NPCC Logo" 
                className="h-16 w-auto"
              />
              <div className="text-center">
                <div className="text-[#191715] font-bold text-md">Nigerian Ports</div>
                <div className="text-[#6a6868] text-sm">Consultative Council</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Main Navigation Items */}
              <div className="flex space-x-6">
                {navigationItems.map((item) => (
                  <div 
                    key={item.title}
                    className="relative group"
                  >
                    <button 
                      className="flex items-center space-x-1 text-gray-700 hover:text-[#7cc3a1] py-2 focus:outline-none"
                      onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                      onMouseEnter={() => setActiveDropdown(item.title)}
                    >
                      <span>{item.title}</span>
                      <ChevronDown size={16} />
                    </button>
                    
                    {/* Dropdown Menu with hover area */}
                    {activeDropdown === item.title && (
                      <>
                        {/* Invisible hover bridge */}
                        <div 
                          className="absolute -bottom-2 left-0 h-2 w-full"
                          onMouseEnter={() => setActiveDropdown(item.title)}
                        />
                        <div 
                          className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg py-1 z-50"
                          onMouseEnter={() => setActiveDropdown(item.title)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.path}
                              to={dropdownItem.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                <Link
                  to="/members-area"
                  className="px-4 py-2 text-[#7cc3a1] border-2 border-[#7cc3a1]  hover:bg-[#7cc3a1] hover:text-white transition-colors"
                >
                  Members' Area
                </Link>
                <button className="p-2 text-gray-600 hover:text-gray-900">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 bg-[#7cc3a1] text-gray-600"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsSidebarOpen(false)}
          />
          
          {/* Sidebar Content */}
          <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button 
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Navigation Items */}
            <div className="py-4">
              {navigationItems.map((item) => (
                <div key={item.title} className="px-4">
                  <Link
                    to={item.path}
                    className="block py-2 text-gray-700 hover:text-[#7cc3a1]"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {item.title}
                  </Link>
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        className="block py-1 text-sm text-gray-600 hover:text-[#7cc3a1]"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="px-4 mt-4">
                <Link
                  to="/members-area"
                  className="block px-4 py-2 text-center text-[#7cc3a1] border-2 border-[#7cc3a1] rounded-md hover:bg-[#7cc3a1] hover:text-white"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  Members' Area
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;