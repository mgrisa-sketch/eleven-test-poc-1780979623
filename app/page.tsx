'use client';

import { useState } from 'react';

export default function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-8 p-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Test Stack Eleven Group
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          POC Next.js 15 · TypeScript · Tailwind CSS
        </p>

        <button
          onClick={() => setClicked(!clicked)}
          className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          {clicked ? '✅ Bouton cliqué !' : '🚀 Cliquez-moi'}
        </button>

        {clicked && (
          <div className="mt-6 p-4 bg-green-100 border-2 border-green-400 rounded-lg animate-fade-in">
            <p className="text-green-800 font-medium">
              Stack Eleven Group fonctionne parfaitement ! 🎉
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
