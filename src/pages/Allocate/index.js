import React from 'react';
import { Layout } from '../../components';
import { FilterMontAndYear } from '../../components/molecules';

export default function Index() {
  const dummyData = [
    {
      id: 1,
      no_io: 'IO-001',
      name_project: 'Pengadaan Macbook Pro M1 Max',
      amount: 145000000,
      date: '2021-11-01',
    },
    {
      id: 2,
      no_io: 'IO-002',
      name_project: 'Pengadaan Macbook Pro M1 Max',
      amount: 145000000,
      date: '2021-11-01',
    },
    {
      id: 3,
      no_io: 'IO-003',
      name_project: 'Pengadaan Macbook Pro M1 Max',
      amount: 145000000,
      date: '2021-11-01',
    },
    {
      id: 4,
      no_io: 'IO-004',
      name_project: 'Pengadaan Macbook Pro M1 Max',
      amount: 145000000,
      date: '2021-11-01',
    },
  ];

  return (
    <Layout
      heading={'Allocate'}
      subHeading="This page for PIC after Manager assign">
      <FilterMontAndYear />

      <div className="relative mt-4">
        {/* Section Filter */}
        <div className="relative my-6">Filter</div>
        {/* Table */}
        <div className="relative w-full overflow-auto bg-white p-4 rounded-xl">
          <table className="w-full">
            <thead className="border-b-2 border-gray-200">
              <tr className="text-base text-zinc-700 leading-relaxed">
                <th className="font-medium py-3 px-3 text-center">No</th>
                <th className="font-medium py-3 px-3 text-center">No. IO</th>
                <th className="font-medium py-3 px-3 text-center">Project</th>
                <th className="font-medium py-3 px-3 text-center">Price</th>
                <th className="font-medium py-3 px-3 text-center">Date</th>
                <th className="font-medium py-3 px-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((data, index) => (
                <tr
                  key={index}
                  className="text-base text-zinc-700 leading-relaxed">
                  <td className="py-3 px-3 text-center">{index + 1}</td>
                  <td className="py-3 px-3 text-center font-semibold text-zinc-800">
                    {data.no_io}
                  </td>
                  <td className="py-3 px-3 text-center ">
                    {data.name_project}
                  </td>
                  <td className="py-3 px-3 text-center font-semibold text-zinc-800">
                    Rp {data.amount.toLocaleString('id-ID')},-
                  </td>
                  <td className="py-3 px-3 text-center">{data.date}</td>
                  <td className="py-3 px-3 text-center">
                    <div className="relative flex justify-center items-center gap-3">
                      <button className="relative bg-indigo-100 text-indigo-700 rounded-md px-4 py-2 font-medium text-sm">
                        Update
                      </button>
                      <button className="relative bg-green-100 text-green-700 rounded-md px-4 py-2 font-medium text-sm">
                        Detail
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
