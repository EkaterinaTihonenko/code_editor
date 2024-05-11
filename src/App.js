import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import DataProvider from "./helpers/DataProvider";
import { CodePen } from "./components/CodePen";

export const App = () => {
  return (
    <div className="app">
      <Router basename="/code_editor/">
        <div className="code">
          <DataProvider>
            <CodePen />
          </DataProvider>
        </div>
      </Router>
    </div>
  );
};
