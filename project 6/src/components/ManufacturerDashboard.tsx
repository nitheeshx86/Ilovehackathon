import React, { useState } from 'react';
import { Plus, QrCode } from 'lucide-react';
import { mintVehiclePart } from '../utils/web3';

export const ManufacturerDashboard = () => {
  const [parts, setParts] = useState<any[]>([]);
  const [minting, setMinting] = useState(false);

  const handleMintPart = async () => {
    setMinting(true);
    const partId = `PART-${Math.random().toString(16).slice(2, 8)}`;
    const txHash = await mintVehiclePart(partId, "Engine V8");
    
    setParts([...parts, {
      id: partId,
      type: "Engine",
      txHash,
      date: new Date().toISOString()
    }]);
    setMinting(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Manufacturer Dashboard</h1>
        <button
          onClick={handleMintPart}
          disabled={minting}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          <Plus size={20} />
          {minting ? 'Minting...' : 'Mint New Part'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {parts.map((part) => (
          <div key={part.id} className="bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-white">{part.type}</h3>
                <p className="text-gray-400">ID: {part.id}</p>
                <p className="text-gray-400">Date: {new Date(part.date).toLocaleDateString()}</p>
                <p className="text-gray-400 truncate">Tx: {part.txHash}</p>
              </div>
              <QrCode className="text-blue-500" size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};