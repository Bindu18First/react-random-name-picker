import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import InputForm from "./InputForm";

it("renders div with some snapshot", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<InputForm />);
  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});
