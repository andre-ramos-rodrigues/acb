import React from 'react'
import Image from "next/image";

const Left = () => {
  return (
    <main className="bg-neutral-200 w-[100%] min-h-[100%] text-white flex flex-row justify-center items-center align-center">
          <Image
              src="/user.png"
              alt="Logo"
              className="bg-neutral-200 rounded-full aspect-square object-cover self-center "
              width={270}
              height={270}
              priority
            />
        {/* <div className="bg-neutral-400 rounded-full w-[360px] h-[360px] mt-[-120px]"></div> */}
        {/*
        <div className='bg-neutral-300 text-neutral-700 font-light rounded-full w-[360px] h-[360px] ml-[-120px] mb-[-120px] flex flex-col align-center justify-center items-center'>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        </div>
         */}
    </main>
  )
}

export default Left