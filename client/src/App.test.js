import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";
import Players from "./components/Player";
import Playerlist from "./components/PlayerCard";
import Navbar from "./components/Navbar.js";
import PlayerCard from "./components/PlayerCard";

// afterEach(rtl.cleanup);
// it("renders without crashing", () => {
// const div = document.createElement("div");
// ReactDOM.render(<App />, div);
// ReactDOM.unmountComponentAtNode(div);
// });

test("Players Exist", async () => {
  const { findByText } = await render(<Players />);
  findByText(/Player/i);
});

test("This should verify that Women's World Cup renders in the navbar", () => {
  const { getByText } = render(<Navbar />);
  getByText(/Womans/i);
  getByText(/world/i);
});

 test("Should have text (player name)", async () => {
    const { findByText } = await render(<PlayerCard />);
      findByText(/alex morgan/i);
    findByText(/abby dahlkemper/i);
  });
