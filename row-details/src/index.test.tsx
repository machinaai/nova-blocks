import React from "react";
import { shallow } from "enzyme";
import RowDetails from './index';



const renderComponent = (props?: any) => {
  return shallow(<RowDetails {...props} />);
};

describe("Input", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should be create a snapshot", async   () => {
    const component = renderComponent();
    expect(component).toMatchSnapshot();
  });

  describe('When exist numberOfSections', () => {

    const props = {
        numberOfSections: 4
    };

    const component = renderComponent(props);
    expect(component).toMatchSnapshot();
  });

  describe("OnClickSection", () => {
    it("should call a action in a title section", () => {

    const component = renderComponent();
      component.find('p').at(0).simulate("click");
      component.update();
      expect(component).toMatchSnapshot();
    });

    it("should call a action in a content section", () => {

        const component = renderComponent();
          component.find('p').at(1).simulate("click");
          component.update();
          expect(component).toMatchSnapshot();
        });
  });
});
