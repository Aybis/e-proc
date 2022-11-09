import React, { useState } from 'react';

export default function Form({ children, heading, isShow = false }) {
  const [minimize, setminimize] = useState(isShow);
  return (
    <div className="relative mt-8">
      <h1 className="text-lg font-semibold text-zinc-800 leading-relaxed">
        {heading}
      </h1>
      <div className="absolute top-0 right-3">
        <button
          onClick={() => setminimize(!minimize)}
          className={['relative bg-zinc-800 p-2 rounded-md '].join(' ')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={[
              'h-6 w-6 text-white transform transition-all duration-300 ',
              minimize ? 'rotate-180' : 'rotate-0',
            ].join(' ')}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      <div
        className={[
          'relative mt-4 bg-white p-6 rounded-md flex flex-col gap-3 box-border transition-all duration-500 ease-in-out',
          minimize ? 'h-full' : 'h-0',
          minimize ? 'block' : 'hidden',
        ].join(' ')}>
        {children}
      </div>
    </div>
  );
}
