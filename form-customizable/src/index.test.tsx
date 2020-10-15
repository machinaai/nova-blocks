import React from "react";
import { shallow, mount } from "enzyme";
import FormCustomizable from "./index";
import { Link } from "umi";
import { Button, Form } from "antd";
import FormItem from "./FormItem/index";
import LoginItem from "./FormItem/index";
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
    const props = {};

    const component = renderComponent(props);
    component.update();
    expect(component).toMatchSnapshot();
  });

  it("Should be create a snapshot with props", () => {
    const props = {
      valueFields: {
        username: "Nova solutions",
      },
    };

    const component = mount(<FormCustomizable {...props} />);
    component.update();
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

  describe("onValidateForm", () => {
    it("should call onValidateForm and show button", () => {
      let component;
      const props = {
        onSumbit: {
          label: "validate",
          action: () => {},
        },
      };

      component = mount(<FormCustomizable {...props} />);
      component
        .find("input")
        .simulate("change", { target: { value: "username" } });

      const actionFunction = jest.spyOn(props.onSumbit, "action");
      component.find(Button).at(0).simulate("click");
      component.update();
      expect(actionFunction).toBeCalled();
      expect(component).toMatchSnapshot();
    });
  });

  // describe("validateForm", () => {
  //   it("should call reset fields before form is finish", async () => {
  //     let component;
  //     const props = {
  //       onSumbit: {
  //         label: "validate",
  //         action: () => {},
  //       },
  //     };

  //     component = renderComponent(props);
  //     // const form = component.find(Form).prop('form');
  //     // console.log(form);
  //     // component.find(Form).prop("form");
  //     component.find(Form).prop("onFinish")();

  //     expect(component).toMatchSnapshot();
  //   });
  // });
});
