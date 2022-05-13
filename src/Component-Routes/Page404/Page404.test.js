/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Page404 from './Page404'

describe('Page 404 component', () => {
    it('render the content', () => {
        render(
        <BrowserRouter>
        <Page404/>
        </BrowserRouter>
        )
    })
    it('render the button', ()=> {
        render(
        <BrowserRouter>
        <Page404></Page404>
        </BrowserRouter>
        );
        const button = screen.getByRole('button', {alt:'Go to Login'});
        fireEvent.click(button);
        screen.getByText('Go to Login')
    })
})
