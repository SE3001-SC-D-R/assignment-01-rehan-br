import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './Components/Navbar';
import {BrowserRouter} from 'react-router-dom';

test("Check if home button loaded..", () => {
    render(<BrowserRouter><NavBar/></BrowserRouter>);
    const linkElement = screen.getByTestId("home");
    expect(linkElement).toBeInTheDocument();
});