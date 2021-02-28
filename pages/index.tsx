import Card from "../components/Card";
import InputRounded from "../components/InputRounded";
import nutridigmServerInstance from "../config/api/nutridigmServerInstance";
import { InferGetServerSidePropsType } from "next";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Link from "next/link";

type DiseasesType = {
  problemID: number;
  hcText: string;
}[];

export async function getServerSideProps() {
  const res = await nutridigmServerInstance.get("healthconditions");
  return {
    props: {
      diseasesData: res.data as DiseasesType,
    },
  };
}

export default function Home({
  diseasesData,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const [inputVal, setInputVal] = useState("");
  return (
    <div className='flex flex-col items-center'>
      {/* Header */}
      <h3 className='text-7xl tracking-wide font-bold my-2 text-gray-700'>
        Plan My Plate
      </h3>
      <InputRounded
        input={inputVal}
        setInput={setInputVal}
        placeholder='Search'
        icon={<FiSearch />}
        type='search'
      />
      <Link href='/calories'>
        <button className='flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-12 rounded-full duration-300 my-6'>
          Goto calorie calculator&nbsp;
          <AiOutlineDoubleRight />
        </button>
      </Link>
      {/* Cards container */}
      <div className='flex flex-wrap items-center justify-center'>
        {diseasesData &&
          diseasesData
            .filter((disease) =>
              disease.hcText.toLowerCase().includes(inputVal.toLowerCase())
            )
            .map((disease) => (
              <Card
                id={disease.problemID}
                key={disease.problemID}
                title={disease.hcText}
              />
            ))}
      </div>
    </div>
  );
}
