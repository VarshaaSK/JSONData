import { render, screen } from '@testing-library/react';
import Data from '../Data';


jest.mock("../../../__mocks__/axios");

test("Should check if value is getting fetched", async() => {
    render(<Data/>)
    const colorValues = await screen.findAllByTestId("data");
    screen.debug()
    expect(colorValues.length).toBe(1);
})