import React from "react";
import Link from "next/link";
import getRandomColor from "../utils/getRandomColor";

type CardProps = {
  id: number;
  title: string;
};

export default function Card({ id, title }: CardProps): JSX.Element {
  return (
    <Link href={{ pathname: `/info/${id}`, query: { title: `${title}` } }}>
      <div
        className='bg-white m-4 rounded-lg shadow-sm cursor-pointer hover:shadow-xl duration-200 overflow-hidden border-gray-700'
        style={{ height: "250px", width: "250px" }}
      >
        <div
          className='h-1/2 overflow-hidden w-full object-cover'
          style={{ backgroundColor: getRandomColor() }}
        ></div>
        <div className='p-6'>
          <h3 className='font-semibold text-2xl mb-4 text-gray-600'>{title}</h3>
        </div>
      </div>
    </Link>
  );
}
