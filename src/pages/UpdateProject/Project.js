import React from 'react';

export default function Project() {
  return (
    <div className="relative flex flex-col gap-2">
      <div className="relative">
        <label htmlFor="mitra" className="text-base font-medium text-zinc-800">
          No. IO
        </label>
        <input
          type="text"
          disabled
          value="IO-001 "
          className="pointer-events-none mt-2 px-4 py-3 w-full border rounded-md border-gray-200 text-sm font-semibold text-zinc-900"
        />
      </div>
      <div className="relative">
        <label htmlFor="mitra" className="text-base font-medium text-zinc-800">
          Judul
        </label>
        <input
          type="text"
          disabled
          value="Pembelian Macbook Pro M1 Max"
          className="pointer-events-none mt-2 px-4 py-3 w-full border rounded-md border-gray-200 text-sm font-semibold text-zinc-900"
        />
      </div>
      <div className="relative">
        <label htmlFor="mitra" className="text-base font-medium text-zinc-800">
          Harga
        </label>
        <input
          type="text"
          disabled
          value="245.000.000"
          className="pointer-events-none mt-2 px-4 py-3 w-full border rounded-md border-gray-200 text-sm font-semibold text-zinc-900"
        />
      </div>
    </div>
  );
}
