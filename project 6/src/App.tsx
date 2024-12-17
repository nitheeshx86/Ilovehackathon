import React, { useState } from 'react';
import { Login } from './components/Login';
import { ManufacturerDashboard } from './components/ManufacturerDashboard';
import { CustomerDashboard } from './components/CustomerDashboard';

function App() {
  const [userRole, setUserRole] = useState<'manufacturer' | 'customer' | null>(null);

  const handleLogin = (role: 'manufacturer' | 'customer') => {
    setUserRole(role);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {!userRole ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <nav className="bg-gray-800 p-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold text-white">Vehicle Authentication System</h1>
              <button
                onClick={() => setUserRole(null)}
                className="text-gray-300 hover:text-white"
              >
                Logout
              </button>
            </div>
          </nav>
          
          {userRole === 'manufacturer' ? (
            <ManufacturerDashboard />
          ) : (
            <CustomerDashboard />
          )}
        </div>
      )}
    </div>
  );
}

export default App;