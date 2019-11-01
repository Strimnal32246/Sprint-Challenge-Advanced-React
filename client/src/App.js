import React from "react";
import "./App.css";
import Player from "./components/Player.js";
import Navbar from "./components/NavBar.js";
import axios from "axios";

import "./styles.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: {}
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => this.setState({ playersData: res.data }))

      .catch(err => console.log(err));

    //.catch(err => console.log("error"));
  }

  render() {
    console.log(this.state.playersData);
    return (
      <div className="App">
        <Navbar />
        <h2>Player List!</h2>

        <Player playersData={this.state.playersData} />
      </div>
    );
  }
}

export default App;
