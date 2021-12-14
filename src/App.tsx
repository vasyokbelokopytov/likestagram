import React from 'react';
import { Header } from './components/Header';
import { Layout } from './components/Layout';

const App: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <Header />
      <Layout />
    </div>
  );
};

export default App;
