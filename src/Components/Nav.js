import React from 'react'
import {Link} from "react-router-dom"
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';


const { Header, Sider } = Layout;

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
                <div className="logo" />
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
    )
}

export default Nav
