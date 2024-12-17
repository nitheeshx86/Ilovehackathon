import React, { useState } from 'react';
import { Car, Share2 } from 'lucide-react';
import { transferPart } from '../utils/web3';
import { QRScanner } from './QRScanner';

export const CustomerDashboard = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
  const [showTransfer, setShowTransfer] = useState(false);
  const [transferAddress, setTransferAddress] = useState('');

  const vehicles = [
    {
      id: 1,
      name: "Tesla Model S",
      parts: [
        { id: "ENG-123", name: "Electric Motor", date: "2024-01-15" },
        { id: "BAT-456", name: "Battery Pack", date: "2024-01-15" },
        { id: "TRN-789", name: "Transmission", date: "2024-01-15" }
      ]
    }
  ];

  const handleTransfer = async (partId: string) => {
    if (!transferAddress) return;
    await transferPart(transferAddress, partId);
    setShowTransfer(false);
    setTransferAddress('');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">My Vehicles</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            onClick={() => setSelectedVehicle(vehicle)}
            className="bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700"
          >
            <Car className="text-blue-500 mb-2" size={32} />
            <h3 className="text-xl font-semibold text-white">{vehicle.name}</h3>
          </div>
        ))}
      </div>

      {selectedVehicle && (
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Vehicle Parts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedVehicle.parts.map((part: any) => (
              <div key={part.id} className="bg-gray-800 p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{part.name}</h3>
                    <p className="text-gray-400">ID: {part.id}</p>
                    <p className="text-gray-400">Date: {part.date}</p>
                  </div>
                  <button
                    onClick={() => setShowTransfer(true)}
                    className="text-blue-500 hover:text-blue-400"
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showTransfer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg w-96">
            <h3 className="text-xl font-bold text-white mb-4">Transfer Part</h3>
            <input
              type="text"
              placeholder="Enter recipient address"
              className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
              value={transferAddress}
              onChange={(e) => setTransferAddress(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowTransfer(false)}
                className="px-4 py-2 text-gray-300 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => handleTransfer("dummy-part-id")}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Transfer
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8">
        <QRScanner />
      </div>
    </div>
  );
};