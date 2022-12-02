import { FC } from "react";
import { Link } from "react-router-dom";

const PageHeader: FC = () => {
  return (
    <header className="h-16 w-full flex items-center justify-between shadow-md z-10  bg-white border-b border-solid border-b-gray-300 px-8 fixed top-0 left-0">
      <div className="font-mono flex items-center">
        <Link to="/">
          <img src={require("../assets/logo.png")} className="h-8" />
        </Link>
        <Link to="/" className="ml-6 align-middle">
          G-UI
        </Link>
      </div>
      <div>
        <Link to="/" className="hover:bg-gray-200 px-4 py-1 rounded">
          首页
        </Link>
        <Link to="/docs/button" className="hover:bg-gray-200 px-4 py-1 rounded">
          组件
        </Link>
        <Link
          to="http://github.com"
          className="hover:bg-gray-200 px-4 py-1 rounded"
        >
          Github
        </Link>
      </div>
    </header>
  );
};

export default PageHeader;
