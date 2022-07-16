import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Planets from "..";

describe("Planets", () => {
  const MockPlanets = () => {
    return (
      <BrowserRouter>
        <Planets />
      </BrowserRouter>
    );
  };
  it("should render all planets links", () => {
    render(<MockPlanets />);
    expect(screen.getByText(/mercury/i)).toBeInTheDocument();
    expect(screen.getByText(/venus/i)).toBeInTheDocument();
    expect(screen.getByText(/earth/i)).toBeInTheDocument();
    expect(screen.getByText(/mars/i)).toBeInTheDocument();
    expect(screen.getByText(/jupiter/i)).toBeInTheDocument();
    expect(screen.getByText(/saturn/i)).toBeInTheDocument();
    expect(screen.getByText(/uranus/i)).toBeInTheDocument();
    expect(screen.getByText(/neptune/i)).toBeInTheDocument();
  });
});
