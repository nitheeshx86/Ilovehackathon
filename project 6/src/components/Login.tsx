import React, { useState } from 'react';
import { User, Factory } from 'lucide-react';

interface LoginProps {
  onLogin: (role: 'manufacturer' | 'customer') => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (role: 'manufacturer' | 'customer') => {
    if (username && password) {
      onLogin(role);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-96">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Vehicle Authentication System</h1>
        
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 bg-gray-700 text-white rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 bg-gray-700 text-white rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <button
              onClick={() => handleSubmit('manufacturer')}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              <Factory size={20} />
              Manufacturer
            </button>
            <button
              onClick={() => handleSubmit('customer')}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              <User size={20} />
              Customer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};