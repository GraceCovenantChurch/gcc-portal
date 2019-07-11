import React from "react";
import { mount } from "enzyme";
import { thunk, Provider } from "react-redux";
import configureStore from "redux-mock-store";

import App from "./App";

import { INITIAL_STATE } from "./common/app-const";

describe("Basic Shallow App Rendering", () => {
  const mockStore = configureStore();
  let store, wrapper;

  const props = {};

  beforeEach(() => {
    store = mockStore(INITIAL_STATE);
    wrapper = mount(
      <Provider store={store}>
        <App {...props} />
      </Provider>
    );
  });

  it("Render the App Component", () => {
    expect(wrapper.find(App).length).toEqual(1);
  });
});
