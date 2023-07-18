import React from "react";
import { Select } from "antd";

export const SelectModel = ({ data, setState }) => {
  const options = [];

  data.data.forEach((car) => {
    if (
      !options.some(
        (item) =>
          JSON.stringify(item) ===
          JSON.stringify({
            label: car.model,
            value: car.model,
          })
      )
    ) {
      options.push({
        label: car.model,
        value: car.model,
      });
    }
  });

  options.sort((a, b) => {
    const labelA = a.label.toLowerCase();
    const labelB = b.label.toLowerCase();
    if (labelA < labelB) {
      return -1;
    }
    if (labelA > labelB) {
      return 1;
    }
    return 0;
  });

  return (
    <Select
      mode="multiple"
      allowClear
      style={{
        marginBottom: "8px",
        width: "100%",
      }}
      placeholder="Выберите модель"
      onChange={(value) => setState(value)}
      options={options}
    />
  );
};
