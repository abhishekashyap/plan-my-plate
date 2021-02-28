import React, { useEffect, useState } from "react";
import nutridigmServerInstance from "../../config/api/nutridigmServerInstance";
import { useRouter } from "next/router";
import ListCard from "../../components/ListCard";
import { FcCheckmark, FcApproval, FcHighPriority } from "react-icons/fc";
import { HiOutlineX } from "react-icons/hi";
import CardSkeleton from "../../components/CardSkeleton";
import getArrayFromRange from "../../utils/getArrayFromRange";

export default function DiseaseInfo() {
  const route = useRouter();
  const { id, title } = route.query;
  const [avoidItems, setAvoidItems] = useState<string>("");
  const [consumeItems, setConsumeItems] = useState<string>("");

  async function fetchItems(id: any) {
    const consumableItems = await nutridigmServerInstance.get(
      `topitemstoconsume?&problemId=${id}`
    );
    const avoidableItems = await nutridigmServerInstance.get(
      `topitemstoavoid?&problemId=${id}`
    );
    setConsumeItems(consumableItems.data[0]);
    setAvoidItems(avoidableItems.data[0]);
  }

  useEffect(() => {
    if (id) fetchItems(id);
  }, [id]);

  console.log(avoidItems);

  return (
    <div className='flex flex-col items-center'>
      <h3 className='text-7xl font-bold my-2 text-gray-700'>{title}</h3>

      <hr className='my-6 w-full border-2 border-gray-200' />

      <div className='flex flex-col items-center'>
        <h3 className='flex flex-row items-center text-4xl font-light my-6 text-gray-700'>
          Food items that will make your body happy&nbsp;
          <FcApproval />
        </h3>
        <div className='flex flex-row flex-wrap justify-center w-screen'>
          {avoidItems ? (
            avoidItems
              .split("; ")
              .map((item) => (
                <ListCard
                  title={item}
                  icon={<FcCheckmark />}
                  iconClasses='bg-gray-800'
                />
              ))
          ) : (
            <>
              {getArrayFromRange(6).map((i) => (
                <CardSkeleton key={i} />
              ))}
            </>
          )}
        </div>

        <hr className='my-6 w-full border-2 border-gray-200' />

        <h3 className='flex flex-row items-center text-4xl font-light my-6 text-gray-700'>
          Food items that will make you regret&nbsp;
          <FcHighPriority />
        </h3>
        <div className='flex flex-row flex-wrap justify-center w-screen'>
          {consumeItems ? (
            consumeItems
              .split("; ")
              .map((item) => (
                <ListCard
                  title={item}
                  icon={<HiOutlineX />}
                  iconClasses='bg-gray-800'
                />
              ))
          ) : (
            <>
              {getArrayFromRange(6).map((i) => (
                <CardSkeleton key={i} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
