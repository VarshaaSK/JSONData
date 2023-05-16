import { render, screen } from '@testing-library/react';
import About from "../About"

it("Should check if heading is present in the ABout Page", ()=>{
    render(<About/>);
    const headingElement = screen.getByRole("heading", {name : "About"});
    expect(headingElement).toBeVisible()
})