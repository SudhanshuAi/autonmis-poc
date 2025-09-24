// File: frontend/app/page.js

'use client'; // This is crucial - it tells Next.js this is an interactive client component

import { useState } from 'react';

export default function Home() {
  const [dataResult, setDataResult] = useState('Click the button above...');
  const [statusResult, setStatusResult] = useState('Click the button above...');
  const [actionResult, setActionResult] = useState('Click the button above...');

  const getData = async () => {
    try {
      const response = await fetch('/api/data/info');
      const data = await response.json();
      setDataResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setDataResult('Error fetching data.');
    }
  };

  const getStatus = async () => {
    try {
      const response = await fetch('/api/status/health');
      const data = await response.json();
      setStatusResult(data.status);
    } catch (error) {
      setStatusResult('Error fetching status.');
    }
  };

  const triggerAction = async () => {
    try {
      const response = await fetch('/api/action/execute', { method: 'POST' });
      const data = await response.json();
      setActionResult(data.message);
    } catch (error) {
      setActionResult('Error triggering action.');
    }
  };

  // --- STYLE DEFINITIONS ---
  const mainStyle = {
    fontFamily: 'sans-serif',
    padding: '2em',
    backgroundColor: 'white', // Set background to white
    color: 'black',           // Set default text color to black
  };

  const buttonStyle = {
    backgroundColor: '#f0f0f0',
    color: 'black',
    border: '1px solid #ccc',
    padding: '8px 16px',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '1em',
    display: 'block', // Make buttons take up their own line
    marginTop: '1.5em',
  };

  const resultBoxStyle = {
    marginTop: '0.5em',
    padding: '1em',
    border: '1px solid #ccc',
    backgroundColor: '#f9f9f9',
    whiteSpace: 'pre-wrap',
    fontFamily: 'monospace',
  };
  // --- END OF STYLE DEFINITIONS ---

  return (
    <main style={mainStyle}>
      <h1>Autonmis POC</h1>
      
      <button style={buttonStyle} onClick={getData}>Get Data from Data API</button>
      <div style={resultBoxStyle}>{dataResult}</div>

      <button style={buttonStyle} onClick={getStatus}>Get Status from Status API</button>
      <div style={resultBoxStyle}>{statusResult}</div>

      <button style={buttonStyle} onClick={triggerAction}>Trigger Action on Action API</button>
      <div style={resultBoxStyle}>{actionResult}</div>
    </main>
  );
}