import { FC, lazy, Suspense } from "react";
import { MDXProvider } from "@mdx-js/react";
import DemoBlock from "../components/DemoBlock";

type Props = {
  path?: string;
};

const components = {
  DemoBlock,
};

const Demo: FC<Props> = ({ path }) => {
  const Content = lazy(
    async () => await import(`../docs/${path || ""}/index.mdx`)
  );
  return (
    <MDXProvider components={components}>
      <Suspense fallback={<div>Loading</div>}>
        <Content />
      </Suspense>
    </MDXProvider>
  );
};

export default Demo;
