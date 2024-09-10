import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import GalleryNavbar from './components/GalleryNavbar';
import GalleryContent from './components/GalleryContent';
import roadAccidentImage from './assets/road-accidents.jpg';

// src/pages/IssueTicket.jsx
const IssueTicket = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <header className="mb-4">
      <h1 className="text-4xl font-extrabold text-gray-900">Issue a Ticket</h1>
      <p className="mt-1 text-gray-600">Page</p>
    </header>
    <hr className="my-4 border-gray-300" />
    <section>
      {/* Add more content here */}
    </section>
  </div>
);

// src/pages/TicketHistory.jsx
const TicketHistory = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <header className="mb-4">
      <h1 className="text-4xl font-extrabold text-gray-900">Ticket History</h1>
      <p className="mt-1 text-gray-600">Page</p>
    </header>
    <hr className="my-4 border-gray-300" />
    <section>
      {/* Add more content here */}
    </section>
  </div>
);

// src/pages/TicketStatus.jsx
const TicketStatus = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <header className="mb-4">
      <h1 className="text-4xl font-extrabold text-gray-900">Ticket Status</h1>
      <p className="mt-1 text-gray-600">Page</p>
    </header>
    <hr className="my-4 border-gray-300" />
    <section>
      {/* Add more content here */}
    </section>
  </div>
);

// src/pages/TrafficCases.jsx
const TrafficCases = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <header className="mb-4">
      <h1 className="text-4xl font-extrabold text-gray-900">Traffic Cases</h1>
      <p className="mt-1 text-gray-600">Page</p>
    </header>
    <hr className="my-4 border-gray-300" />
    <section>
      {/* Add more content here */}
    </section>
  </div>
);

// src/pages/TrafficReport.jsx
const TrafficReport = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <header className="mb-4">
      <h1 className="text-4xl font-extrabold text-gray-900">Traffic Report</h1>
      <p className="mt-1 text-gray-600">Page</p>
    </header>
    <hr className="my-4 border-gray-300" />
    <section>
      {/* Add more content here */}
    </section>
  </div>
);

// src/pages/Ticketing.jsx
const Ticketing = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <header className="mb-4">
      <h1 className="text-4xl font-extrabold text-gray-900">Ticketing</h1>
      <p className="mt-1 text-gray-600">Page</p>
    </header>
    <hr className="my-4 border-gray-300" />
    <section>
      {/* Add more content here */}
    </section>
  </div>
);

// src/pages/NumberCoding.jsx
const NumberCoding = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <header className="mb-4">
      <h1 className="text-4xl font-extrabold text-gray-900">Number Coding</h1>
      <p className="mt-1 text-gray-600">Page</p>
    </header>
    <hr className="my-4 border-gray-300" />
    <section>
      {/* Add more content here */}
    </section>
  </div>
);

// src/pages/RoadAccidents.jsx
const RoadAccidents = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <header className="mb-4">
      <h1 className="text-4xl font-extrabold text-gray-900">Road Accidents</h1>
      <p className="mt-1 text-gray-600">Page</p>
    </header>
    <hr className="my-4 border-gray-300" />
    <section className="mt-4">
  <img 
    src={roadAccidentImage} alt="Road Accidents" 
    alt="Description of the image" 
    className="w-full h-auto object-cover rounded-lg shadow-md" 
  />
  {/* Add more content here */}
</section>

  </div>
);

// src/pages/Almanac.jsx
const Almanac = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <header className="mb-4">
      <h1 className="text-4xl font-extrabold text-gray-900">Almanac</h1>
      <p className="mt-1 text-gray-600">Page</p>
    </header>
    <hr className="my-4 border-gray-300" />
    <section>
      {/* Add more content here */}
    </section>
  </div>
);

// src/pages/TowTruckRequest.jsx
const TowTruckRequest = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <header className="mb-4">
      <h1 className="text-4xl font-extrabold text-gray-900">Tow Truck Request</h1>
      <p className="mt-1 text-gray-600">Page</p>
    </header>
    <hr className="my-4 border-gray-300" />
    <section>
      {/* Add more content here */}
    </section>
  </div>
);

// src/pages/RoadClearing.jsx
const RoadClearing = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <header className="mb-4">
      <h1 className="text-4xl font-extrabold text-gray-900">Road Clearing</h1>
      <p className="mt-1 text-gray-600">Page</p>
    </header>
    <hr className="my-4 border-gray-300" />
    <section>
      {/* Add more content here */}
    </section>
  </div>
);

// src/pages/AppointmentApplications.jsx
const AppointmentApplications = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <header className="mb-4">
      <h1 className="text-4xl font-extrabold text-gray-900">Appointment Applications</h1>
      <p className="mt-1 text-gray-600">Page</p>
    </header>
    <hr className="my-4 border-gray-300" />
    <section>
      {/* Add more content here */}
    </section>
  </div>
);

// src/pages/LostAndFound.jsx
const LostAndFound = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <header className="mb-4">
      <h1 className="text-4xl font-extrabold text-gray-900">Lost and Found</h1>
      <p className="mt-1 text-gray-600">Page</p>
    </header>
    <hr className="my-4 border-gray-300" />
    <section>
      {/* Add more content here */}
    </section>
  </div>
);

// src/pages/Complaints.jsx
const Complaints = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <header className="mb-4">
      <h1 className="text-4xl font-extrabold text-gray-900">Complaints</h1>
      <p className="mt-1 text-gray-600">Page</p>
    </header>
    <hr className="my-4 border-gray-300" />
    <section>
      {/* Add more content here */}
    </section>
  </div>
);

// src/pages/Analytics.jsx
const Analytics = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <header className="mb-4">
      <h1 className="text-4xl font-extrabold text-gray-900">Analytics</h1>
      <p className="mt-1 text-gray-600">Page</p>
    </header>
    <hr className="my-4 border-gray-300" />
    <section>
      {/* Add more content here */}
    </section>
  </div>
);

// src/pages/News.jsx
const News = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <header className="mb-4">
      <h1 className="text-4xl font-extrabold text-gray-900">News</h1>
      <p className="mt-1 text-gray-600">Page</p>
    </header>
    <hr className="my-4 border-gray-300" />
    <section>
      {/* Add more content here */}
    </section>
  </div>
);

// src/pages/EnforcerProfile.jsx
const EnforcerProfile = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <header className="mb-4">
      <h1 className="text-4xl font-extrabold text-gray-900">Enforcer Profile</h1>
      <p className="mt-1 text-gray-600">Page</p>
    </header>
    <hr className="my-4 border-gray-300" />
    <section>
      {/* Add more content here */}
    </section>
  </div>
);

// src/pages/UovrManualTickets.jsx
const UovrManualTickets = () => (
  <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
    <header className="mb-4">
      <h1 className="text-4xl font-extrabold text-gray-900">UOVR Manual Tickets</h1>
      <p className="mt-1 text-gray-600">Page</p>
    </header>
    <hr className="my-4 border-gray-300" />
    <section>
      {/* Add more content here */}
    </section>
  </div>
);


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
     
        <main className="p-4">
          <Routes>
            <Route path="/issue-ticket" element={<IssueTicket />} />
            <Route path="/ticket-history" element={<TicketHistory />} />
            <Route path="/ticket-status" element={<TicketStatus />} />
            <Route path="/traffic-cases" element={<TrafficCases />} />
            <Route path="/traffic-report" element={<TrafficReport />} />
            <Route path="/ticketing" element={<Ticketing />} />
            <Route path="/number-coding" element={<NumberCoding />} />
            <Route path="/road-accidents" element={<RoadAccidents />} />
            <Route path="/almanac" element={<Almanac />} />
            <Route path="/tow-truck-request" element={<TowTruckRequest />} />
            <Route path="/road-clearing" element={<RoadClearing />} />
            <Route path="/appointment-applications" element={<AppointmentApplications />} />
            <Route path="/lost-and-found" element={<LostAndFound />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/news" element={<News />} />
            <Route path="/enforcer-profile" element={<EnforcerProfile />} />
            <Route path="/uovr-manual-tickets" element={<UovrManualTickets />} />
            {/* Route for Gallery Content */}
            <Route path="/gallery" element={<GalleryContent />} />
          </Routes>
        </main>
        <GalleryNavbar />
      </div>
    </Router>
    
  );
};

export default App;
