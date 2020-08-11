import React from "react";
import { shallow } from "enzyme";

import SelectLang from "./index";

jest.mock("umi", () => {
  return {
    __esModule: true,
    getLocale: jest.fn(),
    setLocale: jest.fn(),
  };
});

describe("Select Lang", () => {
  let wrapper = shallow(<SelectLang />);

  beforeEach(() => {
    wrapper = shallow(<SelectLang />);
  });

  test("should show correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
