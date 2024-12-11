import React from 'react';

export function Logo() {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <img 
          src="https://segucargo.com/wp-content/uploads/2023/10/Logo-Segucargo-2023.png"
          alt="Segucargo Logo"
          className="h-12 md:h-16 w-auto"
        />
      </div>
    </div>
  );
}