// import '@testing-library/jsdom';
import React from 'react'
import { render, screen } from '@testing-library/react';
import Header from "./Header.jsx";
import {MemoryRouter} from "react-router-dom";

test('should render a menu', () => {
    render(<MemoryRouter><Header/></MemoryRouter>);
    expect(screen.getByText('Log in')).toBeInTheDocument();
});
