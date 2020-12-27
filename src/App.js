import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Layout from './Layouts/Layout';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <Layout>
      <Route path="/" exact component={Dashboard} />
    </Layout>
  );
}

export default App;
