import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';

const EventCreatorDashboard = () => {
    const [events, setEvents] = useState([]);
    const [formData, setFormData] = useState({ name: '', date: '', attendees: 0 });

    // Chart data for events
    const chartData = {
        labels: events.map((event) => event.name),
        datasets: [
            {
                label: 'Attendees',
                data: events.map((event) => event.attendees),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const addEvent = () => {
        if (formData.name && formData.date && formData.attendees > 0) {
            setEvents([...events, formData]);
            setFormData({ name: '', date: '', attendees: 0 });
        }
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Event Creator Dashboard</h1>

            {/* Event Creation Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Create New Event</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Event Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="number"
                        name="attendees"
                        placeholder="Number of Attendees"
                        value={formData.attendees}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    onClick={addEvent}
                    className="mt-6 w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Add Event
                </button>
            </div>

            {/* Event List */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Event List</h2>
                <ul className="space-y-4">
                    {events.map((event, index) => (
                        <li
                            key={index}
                            className="border-b border-gray-200 py-3 flex justify-between text-gray-700"
                        >
                            <span>{event.name}</span>
                            <span>{event.date}</span>
                            <span>{event.attendees} attendees</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Analytics Section */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Event Analytics</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-4 bg-gray-100 rounded-lg">
                        <h3 className="text-md font-medium text-gray-700 mb-4">Attendees Over Events (Bar Chart)</h3>
                        <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg">
                        <h3 className="text-md font-medium text-gray-700 mb-4">Attendees Trend (Line Chart)</h3>
                        <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCreatorDashboard;
