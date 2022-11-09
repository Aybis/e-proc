import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Allocate,
  Amandemen,
  Home,
  Inbox,
  Monitoring,
  Project,
  UpdateProject,
} from './pages';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/amandemen" element={<Amandemen />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/allocate" element={<Allocate />} />
      <Route path="/project" element={<Project />} />
      <Route path="/update" element={<UpdateProject />} />
      <Route path="/monitoring" element={<Monitoring />} />
    </Routes>
  );
}
