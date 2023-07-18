import React, { useState } from "react";
import { Table } from "antd";

const getMod = (mod) => {
  const { engine, drive } = mod;
  const volume =
    engine.volume.toString().length === 1
      ? engine.volume + ".0"
      : engine.volume;

  let output = `${volume} ${engine.transmission} ${engine.power} л.с.`;
  if (drive) {
    output += ` ${drive}`;
  }

  return output;
};

const getDateTime = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};

const columns = [
  {
    title: "ID",
    dataIndex: "_id",
  },
  {
    title: "Марка/Модель",
    dataIndex: "auto",
    render: (auto) => `${auto.mark} ${auto.model}`,
  },
  {
    title: "Модификация",
    dataIndex: "mod",
    render: (mod) => `${getMod(mod)}`,
  },
  {
    title: "Комплектация",
    dataIndex: "equipmentName",
  },
  {
    title: "Стоимость",
    dataIndex: "price",
    render: (price) => `${new Intl.NumberFormat("ru-RU").format(price)} ₽`,
  },
  {
    title: "Дата создания",
    dataIndex: "createdAt",
    render: (createdAt) => `${getDateTime(new Date(createdAt))}`,
  },
];

export const TableCars = ({ data, models }) => {
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 20,
    },
  });

  const transformedData = data.data.map((obj) => {
    const { mark, model, engine, drive, ...rest } = obj;
    const auto = { mark, model };
    const mod = { engine, drive };
    return { auto, mod, ...rest };
  });

  const filterData = () => {
    if (models.length === 0) {
      return transformedData;
    } else {
      const filterData = [];
      transformedData.map(
        (car) => models.includes(car.auto.model) && filterData.push(car)
      );
      return filterData;
    }
  };

  console.log(filterData());

  const handleTableChange = (pagination) => {
    setTableParams({
      pagination,
    });
  };

  return (
    <Table
      columns={columns}
      dataSource={filterData()}
      pagination={tableParams.pagination}
      onChange={handleTableChange}
    />
  );
};
