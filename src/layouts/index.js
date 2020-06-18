/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Global, css } from "@emotion/core";
import Header from "./../components/site/header";

const Layout = ({ children, location }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;

            /* width */
            ::-webkit-scrollbar {
              width: 10px;
            }

            /* Track */
            ::-webkit-scrollbar-track {
              background: #fff;
              border-radius: 20px;
            }

            /* Handle */
            ::-webkit-scrollbar-thumb {
              background: #000;
              border-radius: 20px;
            }

            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
              background: #000;
            }
          }
          body {
            scroll-behavior: smooth;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            width: 100%;
            overflow-x: hidden;
            height: 100%;
          }
        `}
      />
      <Header location={location} />
      {children}
    </>
  );
};

export default Layout;