import React from "react";
import CharacterList from "../CharacterList";
import HeroList from "../HeroList";
import "../../styles/index.css";

function App() {
  return (
    <div className="App">
      <h2>Supersquad</h2>
      <div className="col-md-6">
        <CharacterList />
      </div>
      <div className="col-md-6">
        <HeroList />
      </div>
    </div>
  );
}

export default App;
