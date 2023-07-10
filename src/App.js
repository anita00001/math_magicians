import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './routes/Home';
import Calculator from './routes/CalculatorPage';
import Quote from './components/Quote';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <div className="App">
          <div className="App-wrapper">
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="calculator" element={<Calculator />} />
                <Route path="quote" element={<Quote />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
