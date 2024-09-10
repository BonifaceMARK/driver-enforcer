import React from 'react';
import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon, 
  DocumentTextIcon, 
  TicketIcon, 
  HashtagIcon, 
  TruckIcon, 
  CalendarIcon, 
  WrenchIcon, 
  UserIcon, 
  PhoneIcon, 
  MagnifyingGlassIcon as SearchIcon, 
  ChatBubbleLeftIcon as ChatIcon, 
  ChartBarIcon, 
  NewspaperIcon, 
  UserGroupIcon, 
  ClipboardDocumentListIcon as ClipboardListIcon 
} from '@heroicons/react/24/outline';

const navItems = [
  { path: '/traffic-cases', label: 'Traffic Cases', icon: <AcademicCapIcon className="h-10 w-10" /> },
  { path: '/traffic-report', label: 'Traffic Report', icon: <DocumentTextIcon className="h-10 w-10" /> },
  { path: '/ticketing', label: 'Ticketing', icon: <TicketIcon className="h-10 w-10" /> },
  { path: '/number-coding', label: 'Number Coding', icon: <HashtagIcon className="h-10 w-10" /> },
  { path: '/road-accidents', label: 'Road Accidents', icon: <TruckIcon className="h-10 w-10" /> },
  { path: '/almanac', label: 'Almanac', icon: <CalendarIcon className="h-10 w-10" /> },
  { path: '/tow-truck-request', label: 'Tow Truck Request', icon: <WrenchIcon className="h-10 w-10" /> },
  { path: '/road-clearing', label: 'Road Clearing', icon: <UserIcon className="h-10 w-10" /> },
  { path: '/appointment-applications', label: 'Appointment Applications', icon: <PhoneIcon className="h-10 w-10" /> },
  { path: '/lost-and-found', label: 'Lost and Found', icon: <SearchIcon className="h-10 w-10" /> },
  { path: '/complaints', label: 'Complaints', icon: <ChatIcon className="h-10 w-10" /> },
  { path: '/analytics', label: 'Analytics', icon: <ChartBarIcon className="h-10 w-10" /> },
  { path: '/news', label: 'News', icon: <NewspaperIcon className="h-10 w-10" /> },
  { path: '/enforcer-profile', label: 'Enforcer Profile', icon: <UserGroupIcon className="h-10 w-10" /> },
  { path: '/uovr-manual-tickets', label: 'UOVR Manual Tickets', icon: <ClipboardListIcon className="h-10 w-10" /> }
];

const GalleryNavbar = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md mt-4 mx-4 sm:mx-6 lg:mx-8 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path} 
            className="flex flex-col items-center bg-gray-700 text-white hover:bg-gray-600 rounded-md p-4 text-center transition-colors duration-200"
          >
            <span className="mb-2">{item.icon}</span>
            <h3 className="text-sm font-medium mb-1">{item.label}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GalleryNavbar;
