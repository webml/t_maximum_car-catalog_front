import { useState } from "react";
import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { TableCars } from "./components/TableCars";
import { SelectModel } from "./components/SelectModel";
import { SelectMark } from "./components/SelectMark/";

import { useGetCarsQuery } from "./redux";

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [mark, setMark] = useState("Audi");
  const [models, setModels] = useState([]);
  const { data = [], isLoading } = useGetCarsQuery(mark);

  return (
    <div className="App">
      <Layout
        style={{
          minHeight: "100vh",
          background: colorBgContainer,
        }}
      >
        <Content
          style={{
            margin: "16px",
          }}
        >
          <SelectMark setState={setMark} active={mark} />
          {!isLoading && (
            <div>
              <SelectModel data={data} setState={setModels} />
              <TableCars data={data} models={models} />
            </div>
          )}
        </Content>
      </Layout>
    </div>
  );
}

export default App;
