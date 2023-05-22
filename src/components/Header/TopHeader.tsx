import {
  Layout,
  Col,
  Box,
  MenuList,
  Menu,
  MenuLink,
} from "./TopHeaderElements";

import { useState, useEffect } from "react";

const TopHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <Layout>
      <Col>
        <Box
          style={{
            background: scrollPosition < 80 ? "transparent" : "#fff",
            color: scrollPosition < 80 ? "#fff" : "#000",
          }}
        >
          <MenuList>
            <Menu>
              <MenuLink href="/">HOME</MenuLink>
            </Menu>
            <Menu>사이트맵</Menu>      
          </MenuList>
        </Box>
      </Col>
    </Layout>
  );
};

export default TopHeader;