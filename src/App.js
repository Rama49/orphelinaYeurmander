import React from 'react';
import { Layout, Space } from 'antd';
import Headers from './Components/header/Headers';
 import Navbar from './Components/navbar/Navbar';
import Acceuil from './acceuil/Acceuil';


const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout>
    < Headers />
      < Navbar />
      < Acceuil />
      {/* <Content style={contentStyle}>Content</Content>
      <Footer style={footerStyle}>Footer</Footer> */}
    </Layout>

    
  </Space>
);
export default App;