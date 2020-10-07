import React from "react";
import { Button, Dropdown, Menu } from "antd";
import { EllipsisOutlined } from '@ant-design/icons';
import { MenuOptionsInterface } from '../interfaces/widget-layout.interface';


/**
 * Menu iterator
 *
 * @param {MenuOptionsInterface[]} options
 */
const menu = (options: MenuOptionsInterface[]) => (
  <Menu>
    {options.map((item) => (
      <Menu.Item key={item.id}>
        <Button type="text" onClick={() => {item?.action(item.id)}}>
          {item.label}
        </Button>
      </Menu.Item>
    ))}
  </Menu>
);

/**
 * Generate a Dropdown
 *
 * @return {getDropDown}
 */
export const getDropDown = (options: MenuOptionsInterface[]) => {
  return (
    <Dropdown overlay={menu(options)} placement="bottomLeft">
      <Button>
        <EllipsisOutlined />
      </Button>
    </Dropdown>
  );
};
