import { render, screen } from "@testing-library/react";
import App from "./App";

describe("test App component", () => {
  test("should render Company name", () => {
    render(<App />);
    const companyName = screen.getByText(/corporate employees/i);
    expect(companyName).toBeInTheDocument();
  });
  test("should render Button", () => {
    render(<App />);
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
  });
  test("should render Pie Chart", () => {
    render(<App />);
    const pieChart = screen.queryByText(/Employees by Job Title/i);
    expect(pieChart).not.toBeInTheDocument();
  });
  test("should render Bar Chart", () => {
    render(<App />);
    const barChart = screen.queryByText(/Employees by Gender/i);
    expect(barChart).not.toBeInTheDocument();
  });
});
