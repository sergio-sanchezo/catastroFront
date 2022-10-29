import { UserOutlined, HomeOutlined, CompassOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { useState } from 'react'
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const { Header, Content, Sider, Footer } = Layout

const AppLayout = ({ children, selectedKey }: { children: JSX.Element; selectedKey?: string[] }) => {
  const [collapsed, setCollapsed] = useState(false)

  const layoutSections = [
    {
      label: 'Predios',
      path: '/predios',
      icon: <CompassOutlined />
    },
    {
      label: 'Propietarios',
      path: '/propietarios',
      icon: <UserOutlined />
    },
    {
      label: 'Construcciones',
      path: '/construcciones',
      icon: <HomeOutlined />
    },
    {
      label: 'Terreno',
      path: '/terreno',
      icon: <EnvironmentOutlined />
    }
  ]

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={selectedKey}>
          {layoutSections.map((e, i) => {
            return (
              <Menu.Item icon={e.icon} key={(i + 1).toString()}>
                <Link href={e.path}>{e.label}</Link>
              </Menu.Item>
            )
          })}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="header_title" style={{ padding: 0 }}>
          <h2>CATASTRO</h2>
        </Header>
        <Content style={{ overflow: 'auto' }}>
          <div
            style={{
              padding: '54px'
              // minHeight: '100vh'
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Prueba técnica, Sergio Alejandro Sanchez Ortiz</Footer>
      </Layout>
    </Layout>
  )
}

export default AppLayout
