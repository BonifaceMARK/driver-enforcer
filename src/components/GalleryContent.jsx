// src/components/GalleryCard.jsx

import React from 'react';

const galleryItems = [
  'Traffic Cases', 'Traffic Report', 'Ticketing', 'Number Coding', 'Road Accidents', 
  'Almanac', 'Tow Truck Request', 'Road Clearing', 'Appointment Applications', 
  'Lost and Found', 'Complaints', 'Analytics', 'News', 'Enforcer Profile', 'UOVR Manual Tickets'
];

const GalleryContent = () => {
  return (
    <main className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, index) => (
          <div key={index} className="bg-white border rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item}</h3>
              <p className="text-gray-600">Description for {item}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default GalleryContent;
