import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import { Layout } from 'antd';

import Nav from "./Components/Nav"
import SignIn from "./Views/SignIn"
import Home from "./Views/Home"
import './App.css';
import SignUp from './Views/SignUp';
import Eventos from './Views/Eventos';
import CrearEvento from './Views/CrearEvento';


const { Header, Content, Footer } = Layout;

function App() {
  return (

    <div className="App">
      <Layout className="layout">
        <Nav/>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/eventos" component={Eventos} />
                <Route exact path="/crearEvento" component={CrearEvento} />
                <Route path="/login" component={SignIn} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}></Footer>
        </Layout>
      </Layout>
      {/**footer */}
    </div>
  );
}

export default App;
