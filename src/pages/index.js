/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { HomePhoneTemplateAreas, HomeTabletTemplateAreas, HomeDesktopTemplateAreas } from "./../window/index";
import LogoSection from "./../components/site/logo-section";
import AuthorSection from "../components/site/author-section";

export default () => {
  return (
    <div
      sx={{
        width: "100%",
        height: "100%",
        maxWidth: "1200px",
        margin: "1em"
      }}
    >
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: ["1fr", "500px 1fr", "500px 1fr"],
          gridAutoRows: "100px 1fr",
          gridTemplateAreas: [HomePhoneTemplateAreas, HomeTabletTemplateAreas, HomeDesktopTemplateAreas],
          width: "100%",
          height: "100vh",
          background: "#1E2224",
          maxWidth: "1200px"
        }}
      >
        <LogoSection />
        <AuthorSection />
      </div>
    </div>
  );
};