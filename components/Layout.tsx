import React from 'react';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <h1>Home</h1>
      </nav>
      {children}
    </div>
  );
}

export default Layout;
