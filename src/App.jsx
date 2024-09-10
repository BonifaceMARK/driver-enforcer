// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import GalleryNavbar from './components/GalleryNavbar';
import GalleryContent from './components/GalleryContent';

const IssueTicket = () => <div>Issue a Ticket Page</div>;
const TicketHistory = () => <div>Ticket History Page</div>;
const TicketStatus = () => <div>Ticket Status Page</div>;
const TrafficCases = () => <div>Traffic Cases Page</div>;
const TrafficReport = () => <div>Traffic Report Page</div>;
const Ticketing = () => <div>Ticketing Page</div>;
const NumberCoding = () => <div>Number Coding Page</div>;
const RoadAccidents = () => <div>Road Accidents Page</div>;
const Almanac = () => <div>Almanac Page</div>;
const TowTruckRequest = () => <div>Tow Truck Request Page</div>;
const RoadClearing = () => <div>Road Clearing Page</div>;
const AppointmentApplications = () => <div>Appointment Applications Page</div>;
const LostAndFound = () => <div>Lost and Found Page</div>;
const Complaints = () => <div>Complaints Page</div>;
const Analytics = () => <div>Analytics Page</div>;
const News = () => <div>News Page</div>;
const EnforcerProfile = () => <div>Enforcer Profile Page</div>;
const UovrManualTickets = () => <div>UOVR Manual Tickets Page</div>;

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <GalleryNavbar />
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
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
