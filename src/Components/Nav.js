import React from 'react'
import {Link} from "react-router-dom"
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, HomeOutlined } from '@ant-design/icons';


const { Sider } = Layout;

function Nav() {
    return (
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
                        <Link to="/signUp">Registrate</Link>
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
    )
}

export default Nav
