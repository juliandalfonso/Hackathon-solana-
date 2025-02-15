'use client';

import React from 'react';

export default function Formulario() {
  return (
    <div className="flex justify-center items-center h-screen">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="space-y-2">
    <input
      className="rounded-lg px-4 py-2 w-full bg-gray-200 outline-none"
      type="text"
      placeholder="Nombre de tu árbol"
    />
  </div>
  <div className="space-y-2">
    <input
      className="rounded-lg px-4 py-2 w-full bg-gray-200 outline-none"
      type="email"
      placeholder="Hash de tu árbol"
    />
  </div>
  <div className="space-y-2">
    <textarea
      className="rounded-lg px-4 py-2 w-full h-24 bg-gray-200 outline-none"
      placeholder="Personaliza tu placa"
    ></textarea>
  </div>
</div>

<div className="ml-8 relative">
  {/* web\public\img\location-background.png */}
  <img
    className="min-w-4 h-64 object-cover rounded-lg"
    src="/img/location-background.png"
    alt="Location"
  />

  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 shadow-md rounded-lg flex">
    <div className="w-1/2 p-6">
      <h2 className="text-md font-semibold">Agrobot</h2>
      <p className="text-gray-700">+7 (999) 999-99-99</p>
      <p className="text-gray-700">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
    </div>
    <div className="w-1/2 flex justify-center items-center">
      <img
        className="w-32 min-h-full object-cover rounded-lg "
        src="/img/plaque.jpg"
        alt="Imagen"
      />
    </div>
  </div>
</div>

    </div>
  );
}
