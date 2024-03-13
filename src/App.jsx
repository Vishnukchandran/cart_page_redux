import React from "react";
import DataContextComponents from "./Utils/DataContextComponents";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      <div className="row">
        <DataContextComponents>
          <Card />
        </DataContextComponents>
      </div>
    </div>
  );
};

export default App;
