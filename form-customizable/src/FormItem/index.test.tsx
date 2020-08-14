import React from "react";
import { shallow } from "enzyme";
import LoginItem, { getFormItemOptions } from "./index";
import { InputProps } from "./../interfaces/input-auto-label.interface";


const renderComponent = (props?: InputProps) => {
  return shallow(<LoginItem {...props} />);
};

describe("Input", () => {
  const functionGetFormItem = getFormItemOptions;
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should be create a snapshot", () => {
    const component = renderComponent();
    expect(component).toMatchSnapshot();
  });

  describe("getFormItemOptions", () => {
    it("Should be get Form Item Options ", () => {
      const props = {
        name: "password",
        onChanged: () => {},
        defaultValue: "",
      };
      const itemOPtions = functionGetFormItem(props);

      expect(itemOPtions).toEqual({
        rules: undefined,
        onChange: props.onChanged,
      });
    });
    it("Should be get Form Item Options with defaultValue ", () => {
      const props = {
        name: "password",
        defaultValue: "password",
      };
      const itemOPtions = functionGetFormItem(props);

      expect(itemOPtions).toEqual({
        rules: undefined,
        initialValue: 'password'
      });
    });
  });

    it("Should be create a snapshot", () => {
        const props = {
            name: 'username'
        }

        const component = renderComponent(props);
        expect(component).toMatchSnapshot();
    });

    it("Should be create a snapshot with out otherprops", () => {

        const component = renderComponent();
        expect(component).toMatchSnapshot();
    });
});
