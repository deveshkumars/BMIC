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
        <Link href="/massies">
          <Button className="font-semibold rounded-lg shadow-md px-6 py-3 hover:bg-black transition duration-200">
            See Portfolio Sample 1 (exterior) - 455 Massies Ln
          </Button>
        </Link>
        <Link href="/ellingham">
          <Button className="font-semibold rounded-lg shadow-md px-6 py-3 hover:bg-black transition duration-200">
            See Portfolio Sample 2 (exterior+interior) - 7293 Ellingham Ct
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;