import { FC } from "react";
import { Link } from "react-router-dom";

const PageHeader: FC = () => {
  return (
    <header className="h-16 w-full flex items-center justify-between shadow-md z-10 fixed top-0 left-0 bg-white">
      <div className="ml-8 font-mono flex items-center">
        <Link to="/">
          <img
            src="https://www.naiveui.com/assets/naivelogo.93278402.svg"
            className="h-8"
          />
        </Link>
        <Link to="/" className="ml-6 align-middle">
          G-UI
        </Link>
      </div>
      <div className="mr-8">
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
