import React from "react";
import { shallow } from "enzyme";
import Subtitle from "./Subtitle";
import renderer from "react-test-renderer";

describe("Subtitle component", () => {
  let component, tree, wrapper;

  beforeEach(() => {
    component = renderer.create(<Subtitle>RANDOM TEXT</Subtitle>);
    tree = component.toJSON();

    wrapper = shallow(<Subtitle />);
  });

  it("UNIT: should be defined", () => {
    expect(Subtitle).toBeDefined();
  });

  it("SNAPSHOT: should render correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
