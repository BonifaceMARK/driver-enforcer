// src/components/GalleryContent.jsx
import React from 'react';

const GalleryContent = () => {
  const items = [
    { href: "/traffic-cases", icon: "bi-list-columns", title: "Traffic Cases", description: "List of Traffic Cases." },
    { href: "/traffic-report", icon: "bi-stoplights", title: "Traffic Report", description: "Updates on traffic conditions." },
    { href: "/ticketing", icon: "bi-ticket-perforated", title: "Ticketing", description: "Ticket Information Status." },
    { href: "/number-coding", icon: "bi-7-circle-fill", title: "Number Coding", description: "Updates on Number Coding." },
    { href: "/road-accidents", icon: "bi-cone-striped", title: "Road Accidents", description: "Updates on Road Accidents." },
    { href: "/almanac", icon: "bi-journal-album", title: "Almanac", description: "Information about traffics." },
    { href: "/tow-truck-request", icon: "bi-truck-flatbed", title: "Tow Truck Request", description: "Request a Tow Truck." },
    { href: "/road-clearing", icon: "bi-x-circle-fill", title: "Road Clearing", description: "Updates on Road Clearing." },
    { href: "/appointment-applications", icon: "bi-window-plus", title: "Appointment Applications", description: "Appointment Information Status." },
    { href: "/lost-and-found", icon: "bi-journals", title: "Lost and Found", description: "Recorded Items Information." },
    { href: "/complaints", icon: "bi-file-earmark-text", title: "Complaints", description: "Info about complaints." },
    { href: "/analytics", icon: "bi-graph-up", title: "Analytics", description: "Graphic Illustration of Informations." },
    { href: "/news", icon: "bi-newspaper", title: "News", description: "News, Blogs and Articles." },
    { href: "/enforcer-profile", icon: "bi-person-vcard-fill", title: "Enforcer Profile", description: "Enforcer info." },
    { href: "/uovr-manual-tickets", icon: "bi-ticket-detailed", title: "UOVR Manual Tickets", description: "Manage Ticket and Receipts." }
  ];

  return (
    <main className="main">
      {/* Service Details Section */}
      <section id="service-details" className="service-details py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <a href={item.href} className="flex flex-col items-center text-center">
                    <i className={`bi ${item.icon} text-4xl text-blue-500 mb-4`} />
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    <p className="text-gray-600">{item.description}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default GalleryContent;
