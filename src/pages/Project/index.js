import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../../components';
import { FilterMontAndYear } from '../../components/molecules';

export default function Index() {
  const navigate = useNavigate();

  return (
    <Layout
      heading={'List Project'}
      subHeading="This page for PIC after confim Inbox">
      <FilterMontAndYear />

      <div className="relative mt-4">
        {/* Section Filter */}
        <div className="relative my-6">Filter</div>
        {/* Table */}
        <div className="relative w-full overflow-auto bg-white p-4 rounded-xl">
          <table className="w-full rounded-xl bg-zinc-50">
            <thead className="border-b-2 border-gray-200">
              <tr className="text-base text-zinc-700 leading-relaxed">
                <th className="font-medium py-3 px-3 text-center" rowSpan={2}>
                  Action
                </th>
                <th className="font-medium py-3 px-3 text-center" rowSpan={2}>
                  No. IO
                </th>
                <th className="font-medium py-3 px-3 text-center" rowSpan={2}>
                  Project
                </th>
                <th className="font-medium py-3 px-3 text-center" rowSpan={2}>
                  Price
                </th>
                <th className="font-medium py-3 px-3 text-center" rowSpan={2}>
                  Mitra
                </th>
                <th className="font-medium py-3 px-3 text-center" rowSpan={2}>
                  COGS
                </th>
                <th
                  className="font-medium py-3 px-3 text-center border-l"
                  colSpan={7}>
                  Dokumen
                </th>
              </tr>
              <tr>
                <th className="font-medium py-3 px-3 text-center border border-gray-200">
                  Partnership
                </th>
                <th className="font-medium py-3 px-3 text-center border border-gray-200">
                  SPPH
                </th>
                <th className="font-medium py-3 px-3 text-center border border-gray-200">
                  SPH
                </th>
                <th className="font-medium py-3 px-3 text-center border border-gray-200">
                  BAKN
                </th>
                <th className="font-medium py-3 px-3 text-center border border-gray-200">
                  PKS
                </th>
                <th className="font-medium py-3 px-3 text-center border border-gray-200">
                  Amandemen
                </th>
                <th className="font-medium py-3 px-3 text-center border-t border-gray-200">
                  BAST
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="py-7 px-3 text-center">
                  <div className="relative flex justify-center items-center gap-3">
                    <button
                      onClick={() => navigate('/update')}
                      className="relative bg-indigo-100 text-indigo-700 rounded-md px-4 py-2 font-medium text-sm">
                      Update
                    </button>
                    <button
                      onClick={() => navigate('/update')}
                      className="relative bg-green-100 text-green-700 rounded-md px-4 py-2 font-medium text-sm">
                      Detail
                    </button>
                  </div>
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  IO-001
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  Pembelian Macbook Pro M1 Max
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  Rp 245.000.000,-
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  PT. BAYU MENCARI CINTA
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  Rp 200.000,-
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  <div
                    className="relative flex justify-center items-center"
                    title="Partnership">
                    <CheckIcon className="h-6 text-green-500" />
                  </div>
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  <div
                    className="relative flex justify-center items-center"
                    title="Sudah Upload SPPH">
                    <CheckIcon className="h-6 text-green-500" />
                  </div>
                </td>
                <td
                  className="py-7 px-3 text-center font-semibold text-zinc-800"
                  title="Belum Upload SPH">
                  <div className="relative flex justify-center items-center">
                    <XMarkIcon className="h-6 text-red-500" />
                  </div>
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  <div
                    className="relative flex justify-center items-center"
                    title="Belum Upload BAKN">
                    <XMarkIcon className="h-6 text-red-500" />
                  </div>
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  <div
                    className="relative flex justify-center items-center"
                    title="Belum Upload PKS">
                    <XMarkIcon className="h-6 text-red-500" />
                  </div>
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  <div
                    className="relative flex justify-center items-center"
                    title="Tidak ada Amandemen">
                    <XMarkIcon className="h-6 text-red-500" />
                  </div>
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  <div
                    className="relative flex justify-center items-center"
                    title="Belum Upload BAST">
                    <XMarkIcon className="h-6 text-red-500" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-7 px-3 text-center">
                  <div className="relative flex justify-center items-center gap-3">
                    <button
                      onClick={() => navigate('/update')}
                      className="relative bg-indigo-100 text-indigo-700 rounded-md px-4 py-2 font-medium text-sm">
                      Update
                    </button>
                    <button
                      onClick={() => navigate('/update')}
                      className="relative bg-green-100 text-green-700 rounded-md px-4 py-2 font-medium text-sm">
                      Detail
                    </button>
                  </div>
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  IO-002
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  Pembelian RTX 4090 FE
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  Rp 139.000.000,-
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  PT. HANIF SETIA
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  Rp 200.000,-
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  <div
                    className="relative flex justify-center items-center"
                    title="Tidak Partnership">
                    <XMarkIcon className="h-6 text-red-500" />
                  </div>
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  <div
                    className="relative flex justify-center items-center"
                    title="Sudah Upload SPPH">
                    <CheckIcon className="h-6 text-green-500" />
                  </div>
                </td>
                <td
                  className="py-7 px-3 text-center font-semibold text-zinc-800"
                  title="Sudah Upload SPH">
                  <div className="relative flex justify-center items-center">
                    <CheckIcon className="h-6 text-green-500" />
                  </div>
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  <div
                    className="relative flex justify-center items-center"
                    title="Sudah Upload BAKN">
                    <CheckIcon className="h-6 text-green-500" />
                  </div>
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  <div
                    className="relative flex justify-center items-center"
                    title="Belum Upload PKS">
                    <XMarkIcon className="h-6 text-red-500" />
                  </div>
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  <div
                    className="relative flex justify-center items-center"
                    title="Tidak ada Amandemen">
                    <XMarkIcon className="h-6 text-red-500" />
                  </div>
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  <div
                    className="relative flex justify-center items-center"
                    title="Belum Upload BAST">
                    <XMarkIcon className="h-6 text-red-500" />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-7 px-3 text-center">
                  <div className="relative flex justify-center items-center gap-3">
                    <button
                      onClick={() => navigate('/update')}
                      className="relative bg-indigo-100 text-indigo-700 rounded-md px-4 py-2 font-medium text-sm">
                      Update
                    </button>
                    <button
                      onClick={() => navigate('/update')}
                      className="relative bg-green-100 text-green-700 rounded-md px-4 py-2 font-medium text-sm">
                      Detail
                    </button>
                  </div>
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  IO-003
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  Pembelian Monitor Samsung Ark G9 Mini LED
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  Rp 39.000.000,-
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  PT. MUCHTAR ABADI
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  Rp 200.000,-
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  <div
                    className="relative flex justify-center items-center"
                    title="Partnership">
                    <CheckIcon className="h-6 text-green-500" />
                  </div>
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  <div
                    className="relative flex justify-center items-center"
                    title="Sudah Upload SPPH">
                    <CheckIcon className="h-6 text-green-500" />
                  </div>
                </td>
                <td
                  className="py-7 px-3 text-center font-semibold text-zinc-800"
                  title="Belum Upload SPH">
                  <div className="relative flex justify-center items-center">
                    <XMarkIcon className="h-6 text-red-500" />
                  </div>
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  <div
                    className="relative flex justify-center items-center"
                    title="Belum Upload BAKN">
                    <XMarkIcon className="h-6 text-red-500" />
                  </div>
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  <div
                    className="relative flex justify-center items-center"
                    title="Belum Upload PKS">
                    <XMarkIcon className="h-6 text-red-500" />
                  </div>
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  <div
                    className="relative flex justify-center items-center"
                    title="Tidak ada Amandemen">
                    <XMarkIcon className="h-6 text-red-500" />
                  </div>
                </td>
                <td className="py-7 px-3 text-center font-semibold text-zinc-800">
                  <div
                    className="relative flex justify-center items-center"
                    title="Belum Upload BAST">
                    <XMarkIcon className="h-6 text-red-500" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
