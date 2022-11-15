import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddCourse from './Components/addCourse';
import {BrowserRouter} from 'react-router-dom';

test('Add Course list loaded', () => {
    render(<BrowserRouter><AddCourse/></BrowserRouter>)
    const linkElement = screen.getByTestId("AddCourse");
    expect(linkElement).toBeInTheDocument();
  });
