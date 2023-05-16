import { render, screen } from '@testing-library/react';
import Home from '../Home';
import { BrowserRouter } from 'react-router-dom';

const MockHome = () => {
    return(
        <BrowserRouter>
            <Home/>
        </BrowserRouter>
    )
}

it("Should check if Heading is present", ()=>{
    render(<MockHome/>);
    const headingElement = screen.getByRole("heading",{name : "Hello"});
    expect(headingElement).toBeVisible();
})

it("Should check if link is present", ()=>{
    render(<MockHome/>);
    const links = ["Go To About", "Go To Data","Go To New Data"];
    const getAllLinks = screen.getAllByTestId("linkId");
    getAllLinks.forEach((link,index) => {
        expect(link).toBeVisible();
        expect(link.innerHTML).toBe(links[index]);
    })
})