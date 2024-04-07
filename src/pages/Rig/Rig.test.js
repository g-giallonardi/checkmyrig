import '@testing-library/jest-dom';
import React from 'react'
import { render, screen } from '@testing-library/react';
import Rig from "./Rig.jsx";
import {MemoryRouter} from "react-router-dom";

it.only('should render a menu', () => {
    render(<MemoryRouter><Rig/></MemoryRouter>);
    expect(screen.getByText('Log in')).toBeInTheDocument();
});
