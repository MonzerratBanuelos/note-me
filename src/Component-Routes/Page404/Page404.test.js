/* eslint-disable no-undef */
import { render, screen, fireEvent } from "@testing-library/react";
import Page404 from './Page404'

describe('Page 404 component', () => {
    it('render the content', () => {
        render(<Page404/>)
    })
})

it('sould navigate', () => {
    render(<Page404/>)
})
