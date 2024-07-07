import "./App.css";

import { Layout, Menu } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import "./App.css";
import React from "react";
import { Button } from "antd";
const { Header, Content, Footer } = Layout;
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return <Test />;
}

export function SectionComponent() {
  const handleSubmit = (e) => {
    console.log("Submit!");
  };
//home page 
  return (
    <div>
      <h2>MOHAMMED</h2>

      <Button
        style={{ width: "100%" }}
        type="primary"
        onClick={() => handleSubmit()}
      >
        Button
      </Button>

      <div
        style={{
          borderTop: "1px solid #ccc",
          marginTop: "20px",
          paddingTop: "20px",
        }}
      />

      <MessageComponent title={"Hello World"} />
    </div>
  );
}
//message setting 
const MessageComponent = ({ title }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      {title}
    </div>
  );
};
//in all pages nav bar ,footer,
function Test() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <a href="/">Home</a>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <a href="/about">about</a>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Routes>
            <Route path="/" element={<SectionComponent />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>This is the about page.</p>
    </div>
  );
}
