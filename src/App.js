import React from "react";
import { Layout, Space } from "antd";
import Headers from "./Components/header/Headers";
import Navbar from "./Components/navbar/Navbar";
import Acceuil from "./Components/acceuil/Acceuil";
import { Content } from "antd/es/layout/layout";
import Cause from "./causes/Cause";

const App = () => (
  <Space
    direction="vertical"
    style={{
      width: "100%",
    }}
    size={[0, 48]}
  >
    <Layout>
      <Headers />
      <Navbar />
      <Content>
        <Acceuil />
        < Cause />
      </Content>
    </Layout>
  </Space>
);
export default App;
