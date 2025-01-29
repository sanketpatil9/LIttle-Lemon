import React, { useState } from 'react';
import './BookingForm.css';


const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        guests: 1,
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.date || !formData.time) {
            setError('All fields are required.');
        } else {
            alert('Table booked successfully!');
            setFormData({ name: '', email: '', date: '', time: '', guests: 1 });
            setError('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
            <h2>Book a Table</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-label="Your full name"
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-label="Your email address"
                />
            </label>
            <br />
            <label>
                Date:
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Time:
                <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                />
            </label>
            <br />
            <label>
                Number of Guests:
                <input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    min="1"
                    max="20"
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Book Table</button>
        </form>
    );
};

export default BookingForm;
