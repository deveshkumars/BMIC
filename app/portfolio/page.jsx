// pages/index.js
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-8">See our work</h1>
      <div className="flex gap-4">
        <div className="grid grid-cols-2 gap-4 p-4 max-w-lg w-full"> </div>
        Coming soon
      </div>
    </div>
  );
};

export default HomePage;