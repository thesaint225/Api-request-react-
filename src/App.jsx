import React from "react";

import { Menubar } from "primereact/menubar";
import Counter from "./component/Counter";
import { Card } from "primereact/card";
import Greet from "./Greet";
import UserList from "./component/Services/UserList";
import UserDetails from "./UserDetails";

function App() {
  return (
    <div className="App">
      <Menubar className="bg-blue-700 text-3xl text-white" start={"welcome"} />
      {/* <Counter /> */}
      <Greet />
      {/* <UserList /> */}
      <UserDetails />
    </div>
  );
}

export default App;
