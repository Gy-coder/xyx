import { RouteObject } from "react-router-dom";
import Demo from "../pages/demo";

export function generateRouteConfig(): RouteObject[] {
  return require
    .context("../docs", true, /index.mdx?$/)
    .keys()
    .map((v) => v.replace(/^\.\//, "").replace(/\/index\.mdx?$/, ""))
    .map((path) => ({
      path,
      /* eslint-disable no-alert, no-console */
      element: <Demo path={path} />,
    }));
}
