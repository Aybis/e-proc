import React from 'react';

export default function SPH() {
  return (
    <div className="relative flex flex-col gap-2">
      <div className="relative">
        <label htmlFor="mitra" className="text-base font-medium text-zinc-800">
          No. SPH
        </label>
        <input
          type="text"
          placeholder="No. SPH"
          className="mt-2 px-4 py-3 w-full border rounded-md border-gray-200 text-sm font-semibold text-zinc-900"
        />
      </div>
      <div className="relative">
        <label htmlFor="mitra" className="text-base font-medium text-zinc-800">
          Tanggal Dokumen
        </label>
        <input
          type="date"
          placeholder="Judul Pekerjaan"
          className="mt-2 px-4 py-3 w-full border rounded-md border-gray-200 text-sm font-semibold text-zinc-900"
        />
      </div>
      <div className="relative">
        <label htmlFor="mitra" className="text-base font-medium text-zinc-800">
          File
        </label>
        <input
          type="file"
          placeholder="Judul Pekerjaan"
          className="mt-2 px-4 py-3 w-full border rounded-md border-gray-200 text-sm font-semibold text-zinc-900"
        />
      </div>
    </div>
  );
}
