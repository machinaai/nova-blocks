import React from "react";
import { shallow, mount } from "enzyme";
import FormCustomizable from "./index";
import { Link } from "umi";
import { Button } from "antd";
import FormItem from "./FormItem/index";
const LinkComponent = Link;

const renderComponent = (props?: any) => {
  return shallow(<FormCustomizable {...props} />);
};

describe("Input", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should be create a snapshot", () => {
    const component = renderComponent();
    expect(component).toMatchSnapshot();
  });

  it("Should be create a snapshot with props", () => {
    const props = {
      valueFields: () => {},
    };

    const component = renderComponent(props);
    expect(component).toMatchSnapshot();
  });

  describe("cancelOperation", () => {
    it("should call cancelOperation and show button", () => {
      let component;
      const props = {
        onCancel: {
          label: "Cancel",
          action: () => {},
        },
      };
      component = renderComponent(props);
      const actionFunction = jest.spyOn(props.onCancel, "action");
      component.find(LinkComponent).at(0).simulate("click");
      component.update();
      expect(actionFunction).toBeCalled();
      expect(component).toMatchSnapshot();
    });
  });

  describe("returnOperation", () => {
    it("should call returnOperation and show button", () => {
      let component;
      const props = {
        onReturn: {
          label: "Return",
          action: () => {},
        },
      };
      component = renderComponent(props);
      const actionFunction = jest.spyOn(props.onReturn, "action");
      component.find(LinkComponent).at(0).simulate("click");
      component.update();
      expect(actionFunction).toBeCalled();
      expect(component).toMatchSnapshot();
    });
  });

  
});
