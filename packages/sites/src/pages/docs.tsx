import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "@g-ui/components";
import PageHeader from "../components/PageHeader";

const { Header, Content, Aside } = Layout;

const Docs: FC = () => {
  return (
    <>
      <Layout>
        <Header className="min-h-[64px]">
          <PageHeader />
        </Header>
        <Layout>
          <Aside>
            <div className="pt-8 w-64 pl-4 h-[calc(100vh-64px)] min-w-fit border-r border-solid border-r-gray-300">
              Aside
            </div>
          </Aside>
          <Content>
            <div className="pt-8 ml-8 mr-[96px] h-[calc(100vh-64px)]">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Docs;
