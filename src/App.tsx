import React, { FunctionComponent } from 'react';

// Components
import Header from './components/header/header.components';

interface AppProps {
  message?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const App: FunctionComponent<AppProps> = ({ message }) => {
  return <Header/>;
}

export default App;
