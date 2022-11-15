import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddCourse from './Components/addCourse';
import {BrowserRouter} from 'react-router-dom';

test('Add Course list loaded', () => {
    render(<BrowserRouter><AddCourse/></BrowserRouter>)
    const linkElement = screen.getByTestId("AddCourse");
    expect(linkElement).toBeInTheDocument();
  });

  test('Course Heading loaded', () => {
    render(<BrowserRouter><AddCourse/></BrowserRouter>)
    const linkElement = screen.getByTestId("Course");
    expect(linkElement).toBeInTheDocument();
  });

  test('Credit Hours Heading loaded', () => {
    render(<BrowserRouter><AddCourse/></BrowserRouter>)
    const linkElement = screen.getByTestId("Credit");
    expect(linkElement).toBeInTheDocument();
  });
  


  test('Course Code Field loaded', () => {
    render(<BrowserRouter><AddCourse/></BrowserRouter>)
    const linkElement = screen.getByTestId("Code Field");
    expect(linkElement).toBeInTheDocument();
  });

  test('Credit Hours Field loaded', () => {
    render(<BrowserRouter><AddCourse/></BrowserRouter>)
    const linkElement = screen.getByTestId("Credit Field");
    expect(linkElement).toBeInTheDocument();
  });

  test('Course Name Field loaded', () => {
    render(<BrowserRouter><AddCourse/></BrowserRouter>)
    const linkElement = screen.getByTestId("Course Field");
    expect(linkElement).toBeInTheDocument();
  });



  test('Credit Hours Heading Correct', () => {
    render(<BrowserRouter><AddCourse/></BrowserRouter>)
    const linkElement = screen.getByTestId("Code");
    expect(linkElement).toHaveTextContent("Course Code");
  });

  test('Course Name Heading Correct', () => {
    render(<BrowserRouter><AddCourse/></BrowserRouter>)
    const linkElement = screen.getByTestId("Course");
    expect(linkElement).toHaveTextContent("Course Name");
  });

  test('Credit Hours Heading Correct', () => {
    render(<BrowserRouter><AddCourse/></BrowserRouter>)
    const linkElement = screen.getByTestId("Credit");
    expect(linkElement).toHaveTextContent("Credit Hours");
  });

