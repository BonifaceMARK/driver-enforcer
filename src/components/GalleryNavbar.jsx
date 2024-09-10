// src/components/GalleryNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const GalleryNavbar = () => {
  return (
    <nav className="bg-gray-700 text-white shadow-md mt-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-12">
          <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
            <Link to="/traffic-cases" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Traffic Cases
            </Link>
            <Link to="/traffic-report" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Traffic Report
            </Link>
            <Link to="/ticketing" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Ticketing
            </Link>
            <Link to="/number-coding" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Number Coding
            </Link>
            <Link to="/road-accidents" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Road Accidents
            </Link>
            <Link to="/almanac" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Almanac
            </Link>
            <Link to="/tow-truck-request" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Tow Truck Request
            </Link>
            <Link to="/road-clearing" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Road Clearing
            </Link>
            <Link to="/appointment-applications" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Appointment Applications
            </Link>
            <Link to="/lost-and-found" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Lost and Found
            </Link>
            <Link to="/complaints" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Complaints
            </Link>
            <Link to="/analytics" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Analytics
            </Link>
            <Link to="/news" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              News
            </Link>
            <Link to="/enforcer-profile" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Enforcer Profile
            </Link>
            <Link to="/uovr-manual-tickets" className="text-gray-300 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              UOVR Manual Tickets
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GalleryNavbar;
