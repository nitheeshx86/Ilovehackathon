import React, { useState } from 'react';
import { Scan } from 'lucide-react';
import { getPartDetails } from '../utils/web3';

export const QRScanner = () => {
  const [scanning, setScanning] = useState(false);
  const [partDetails, setPartDetails] = useState<any>(null);

  const handleScan = async () => {
    setScanning(true);
    // Simulate QR scan
    setTimeout(async () => {
      const details = await getPartDetails("dummy-token-id");
      setPartDetails(details);
      setScanning(false);
    }, 1500);
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">QR Scanner</h2>
      <button
        onClick={handleScan}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        <Scan size={20} />
        {scanning ? 'Scanning...' : 'Scan QR Code'}
      </button>
      
      {partDetails && (
        <div className="mt-4 p-4 bg-gray-700 rounded">
          <h3 className="text-xl text-white mb-2">Part Details</h3>
          <div className="text-gray-300">
            <p>Manufacturer: {partDetails.manufacturer}</p>
            <p>Part ID: {partDetails.partId}</p>
            <p>Manufacture Date: {partDetails.manufactureDate}</p>
            <p>Transaction: {partDetails.transactionHash}</p>
          </div>
        </div>
      )}
    </div>
  );
};