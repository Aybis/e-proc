import React from 'react';

export default function Mitra() {
  return (
    <div className="relative flex flex-col gap-2">
      <div className="relative">
        <label htmlFor="mitra" className="text-base font-medium text-zinc-800">
          Mitra
        </label>
        <input
          type="text"
          placeholder="Type Mitra"
          className="mt-2 px-4 py-3 w-full border rounded-md border-gray-200 text-sm font-semibold text-zinc-900"
        />
      </div>
      <div className="relative">
        <label htmlFor="mitra" className="text-base font-medium text-zinc-800">
          Judul
        </label>
        <input
          type="text"
          placeholder="Judul Pekerjaan"
          className="mt-2 px-4 py-3 w-full border rounded-md border-gray-200 text-sm font-semibold text-zinc-900"
        />
      </div>
      <div className="relative">
        <label htmlFor="mitra" className="text-base font-medium text-zinc-800">
          COGS
        </label>
        <input
          type="text"
          placeholder="COGS"
          className="mt-2 px-4 py-3 w-full border rounded-md border-gray-200 text-sm font-semibold text-zinc-900"
        />
      </div>
    </div>
  );
}
