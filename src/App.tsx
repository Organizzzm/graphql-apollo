import React from "react";
import "./App.css";

import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./init/client";
import { Pet } from "./bus/pet";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Pet />
      </div>
    </ApolloProvider>
  );
}

export default App;
