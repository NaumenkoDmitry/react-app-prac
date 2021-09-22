import React, { Component } from "react";
import "./App.css";
// import AlohaDashboard from "./components/AlohaDashboard";
import UserList from "./components/SelectedUsersList";
// import userDb from "./users";

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        {/* <AlohaDashboard /> */}
        <UserList />)
      </React.StrictMode>
    );
  }
}

export default App;
