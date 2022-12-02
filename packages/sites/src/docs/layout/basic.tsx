import React from "react";
import { Layout } from "@g-ui/components";

const { Header, Footer, Content } = Layout;

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
          header
        </div>
      </Header>
      <Content>
        <div
          style={{
            background: "#1f90e6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            height: "100%",
          }}
        >
          content
        </div>
      </Content>
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
        >
          footer
        </div>
      </Footer>
    </Layout>
  );
};

export default Demo;
