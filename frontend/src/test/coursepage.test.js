import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CoursePage from '../Components/coursePage';
import {BrowserRouter} from 'react-router-dom';

test('Check course list loaded..', () => {
    render(<BrowserRouter><CoursePage/></BrowserRouter>);
    const linkElement = screen.getByTestId("cp");
    expect(linkElement).toBeInTheDocument();
  });

  
