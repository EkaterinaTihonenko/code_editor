import { useState, useEffect, useContext } from "react";

import { DataContext } from "../helpers/DataProvider";

import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  height: 40vh;
  width: 85vw;
  margin: auto;
`;

export const Result = () => {
  const [src, setSrc] = useState("");
  const { html, css } = useContext(DataContext);

  const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
        </html>
    `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css]);

  return (
    <Container
      style={
        html || css ? { background: "#ffffff", borderRadius: "20px" } : null
      }
    >
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </Container>
  );
};
