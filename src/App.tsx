import React, { FunctionComponent } from 'react';

interface AppProps {
  message?: string;
}

const App: FunctionComponent<AppProps> = ({ message }) => {
  return <h1>{message || "Hello World"}</h1>;
}

export default App;
