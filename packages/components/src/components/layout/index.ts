import InternalLayout from "./Layout";
import Header from "./Header";
import Content from "./Content";
import Aside from "./Aside";
import Footer from "./Footer";

type InternalLayoutType = typeof InternalLayout;

type LayoutProps = InternalLayoutType & {
  Header: typeof Header;
  Content: typeof Content;
  Footer: typeof Footer;
  Aside: typeof Aside;
};

const Layout = InternalLayout as LayoutProps;
Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;
Layout.Aside = Aside;

export default Layout;
