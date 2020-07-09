import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

const { Sider } = Layout
const { Item } = Menu

function SideBar() {
  return (
    <Sider
      style={{
        height: '100vh',
        position: 'fixed',
        overflow: 'auto',
        left: 0,
      }}
      theme="light"
    >
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
        <Item key="1">
          <Link to="/">Books</Link>
        </Item>
        <Item key="2">
          <Link to="/shelves">Shelves</Link>
        </Item>
      </Menu>
    </Sider>
  )
}

export default SideBar
