import { Code } from "./Code";
import { Result } from "./Result";

export const CodePen = () => {
  return (
    <div className="code_wrapp">
      <div className="q">
        <Code />
      </div>
      <Result />
    </div>
  );
};
