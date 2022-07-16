import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PlanetDetails from "..";

const MockPlanets = () => {
  return (
    <BrowserRouter>
      <PlanetDetails />
    </BrowserRouter>
  );
};

describe("Planet Dtails", () => {
  it("should return fetching ...", () => {
    render(<MockPlanets />);
    expect(screen.getByText(/fetching/i)).toBeInTheDocument();
  });
});
