import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <BaseRouter />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
