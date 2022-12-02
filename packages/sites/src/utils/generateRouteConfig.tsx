import { RouteObject } from "react-router-dom";
import Docs from "../pages/docs";

export function generateRouteConfig(): RouteObject[] {
  return require
    .context("../docs", true, /index.mdx?$/)
    .keys()
    .map((v) => v.replace(/^\.\//, "").replace(/\/index\.mdx?$/, ""))
    .map((path) => ({
      path,
      /* eslint-disable no-alert, no-console */
      element: <Docs path={path} />,
    }));
}
