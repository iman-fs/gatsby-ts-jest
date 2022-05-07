import { render, screen } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import IndexPage from "../index";

describe("Test if the Copyright component is working as expected", () => {
    it("<IndexPage /> matches snapshot", () => {
        render(<IndexPage />);
        const Element = screen.getByText(/icon/i)
        expect(Element).toBeInTheDocument()
    });
});