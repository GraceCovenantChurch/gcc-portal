import React from "react";
import { shallow } from "enzyme";
import Chart from "./Chart";
import renderer from "react-test-renderer";

describe("Chart component", () => {
  let component, tree, wrapper;

  beforeEach(() => {
    const data = [
      createData("00:00", 0),
      createData("03:00", 300),
      createData("06:00", 600),
      createData("09:00", 800),
      createData("12:00", 1500),
      createData("15:00", 2000),
      createData("18:00", 2400),
      createData("21:00", 2400),
      createData("24:00", undefined),
    ];

    // Generate Sales Data
    function createData(time, amount) {
      return { time, amount };
    }

    component = renderer.create(<Chart data={data} />, { createNodeMock });
    tree = component.toJSON();

    wrapper = shallow(<Chart data={data} />);
  });

  it("UNIT: should be defined", () => {
    expect(Chart).toBeDefined();
  });

  it("SNAPSHOT: should render correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
