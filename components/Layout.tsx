import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { Menu } from "antd";
import { HomeOutlined, UploadOutlined } from "@ant-design/icons";

type Props = {
  children?: ReactNode;
  title?: string;
  selected?: string
};

const Layout = ({ children, title = "This is the default title", selected}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Menu mode="horizontal" defaultSelectedKeys={[`${selected}`]}>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="upload" icon={<UploadOutlined />}>
            <Link href="/upload">
              <a>Upload Image</a>
            </Link>
          </Menu.Item>
        </Menu>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
    </footer>
  </div>
);

export default Layout;
