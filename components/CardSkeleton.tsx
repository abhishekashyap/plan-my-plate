import React from "react";

export default function CardSkeleton() {
  return (
    <div className='border p-6 m-4 bg-gray-100 border-gray-150 shadow rounded-lg w-1/4'>
      <div className='animate-pulse flex space-x-4'>
        <div className='rounded-full bg-gray-500 h-12 w-12'></div>
        <div className='flex-1 space-y-4 py-1'>
          <div className='space-y-2'>
            <div className='h-4 bg-gray-500 rounded'></div>
            <div className='h-4 bg-gray-500 rounded w-5/6'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
