import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { Dropdown, Space } from "antd";

export default function Dropdowns({ items, title }) {
  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
        className="AdminDropdown"
      >
        <div style={{ color: "white" }}>
          <Space>
            {title}
            <FiChevronDown />
          </Space>
        </div>
      </Dropdown>
    </>
  );
}
