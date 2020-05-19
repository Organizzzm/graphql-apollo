import React from "react";
import "./App.css";

import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./init/client";
import { Pet } from "./bus/pet";
import { Customer } from "./bus/customer";
import { Login } from "./bus/customer/login";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Login />
        <Customer />
        <Pet />
      </div>
    </ApolloProvider>
  );
}

export default App;
