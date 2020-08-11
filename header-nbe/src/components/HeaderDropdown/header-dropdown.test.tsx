import React from "react";
import { shallow } from "enzyme";

import HeaderDropdown from "./index";

describe("Header Dropdown", () => {
  let wrapper = shallow(<HeaderDropdown />);

  beforeEach(() => {
    wrapper = shallow(<HeaderDropdown />);
  });

  test("should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
