import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import GameProvider from "./contexts/GameContext";
import CharacterProvider from "./contexts/CharacterContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <CharacterProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </CharacterProvider>
  </React.StrictMode>
);
