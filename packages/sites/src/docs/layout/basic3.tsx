import React from "react";
import { Layout } from "@g-ui/components";

const { Header, Footer, Content, Aside } = Layout;

const Demo = () => {
  return (
    <Layout style={{ height: 500 }}>
      <Header>
        <div
          style={{
            background: "#80bde8",
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          Header
        </div>
      </Header>
      <Layout>
        <Content>
          <div
            style={{
              display: "flex",
              background: "#1f90e6",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              height: "100%",
            }}
          >
            Content
          </div>
        </Content>
        <Aside>
          <div
            style={{
              display: "flex",
              background: "#41a2e6",
              width: 100,
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              height: "100%",
            }}
          >
            Aside
          </div>
        </Aside>
      </Layout>
      <Footer>
        <div
          style={{
            background: "#80bde8",
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        ></div>
      </Footer>
    </Layout>
  );
};

export default Demo;
