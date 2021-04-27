import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { CardWithAction, CustomCard } from "./card.composition";

it("component should render", () => {
  const handleClick = jest.fn();
  const { getByText } = render(<CardWithAction onClick={handleClick} />);

  expect(getByText("Send People Jesus this Easter")).toBeDefined();
  expect(
    getByText("Help share the hope of Jesus through TV and Radio Broadcasts!")
  ).toBeDefined();
  fireEvent.click(getByText("Give them Jesus"));
  expect(handleClick).toHaveBeenCalled();
});

it("custom component should render", () => {
  const handleClick = jest.fn();
  const { getByText } = render(<CustomCard onClick={handleClick} />);

  expect(
    getByText("This generation was made for bold faith; but do they know that?")
  ).toBeDefined();
  expect(
    getByText(
      "Voke helps this generation discover clarity, conviction and confidence in their faith by giving them a reimagined space for better conversation and deeper community."
    )
  ).toBeDefined();
  fireEvent.click(getByText("Download the Free Voke App"));
  expect(handleClick).toHaveBeenCalled();
});