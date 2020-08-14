import React from 'react'
import { mount } from "enzyme";

import InputAuto from "./Input";
import { Input } from "antd";

const InputTest = Input;

const renderComponent = (props?: any) => {
  return mount(<InputAuto {...props} />);
};

describe("Input", () => {
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should be create a snapshot", () => {
    const component = renderComponent();
    expect(component).toMatchSnapshot();
  });

  it("Should be return a input type password", () => {
    const component = renderComponent({ inputPassword: true });
    expect(component).toMatchSnapshot();
  });

  it("Should be change value to uppercase", () => {
    let component;
    component = renderComponent({ upperCase: true, value: "hello world" });
    const value = component.find(InputTest).prop("value");

    expect(value).toBe("HELLO WORLD");
  });

  describe("eventsInputs", () => {
    it("should call eventsInputs function with uppercase", () => {
      let component;
      component = renderComponent({ upperCase: true, value: "hello world" });

      component
        .find(InputTest)
        .simulate("change", { target: { value: "hello world" } });
      component.update();
      const value = component.find(InputTest).prop("value");

      expect(value).toBe("HELLO WORLD");
    });

    it("should call eventsInputs function with out uppercase", () => {
      let component;
      component = renderComponent();

      component.find(InputTest).simulate("change", { target: { value: "" } });
      component.update();
      const value = component.find(InputTest).prop("value");

      expect(value).toBe("");
    });

    it("should call eventsInputs function with length > 0", () => {
      let component;
      component = renderComponent();

      component
        .find(InputTest)
        .simulate("change", { target: { value: "username" } });
      component.update();
      const value = component.find(InputTest).prop("value");

      expect(value).toBe("username");
    });
  });

  describe("disableCopyPaste", () => {
    const prevent = {
      preventDefault: () => {},
    };

    it("should call disableCopyPaste function with onPasteDisabled", () => {
      let component;
      component = renderComponent({ onPasteDisabled: true });

      jest.spyOn(prevent, "preventDefault");
      component.find(InputTest).simulate("paste", prevent);
      component.update();
      expect(jest.spyOn(prevent, "preventDefault")).toBeCalled();
    });

    it("should call disableCopyPaste function with onCopyDisabled", () => {
      let component;
      component = renderComponent({ onCopyDisabled: true });

      jest.spyOn(prevent, "preventDefault");
      component.find(InputTest).prop("onCopy")(prevent);
      component.update();
      expect(jest.spyOn(prevent, "preventDefault")).toBeCalled();
    });

    it("should call disableCopyPaste function with out", () => {
      let component;
      component = renderComponent();

      const callFunction = component.find(InputTest).simulate("paste");
      component.update();
      expect(callFunction).toBeTruthy();
    });
  });

  it("should show placeholder up", () => {
    let component;
    component = renderComponent({error: true});

    component
      .find(InputTest)
      .simulate("change", { target: { value: "username" } });
    component.update();
    const label = component.find('label').exists();

    expect(component).toMatchSnapshot();
    expect(label).toBe(true);
  });
});
