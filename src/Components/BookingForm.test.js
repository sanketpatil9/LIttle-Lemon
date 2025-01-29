import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders the booking form', () => {
    render(<BookingForm />);
    expect(screen.getByText('Book a Table')).toBeInTheDocument();
});
