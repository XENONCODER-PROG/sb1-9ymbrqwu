import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PlayerPage } from './pages/PlayerPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/player/:playerId" element={<PlayerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;