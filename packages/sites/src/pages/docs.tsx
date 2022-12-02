import { FC, lazy, Suspense } from "react";
import { MDXProvider } from "@mdx-js/react";
import DemoBlock from "../components/DemoBlock";

type Props = {
  path?: string;
};

const components = {
  DemoBlock,
};

const Docs: FC<Props> = ({ path }) => {
  const Content = lazy(
    async () => await import(`../docs/${path || ""}/index.mdx`)
  );
  return (
    <div>
      <MDXProvider components={components}>
        <Suspense fallback={<div>Loading</div>}>
          <Content />
        </Suspense>
      </MDXProvider>
    </div>
  );
};

export default Docs;
