import React from "react";

type ListCardProps = {
  title: string;
  icon?: JSX.Element;
  iconClasses?: string;
};

export default function ListCard({ title, icon, iconClasses }: ListCardProps) {
  return (
    <div className='flex flex-col-reverse md:flex-row md:w-1/4 justify-between items-center bg-white p-6 m-2 md:m-4 shadow-md duration-300 rounded-lg'>
      <div className='flex w-full md:w-1/4 px-12 md:px-0 items-center'>
        <div
          className={`flex justify-center text-xl md:text-2xl text-white p-4 rounded-full shadow-md ${iconClasses}`}
          style={{ height: "60px", width: "60px" }}
        >
          {icon}
        </div>
      </div>
      <div className='flex flex-col w-full'>
        <p className='uppercase font-semibold text-center md:text-left md:font-bold text-gray-600'>
          {title}
        </p>
      </div>
    </div>
  );
}
