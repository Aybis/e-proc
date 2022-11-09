import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Index({ children }) {
  return (
    <div className="relative min-h-screen max-h-full max-w-full">
      <div className="relative max-w-full pl-64">
        {/* Sidebar */}
        <Sidebar />

        {/* Section Header */}
        <Header />
        {/* End Section Header */}

        {/* Container Header and Main */}
        <div className="relative w-full">
          {/* Section Main Content */}
          <main className="relative bg-zinc-50 p-4 min-h-screen max-h-full max-w-full">
            {children}
          </main>
          {/*End Section Main Content */}
        </div>
      </div>
    </div>
  );
}
