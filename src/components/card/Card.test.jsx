import React from "react";
import { shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import Card from "./Card";
import renderer from "react-test-renderer";

describe("Card component", () => {
  let component, tree, wrapper;

  beforeEach(() => {
    component = renderer.create(
      <BrowserRouter>
        <Card
          heading="randomheading"
          description="You have a recording of an old sermon? Please upload it here!"
          image="https://www.volgacrc.org/editoruploads/images/FaithWebsites/church_mid_img1.jpg"
        />
      </BrowserRouter>
    );
    tree = component.toJSON();

    wrapper = shallow(
      <Card
        heading="randomheading"
        description="You have a recording of an old sermon? Please upload it here!"
        image="https://www.volgacrc.org/editoruploads/images/FaithWebsites/church_mid_img1.jpg"
      />
    );
  });

  it("UNIT: should be defined", () => {
    expect(Card).toBeDefined();
  });

  it("SNAPSHOT: should render correctly", () => {
    expect(tree).toMatchSnapshot();
  });
});
