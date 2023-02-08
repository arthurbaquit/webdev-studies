import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Greeting from "./Greeting";

describe("renders hello world", () => {
  test("get hello world", () => {
    // Arrange
    render(<Greeting />);
    // Act

    // Assert
    const hellowWorld = screen.getByText("Hello, world!");
    expect(hellowWorld).toBeInTheDocument();
  });

  test("get text before button click", () => {
    render(<Greeting />);
    const text = screen.getByText("This is the original text.");
    expect(text).toBeInTheDocument();
  });

  test("get text after button click", () => {
    render(<Greeting />);
    userEvent.click(screen.getByRole("button"));
    const text = screen.getByText("Button clicked!");
    expect(text).toBeInTheDocument();
  });

  test("check if the text was deleted after clicking the button", () => {
    render(<Greeting />);
    userEvent.click(screen.getByRole("button"));
    const text = screen.queryByText("This is the original text.");
    expect(text).not.toBeInTheDocument();
    expect(text).toBeNull();
  });
});
