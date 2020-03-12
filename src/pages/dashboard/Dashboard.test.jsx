import React from "react";
import { shallow } from "enzyme";
import Dashboard from "./Dashboard";
import renderer from "react-test-renderer";

describe("Dashboard component", () => {
  let component, tree, wrapper;

  beforeEach(() => {
    component = renderer.create(<Dashboard />, { createNodeMock });
    tree = component.toJSON();

    wrapper = shallow(<Dashboard />);
  });

  it("UNIT: should be defined", () => {
    expect(Dashboard).toBeDefined();
  });

  it("SNAPSHOT: should render correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
