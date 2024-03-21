// import '@testing-library/jsdom';
jest.mock('./AdminRigForm.jsx', () => ({
    ...jest.requireActual('./AdminRigForm.jsx'),
    createRig: jest.fn(x=>x)
}))
import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react';
import {MemoryRouter} from "react-router-dom";
import expect from "expect";
import AdminRigForm from "./AdminRigForm.jsx";

describe('AdminRigForm', () => {

    render(<MemoryRouter><AdminRigForm/></MemoryRouter>);


    it('should return a form', () => {
        const rigForm = screen.getByRole('form', {label: 'rigForm'})
        expect(rigForm).toBeInTheDocument()

    })
     it('should return 3 textbox', () => {
        const labels = screen.getAllByRole('textbox')
        expect(labels.length).toBe(3)

    })
    it('should return 1 input', () => {
        const photoInput = screen.getByLabelText('photo-upload')
        expect(photoInput).toBeInTheDocument()
    })

    it('should return an object when the form is submit', () => {
        const saveButton = screen.getByRole('button', {name: 'Save'})
        expect(saveButton.textContent).toBe('Save')
    })

    it.only('should return an object when Save button is clicked', () => {
        const saveButton = screen.getByRole('button', {name: 'Save'})
        fireEvent.click(saveButton)
        expect(AdminRigForm.createRig).toHaveBeenCalled();
    })


})
