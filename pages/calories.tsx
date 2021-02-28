import React, { useState } from "react";
import { GiBodyHeight } from "react-icons/gi";
import { FaWeight, FaUserFriends } from "react-icons/fa";
import InputRounded from "../components/InputRounded";

export default function calories() {
  const [calorie, setCalorie] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [age, setAge] = useState<number>();

  function calculateCalorie() {
    if (height && weight && age) {
      console.log(weight * 10 + 6.25 * height - 5 * age + 5);
      // male
      setCalorie(weight * 10 + 6.25 * height - 5 * age + 5);
      // female
      // return weight * 10 + 6.25 * height - 5 * age + 161;
    }
  }

  return (
    <div className='flex flex-col items-center'>
      <h3 className='text-7xl font-bold my-2 text-gray-700'>
        Calorie Calculator
      </h3>
      <hr className='my-6 w-full border-2 border-gray-200' />
      <h3 className='flex flex-row items-center text-4xl font-light mt-4 mb-2 text-gray-700'>
        Height
      </h3>
      <InputRounded
        input={height}
        setInput={setHeight}
        placeholder='Enter your height in cm'
        type='number'
        icon={<GiBodyHeight />}
      />
      <h3 className='flex flex-row items-center text-4xl font-light mt-4 mb-2 text-gray-700'>
        Weight
      </h3>
      <InputRounded
        input={weight}
        setInput={setWeight}
        placeholder='Enter your weight in kg'
        type='number'
        icon={<FaWeight />}
      />
      <h3 className='flex flex-row items-center text-4xl font-light mt-4 mb-2 text-gray-700'>
        Age
      </h3>
      <InputRounded
        input={age}
        setInput={setAge}
        placeholder='Enter your age'
        type='number'
        icon={<FaUserFriends />}
      />
      <button
        className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-12 rounded-full duration-300 my-6'
        type='submit'
        onClick={calculateCalorie}
      >
        Calculate
      </button>

      {!!calorie && (
        <>
          <h3 className='flex flex-row items-center text-4xl font-light mt-4 mb-2 text-gray-700'>
            Your daily calorie requirements
          </h3>
          <h3 className='text-7xl font-bold my-2 text-blue-500'>
            {calorie} kcal
          </h3>
        </>
      )}
    </div>
  );
}
