import React from "react";
import { create } from "react-test-renderer";
import Status from "./StatusHooks";

describe("ProfileStatus component", () => {
  test("Matches the snapshot", () => {
    const button = create(<Status />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});