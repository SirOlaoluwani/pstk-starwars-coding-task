import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

export default function DefaultFooter() {
    return (
      <Footer className="lg:absolute bottom-0 w-full bg-black m-auto text-light-grey">
        Footer
      </Footer>
    );
}