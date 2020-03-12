import React from "react";
import { shallow } from "enzyme";
import Title from "./Title";
import renderer from "react-test-renderer";

describe("Title component", () => {
  let component, tree, wrapper;

  beforeEach(() => {
    component = renderer.create(<Title>RANDOM TEXT</Title>);
    tree = component.toJSON();

    wrapper = shallow(<Title />);
  });

  it("UNIT: should be defined", () => {
    expect(Title).toBeDefined();
  });

  it("SNAPSHOT: should render correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
