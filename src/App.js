import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Layout, Menu } from 'antd';
import { HomeOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

import Home from "./Views/Home"
import './App.css';
import SignIn from './Views/SignIn';
import Eventos from './Views/Eventos';
import CrearEvento from './Views/CrearEvento';


const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (

    <div className="App">
      {/**Header */}
      <Layout className="layout">
        <Sider
          breakpoint="md"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo">
            <Link to="/">
              <HomeOutlined/>
            </Link>
            
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/signin">Sign In</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/eventos">Eventos disponibles</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/crearEvento">Crear evento</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined />}>
              <Link to="/users">Buscar usuario</Link>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/eventos" component={Eventos} />
                <Route exact path="/crearEvento" component={CrearEvento} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>


      </Layout>


      {/**footer */}
    </div>
  );
}

export default App;
