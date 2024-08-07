import  { useState } from 'react';

const Converter = () => {
  const [rupees, setRupees] = useState('');
  const [dollars, setDollars] = useState('');
  const conversionRate = 82; // Example conversion rate: 1 Dollar = 82 Rupees

  const handleRupeesChange = (e) => {
    setRupees(e.target.value);
  };

  const handleDollarsChange = (e) => {
    setDollars(e.target.value);
  };

  const convertToDollars = () => {
    if (rupees !== '') {
      setDollars((rupees / conversionRate).toFixed(2));
    }
  };

  const convertToRupees = () => {
    if (dollars !== '') {
      setRupees((dollars * conversionRate).toFixed(2));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-slate-700">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h1 className="text-black text-2xl font-bold mb-4 text-center">Currency Converter</h1>
        <div className="mb-4 mt-8">
          <input
            type="number"
            placeholder="Enter amount in Rupees"
            value={rupees}
            onChange={handleRupeesChange}
            className="border p-2 mb-2 w-full rounded"
          />
          <button
            onClick={convertToDollars}
            className="bg-blue-500 text-white py-2 px-4 rounded w-full"
          >
            Convert to Dollars
          </button>
        </div>
        <div>
          <input
            type="number"
            placeholder="Enter amount in Dollars"
            value={dollars}
            onChange={handleDollarsChange}
            className="border p-2 mb-2 w-full rounded"
          />
          <button
            onClick={convertToRupees}
            className="bg-blue-500 text-white py-2 px-4 rounded w-full"
          >
            Convert to Rupees
          </button>
        </div>
      </div>
    </div>
  );
};

export default Converter;
