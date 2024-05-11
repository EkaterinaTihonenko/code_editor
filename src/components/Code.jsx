import { useContext } from "react";
import { Editor } from "./Editor";
import { Box, styled } from "@mui/material";
import { DataContext } from "../helpers/DataProvider";
import htmlImg from "../assets/images/html-5-svgrepo-com.svg";
import cssImg from "../assets/images/css-3-svgrepo-com.svg";

const Container = styled(Box)`
  background-color: transparent;
  height: 300px;
  display: flex;
`;

export const Code = () => {
  const { html, css, setHtml, setCss } = useContext(DataContext);

  return (
    <Container>
      <Editor
        language="xml"
        heading="HTML"
        value={html}
        onChange={setHtml}
        icon={<img src={htmlImg} alt="logo" style={{ width: 40 }} />}
        color="#1d1e22"
      />
      <Editor
        language="css"
        heading="CSS"
        value={css}
        onChange={setCss}
        icon={<img src={cssImg} alt="logo" style={{ width: 40 }} />}
        color="#1d1e22"
      />
    </Container>
  );
};
